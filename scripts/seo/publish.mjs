#!/usr/bin/env node
// npm run seo:publish -- --day 1
// npm run seo:publish -- --slug <slug>
//
// The only command that flips a draft to published. Hard-gated on
// status === "approved" — there is no path from "draft" straight to
// "published". Re-runs safety checks and full validation before touching
// anything, and does not commit/push (that stays part of the repo's
// normal git workflow, run by a human or the calling agent).
import fs from "node:fs";
import { execSync } from "node:child_process";
import matter from "gray-matter";
import { parseArgs } from "../lib/args.mjs";
import { loadPlan, savePlan, findDay, findSlug, postPath, postExists, buildValidRouteSet } from "../lib/repo.mjs";
import { lintHasNoNewIssues } from "../lib/lint.mjs";
import { runPrePublishChecks } from "./checks.mjs";

function run(cmd) {
  try {
    execSync(cmd, { stdio: "pipe" });
    return { ok: true };
  } catch (e) {
    return { ok: false, output: e.stdout?.toString() || e.message };
  }
}

function main() {
  const args = parseArgs();
  if (!args.day && !args.slug) {
    console.error("Usage: npm run seo:publish -- --day <N>   OR   npm run seo:publish -- --slug <slug>");
    process.exit(1);
  }

  const plan = loadPlan();
  const day = args.day ? findDay(plan, args.day) : findSlug(plan, args.slug);
  if (!day) {
    console.error("No matching plan item found.");
    process.exit(1);
  }

  const status = day.status || "planned";

  if (status === "published") {
    console.log(`Day ${day.day} is already published (${day.publishedAt}) — nothing to do.`);
    process.exit(0);
  }

  if (status !== "approved") {
    console.error(`Day ${day.day} is in status "${status}", not "approved". Publishing requires explicit approval first:`);
    console.error(`  npm run seo:prepare -- --day ${day.day}   (if not yet drafted)`);
    console.error(`  npm run seo:approve -- --day ${day.day}`);
    process.exit(1);
  }

  if (!postExists(day.slug)) {
    console.error(`content/blog/${day.slug}.md is missing even though the plan says "approved" — inconsistent state, resolve manually.`);
    process.exit(1);
  }

  console.log(`Publishing Day ${day.day} — "${day.title}"...\n`);

  // ── 1-2. Re-run pre-publish safety checks (cannibalization etc.) ──
  const checks = runPrePublishChecks(day, plan, { acknowledgeRisk: Boolean(args["acknowledge-risk"]) });
  if (!checks.ok) {
    console.error("BLOCKED — a new conflict appeared since approval:\n");
    for (const f of checks.failures) console.error(`  ✖ ${f}`);
    console.error("\nPublish aborted. Status left as \"approved\" — re-check and try again.");
    process.exit(1);
  }

  // ── Read the draft, block on unresolved placeholders ──
  const raw = fs.readFileSync(postPath(day.slug), "utf8");
  const { data: frontmatter, content: body } = matter(raw);

  const unresolvedPlaceholders = (body.match(/\[MG EDITORIAL INPUT REQUIRED:[^\]]*\]/g) || []).length;
  if (unresolvedPlaceholders > 0) {
    console.error(`BLOCKED — ${unresolvedPlaceholders} unresolved "[MG EDITORIAL INPUT REQUIRED...]" placeholder(s) remain in the draft body.`);
    console.error("Fill in real MG Photography experience for each one before publishing.");
    process.exit(1);
  }
  if (String(frontmatter.featuredImage || "").includes("REPLACE-WITH-REAL-IMAGE")) {
    console.error("BLOCKED — featuredImage is still a placeholder. Select and confirm a real image before publishing.");
    process.exit(1);
  }

  // ── 3. Every internal link in the draft body must resolve right now ──
  const { routes } = buildValidRouteSet();
  const linkRe = /\]\((\/[^)]+)\)/g;
  const unresolved = [];
  let m;
  while ((m = linkRe.exec(body))) {
    const href = m[1];
    if (!routes.has(href)) unresolved.push(href);
  }
  if (unresolved.length) {
    console.error("BLOCKED — draft contains links that don't resolve to a live page:");
    for (const u of unresolved) console.error(`  ✖ ${u}`);
    process.exit(1);
  }

  // ── 4-6. Flip status, set publishedAt, write file ──
  const publishedAt = new Date().toISOString().slice(0, 10);
  frontmatter.status = "published";
  frontmatter.publishedAt = publishedAt;
  fs.writeFileSync(postPath(day.slug), matter.stringify(body, frontmatter));

  // ── 7. Validators ──
  console.log("Running validation...");
  const linkCheck = run("node scripts/validate-internal-links.mjs");
  console.log(`  ${linkCheck.ok ? "✓" : "✗"} link validator`);
  if (!linkCheck.ok) {
    // Revert the status flip so we fail safe, never leaving a half-published file.
    frontmatter.status = "draft";
    delete frontmatter.publishedAt;
    fs.writeFileSync(postPath(day.slug), matter.stringify(body, frontmatter));
    console.error("BLOCKED — link validator failed after publishing. Reverted to draft.\n" + linkCheck.output);
    process.exit(1);
  }

  const typecheck = run("npx tsc --noEmit");
  console.log(`  ${typecheck.ok ? "✓" : "✗"} typecheck`);
  const lint = lintHasNoNewIssues();
  console.log(`  ${lint.ok ? "✓" : "✗"} lint (no new issues)`);
  const buildResult = run("npm run build");
  console.log(`  ${buildResult.ok ? "✓" : "✗"} build`);

  if (!typecheck.ok || !lint.ok || !buildResult.ok) {
    frontmatter.status = "draft";
    delete frontmatter.publishedAt;
    fs.writeFileSync(postPath(day.slug), matter.stringify(body, frontmatter));
    console.error("BLOCKED — validation failed after publishing. Reverted to draft. Fix the issue and re-approve/publish.");
    process.exit(1);
  }

  // ── 8-9. Confirm the route + sitemap entry exist in the fresh build ──
  const routeFile = `out/blog/${day.slug}/index.html`;
  const routeOk = fs.existsSync(routeFile);
  const sitemapOk = fs.existsSync("out/sitemap.xml") && fs.readFileSync("out/sitemap.xml", "utf8").includes(`/blog/${day.slug}/`);
  console.log(`  ${routeOk ? "✓" : "✗"} route generated (${routeFile})`);
  console.log(`  ${sitemapOk ? "✓" : "✗"} sitemap includes the article`);

  if (!routeOk || !sitemapOk) {
    frontmatter.status = "draft";
    delete frontmatter.publishedAt;
    fs.writeFileSync(postPath(day.slug), matter.stringify(body, frontmatter));
    console.error("BLOCKED — build succeeded but the route/sitemap didn't include the article. Reverted to draft.");
    process.exit(1);
  }

  // ── 11. Update plan status ──
  day.status = "published";
  day.publishedAt = publishedAt;
  savePlan(plan);

  console.log(`\n✓ Published: content/blog/${day.slug}.md (status: published, publishedAt: ${publishedAt})`);
  console.log("\n12. Next step (not run automatically by this script):");
  console.log(`   git add content/blog/${day.slug}.md docs/SEO_90_DAY_CONTENT_PLAN.json`);
  console.log(`   git commit -m "Publish: ${day.title}"`);
  console.log("   git push");
}

main();
