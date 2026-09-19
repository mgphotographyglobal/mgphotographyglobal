// Pre-generation / pre-publish safety checks for the SEO daily-article
// workflow. Deliberately simple, deterministic heuristics — not an NLP
// system — per the brief's "keep implementation simple" instruction.
//
// Every check function returns { ok: boolean, reason?: string, warnings?: string[] }.
// `ok: false` means STOP — the caller must not generate/publish.
import {
  loadPosts,
  postExists,
  loadGuidesPages,
  buildValidRouteSet,
  findSlug,
} from "../lib/repo.mjs";

const STOPWORDS = new Set(["a", "an", "the", "for", "your", "you", "to", "in", "of", "and", "is", "what", "how", "with", "on", "at", "dubai", "photography", "photoshoot"]);

function keywordTokens(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

function overlapScore(a, b) {
  const setA = new Set(keywordTokens(a));
  const setB = new Set(keywordTokens(b));
  if (setA.size === 0 || setB.size === 0) return 0;
  let shared = 0;
  for (const t of setA) if (setB.has(t)) shared++;
  return shared / Math.min(setA.size, setB.size);
}

/** 1. Duplicate slug — a content/blog/<slug>.md already exists. */
export function checkSlugAvailable(day) {
  if (postExists(day.slug)) {
    return { ok: false, reason: `A file already exists at content/blog/${day.slug}.md — this planned item may already be drafted/published. Run "npm run seo:status" to check its current status before re-preparing.` };
  }
  return { ok: true };
}

/** 2. Cannibalization risk already flagged in the plan itself. */
export function checkPlanFlaggedRisk(day, { acknowledgeRisk = false } = {}) {
  const risk = day.cannibalizationRisk || "None";
  if (risk === "High") {
    return { ok: false, reason: `Plan flags this item as HIGH cannibalization risk: ${day.cannibalizationNotes}. This must be resolved (retarget/merge) before drafting — it cannot be overridden with --acknowledge-risk.` };
  }
  if (risk === "Medium" && !acknowledgeRisk) {
    return { ok: false, reason: `Plan flags this item as MEDIUM cannibalization risk: ${day.cannibalizationNotes}. Re-read the note, confirm the angle is genuinely distinct, then re-run with --acknowledge-risk to proceed.` };
  }
  return { ok: true, warnings: risk !== "None" ? [`Cannibalization risk "${risk}": ${day.cannibalizationNotes}`] : [] };
}

/**
 * 3. Same-intent-already-exists check, re-run fresh against the CURRENT
 * repo state (not just the plan's point-in-time snapshot) — compares the
 * planned title/primaryKeyword against every currently published post AND
 * every static /guides/ page title+description.
 */
export function checkLiveCannibalization(day) {
  const posts = loadPosts().filter((p) => p.isPublished);
  const guides = loadGuidesPages();
  const warnings = [];
  const THRESHOLD = 0.6;

  for (const p of posts) {
    const score = overlapScore(day.primaryKeyword, p.data.title || "");
    if (score >= THRESHOLD) {
      warnings.push(`High title/keyword overlap (${Math.round(score * 100)}%) with published post "${p.data.title}" (/blog/${p.slug}/). Confirm this is still a genuinely distinct angle.`);
    }
  }
  for (const g of guides) {
    const score = Math.max(overlapScore(day.primaryKeyword, g.title), overlapScore(day.primaryKeyword, g.description));
    if (score >= THRESHOLD) {
      warnings.push(`High title/keyword overlap (${Math.round(score * 100)}%) with existing static guide "${g.title}" (${g.route}). Confirm this is still a genuinely distinct angle.`);
    }
  }

  // Hard stop only for a near-exact match (both title AND primary keyword
  // essentially identical) — anything fuzzier is a warning for human review,
  // consistent with the plan's own risk labels being the primary gate.
  const nearExact = warnings.some((w) => w.includes("(100%)") || w.includes("(9"));
  if (nearExact) {
    return { ok: false, reason: `Near-exact title/keyword match against existing content. ${warnings[0]}`, warnings };
  }
  return { ok: true, warnings };
}

/** 4. Pillar dependency — a supporting article's pillar must already be published. */
export function checkPillarPublished(day, plan) {
  if (day.role !== "supporting") return { ok: true };
  if (!day.pillar) return { ok: true };

  // Already-published pillars from Phase 1 (not tracked as plan slugs).
  const KNOWN_PUBLISHED_PILLARS = new Set(["newborn-photography-complete-guide"]);
  if (KNOWN_PUBLISHED_PILLARS.has(day.pillar)) return { ok: true };

  if (postExists(day.pillar)) {
    const posts = loadPosts();
    const pillarPost = posts.find((p) => p.slug === day.pillar);
    if (pillarPost?.isPublished) return { ok: true };
    return { ok: false, reason: `This article's pillar ("${day.pillar}") exists as a file but is not yet published (status: ${pillarPost?.data.status}). Publish the pillar first.` };
  }

  const pillarDay = findSlug(plan, day.pillar);
  return {
    ok: false,
    reason: `This article's pillar ("${day.pillar}"${pillarDay ? `, Day ${pillarDay.day}` : ""}) has not been drafted or published yet. Prepare and publish the pillar before its supporting articles.`,
  };
}

/** 5. Every outgoing link target in the plan must resolve to something real and public right now. */
export function checkOutgoingLinksResolve(day) {
  const { routes } = buildValidRouteSet();
  const broken = [];
  for (const link of day.outgoingLinks || []) {
    const target = link.target;
    if (target.startsWith("/blog/") && target.endsWith("/")) {
      if (!routes.has(target)) {
        // Might be a link to another still-unpublished planned article —
        // that's expected pre-publication and is NOT an error here; the
        // draft generator simply omits unresolvable links (see generate.mjs).
        continue;
      }
    } else if (!routes.has(target)) {
      broken.push(link);
    }
  }
  // This check never hard-stops preparation — the draft generator already
  // filters to only-resolvable links. It surfaces info for the report.
  return { ok: true, warnings: broken.map((l) => `Planned outgoing link target no longer exists: ${l.target} (was for "${l.label}")`) };
}

function aggregate(results) {
  const failures = results.filter(([, r]) => !r.ok);
  const warnings = results.flatMap(([name, r]) => (r.warnings || []).map((w) => `[${name}] ${w}`));
  return {
    ok: failures.length === 0,
    failures: failures.map(([name, r]) => `[${name}] ${r.reason}`),
    warnings,
  };
}

/** Runs every pre-GENERATION check (before a draft file exists yet). */
export function runPreGenerationChecks(day, plan, opts = {}) {
  return aggregate([
    ["slug availability", checkSlugAvailable(day)],
    ["plan-flagged cannibalization risk", checkPlanFlaggedRisk(day, opts)],
    ["live cannibalization re-check", checkLiveCannibalization(day)],
    ["pillar dependency", checkPillarPublished(day, plan)],
    ["outgoing link resolution", checkOutgoingLinksResolve(day)],
  ]);
}

/**
 * Runs every pre-PUBLISH check (the draft file already exists — that's
 * expected, not a conflict). Re-checks cannibalization and the pillar
 * dependency fresh in case the repo changed since approval.
 */
export function runPrePublishChecks(day, plan, opts = {}) {
  return aggregate([
    ["plan-flagged cannibalization risk", checkPlanFlaggedRisk(day, opts)],
    ["live cannibalization re-check", checkLiveCannibalization(day)],
    ["pillar dependency", checkPillarPublished(day, plan)],
  ]);
}
