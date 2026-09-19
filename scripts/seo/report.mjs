import fs from "node:fs";
import path from "node:path";

const REPORTS_DIR = path.join(process.cwd(), "docs", "seo-reports");

export function buildPrepareReport({ day, checks, generated, validation }) {
  const lines = [];
  lines.push(`# Review Report — Day ${day.day}: ${day.title}`);
  lines.push("");
  lines.push(`**Generated:** ${new Date().toISOString()}`);
  lines.push("");
  lines.push("## Article");
  lines.push(`- Day: ${day.day}`);
  lines.push(`- Primary keyword/topic: ${day.primaryKeyword}`);
  lines.push(`- Search intent: ${day.searchIntent}`);
  lines.push(`- Primary service: ${day.primaryService || "—"}`);
  lines.push(`- Cluster: ${day.cluster}`);
  lines.push(`- Pillar/supporting: ${day.role}${day.role === "supporting" ? ` (pillar: ${day.pillar})` : ""}`);
  lines.push(`- Draft path: \`content/blog/${day.slug}.md\``);
  lines.push("");
  lines.push("## SEO");
  lines.push(`- SEO title: ${generated.frontmatter.seoTitle}`);
  lines.push(`- Meta description (draft, needs human polish): ${generated.frontmatter.metaDescription}`);
  lines.push(`- Canonical: defaults to https://mgphotographyglobal.com/blog/${day.slug}/ (not overridden)`);
  lines.push("");
  lines.push("## Internal links added");
  if (generated.resolvedLinks.length === 0) lines.push("- (none resolved yet — see skipped links below)");
  for (const l of generated.resolvedLinks) lines.push(`- ${l.target} — anchor: "${l.anchor}"`);
  if (generated.skippedLinks.length) {
    lines.push("");
    lines.push("**Skipped (target not yet published/live — expected, not an error):**");
    for (const l of generated.skippedLinks) lines.push(`- ${l.target} ("${l.label}")`);
  }
  lines.push("");
  lines.push("## Incoming-link recommendations");
  if ((day.incomingLinkOpportunities || []).length === 0) {
    lines.push("- none in the plan for this article");
  } else {
    for (const inc of day.incomingLinkOpportunities) {
      lines.push(`- From "${inc.from}" — suggested anchor: "${inc.anchor}" (apply by hand once that article exists/is published; this workflow does not auto-edit other articles)`);
    }
  }
  lines.push("");
  lines.push("## Image");
  lines.push(generated.needsImageReview
    ? "- **NEEDS REVIEW** — no confident existing-portfolio match found; frontmatter has a placeholder path (`featuredImage`). Select a real MG Photography image before approving."
    : `- Best-effort match from existing portfolio: \`${generated.frontmatter.featuredImage}\` — **please confirm this is actually appropriate** before approving; this was chosen heuristically, not visually verified.`);
  lines.push(`- Concept (from plan): ${day.featuredImageConcept}`);
  lines.push("");
  lines.push("## MG editorial input required");
  lines.push(`- ${day.eeatOriginalExperience ? "Yes" : "No"}`);
  if (day.eeatOriginalExperience) {
    lines.push(`- Locations in article: every \`[MG EDITORIAL INPUT REQUIRED: ...]\` placeholder (search the draft file for that string).`);
  }
  lines.push("");
  lines.push("## Cannibalization check");
  lines.push(`- ${checks.ok ? "Pass" : "Review required"}`);
  if (checks.warnings.length) {
    lines.push("- Warnings:");
    for (const w of checks.warnings) lines.push(`  - ${w}`);
  }
  lines.push("");
  lines.push("## Validation");
  lines.push(`- Internal link validator: ${validation.linkValidator ? "pass" : "FAIL"}`);
  lines.push(`- Typecheck: ${validation.typecheck ? "pass" : "FAIL"}`);
  lines.push(`- Lint (no NEW issues introduced): ${validation.lint ? "pass" : "FAIL"}`);
  lines.push(`- Build: ${validation.build ? "pass" : "FAIL"}`);
  lines.push("");
  const ready = checks.ok && validation.linkValidator && validation.typecheck && validation.lint && validation.build && !generated.needsImageReview;
  lines.push(`## Publish recommendation`);
  lines.push(ready ? "**READY FOR HUMAN REVIEW**" : "**BLOCKED — REVIEW REQUIRED**");
  if (!ready) {
    lines.push("");
    lines.push("Reasons:");
    if (!checks.ok) for (const f of checks.failures) lines.push(`- ${f}`);
    if (generated.needsImageReview) lines.push("- Featured image needs manual selection.");
    if (!validation.linkValidator) lines.push("- Internal link validator failed.");
    if (!validation.typecheck) lines.push("- Typecheck failed.");
    if (!validation.lint) lines.push("- Lint introduced a new issue.");
    if (!validation.build) lines.push("- Build failed.");
  }
  lines.push("");
  lines.push("This draft is a **structured scaffold**, not finished prose — review and");
  lines.push("polish the body text, fill every editorial placeholder, and confirm the");
  lines.push("featured image before approving.");
  lines.push("");

  return lines.join("\n");
}

export function writeReport(day, contents) {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const reportPath = path.join(REPORTS_DIR, `day-${day.day}-${day.slug}.md`);
  fs.writeFileSync(reportPath, contents);
  return reportPath;
}
