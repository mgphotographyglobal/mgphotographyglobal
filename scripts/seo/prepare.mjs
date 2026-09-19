#!/usr/bin/env node
// npm run seo:prepare -- --day 1
// npm run seo:prepare -- --slug newborn-photography-safety-how-we-keep-babies-safe
//
// PLAN -> GENERATE -> VALIDATE -> DRAFT. Never publishes. Idempotent: if a
// draft already exists for this item, it reports current state instead of
// regenerating/duplicating it.
import fs from "node:fs";
import { execSync } from "node:child_process";
import { parseArgs } from "../lib/args.mjs";
import { loadPlan, savePlan, findDay, findSlug, postExists } from "../lib/repo.mjs";
import { lintHasNoNewIssues } from "../lib/lint.mjs";
import { runPreGenerationChecks } from "./checks.mjs";
import { generateDraft } from "./generate.mjs";
import { buildPrepareReport, writeReport } from "./report.mjs";

function run(cmd) {
  try {
    execSync(cmd, { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function main() {
  const args = parseArgs();
  if (!args.day && !args.slug) {
    console.error("Usage: npm run seo:prepare -- --day <N>   OR   npm run seo:prepare -- --slug <slug>");
    process.exit(1);
  }

  const plan = loadPlan();
  const day = args.day ? findDay(plan, args.day) : findSlug(plan, args.slug);
  if (!day) {
    console.error(`No plan item found for ${args.day ? `day ${args.day}` : `slug "${args.slug}"`}.`);
    process.exit(1);
  }

  const status = day.status || "planned";

  // ── Idempotency: don't regenerate an item that's already past "planned" ──
  if (status !== "planned") {
    console.log(`Day ${day.day} ("${day.title}") is already in status "${status}".`);
    if (status === "draft" || status === "approved") {
      console.log(`Draft file: content/blog/${day.slug}.md`);
      console.log(`Existing report: docs/seo-reports/day-${day.day}-${day.slug}.md`);
      console.log('Nothing to do — edit the existing draft directly, or run "npm run seo:approve" / "npm run seo:publish" next.');
    }
    process.exit(0);
  }

  if (postExists(day.slug)) {
    console.error(`content/blog/${day.slug}.md already exists but the plan still says "planned" — this is an inconsistent state.`);
    console.error("Resolve manually (check the file's own status field) before re-running prepare.");
    process.exit(1);
  }

  console.log(`Preparing Day ${day.day} — "${day.title}"...\n`);

  // ── Pre-generation safety checks ──
  const checks = runPreGenerationChecks(day, plan, { acknowledgeRisk: Boolean(args["acknowledge-risk"]) });
  if (!checks.ok) {
    console.error("STOPPED — pre-generation checks failed:\n");
    for (const f of checks.failures) console.error(`  ✖ ${f}`);
    console.error("\nNo draft was created. No plan status was changed.");
    process.exit(1);
  }
  if (checks.warnings.length) {
    console.log("Warnings (non-blocking):");
    for (const w of checks.warnings) console.log(`  ⚠ ${w}`);
    console.log("");
  }

  // ── Generate ──
  const generated = generateDraft(day, plan);
  fs.writeFileSync(generated.filePath, generated.fileContents);
  console.log(`Draft written: ${generated.filePath}`);

  // ── Update plan status (workflow fields only — no strategy fields touched) ──
  day.status = "draft";
  day.draftCreatedAt = new Date().toISOString();
  day.draftPath = `content/blog/${day.slug}.md`;
  savePlan(plan);

  // ── Validate ──
  console.log("\nRunning validation...");
  const validation = {
    linkValidator: run("node scripts/validate-internal-links.mjs"),
    typecheck: run("npx tsc --noEmit"),
    lint: lintHasNoNewIssues().ok,
    build: run("npm run build"),
  };
  for (const [k, v] of Object.entries(validation)) console.log(`  ${v ? "✓" : "✗"} ${k}`);

  // ── Report ──
  const reportMd = buildPrepareReport({ day, checks, generated, validation });
  const reportPath = writeReport(day, reportMd);
  console.log(`\nReview report: ${reportPath}`);
  console.log(reportMd.includes("READY FOR HUMAN REVIEW") ? "\n✓ READY FOR HUMAN REVIEW" : "\n⚠ BLOCKED — REVIEW REQUIRED (see report)");
  console.log(`\nNext: review the draft and report, then run:  npm run seo:approve -- --day ${day.day}`);
}

main();
