// Builds the frontmatter + body scaffold for a planned article. This is a
// SCAFFOLD generator, not a prose-quality generator: a plain script has no
// access to an LLM, so it produces correct structure, safe (non-fabricated)
// generic content, explicit editorial placeholders where real MG
// Photography experience is required, and only links that resolve right
// now. Turning the scaffold into publish-quality prose is the REVIEW step
// in PLAN -> GENERATE -> VALIDATE -> DRAFT -> REVIEW -> APPROVE -> PUBLISH
// — done by a human editor or an actual Claude session, not this script.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { loadPosts, buildValidRouteSet, postPath } from "../lib/repo.mjs";

const EDITORIAL_PLACEHOLDER = (topic) =>
  `[MG EDITORIAL INPUT REQUIRED: Add 2–3 sentences of MG Photography's actual working experience on ${topic} here — do not publish this placeholder as-is.]`;

function findSlugForTitle(plan, title) {
  return plan.days.find((d) => d.title === title)?.slug;
}

function pickGenericImage(day) {
  // Best-effort only — reuses an existing real gallery image whose folder
  // name matches the category, never a fabricated/AI image. Always flagged
  // as needing human confirmation in the review report (see report.mjs).
  const galleryDir = path.join(process.cwd(), "public", "images", "gallery");
  const categoryWord = (day.primaryService || "").split(" ")[0].toLowerCase(); // "Newborn", "Maternity", "Wedding", ...
  if (!fs.existsSync(galleryDir)) return null;
  const files = fs.readdirSync(galleryDir).filter((f) => f.toLowerCase().includes(categoryWord));
  if (files.length === 0) return null;
  // Deterministic pick (day number mod count) so repeated runs are stable.
  const chosen = files[day.day % files.length];
  return `/images/gallery/${chosen}`;
}

function buildIntro(day) {
  return `${day.contentAngle} This guide answers a question we hear often: *${day.userQuestion}*`;
}

function buildSection(h2, day, isFirst) {
  const lines = [`## ${h2}`, ""];
  if (day.eeatOriginalExperience) {
    lines.push(`On this specifically, our approach as MG Photography UAE is what actually matters to a reader here — generic advice alone won't do it justice.`);
    lines.push("");
    lines.push(EDITORIAL_PLACEHOLDER(h2.toLowerCase()));
  } else {
    lines.push(`${h2} matters for ${day.targetAudience.toLowerCase()} because it directly affects the outcome of the session — here's what to know.`);
  }
  if (isFirst && day.outgoingLinks?.[0]) {
    const l = day.outgoingLinks[0];
    lines.push("");
    lines.push(`If you're ready to plan a session, see [${l.anchor}](${l.target}).`);
  }
  lines.push("");
  return lines.join("\n");
}

/**
 * Only links that resolve to a route that exists RIGHT NOW are ever
 * written into the body — never a sibling planned-but-unpublished article,
 * a draft, or a removed page (see checks.mjs for the pre-generation gate
 * that catches the rest).
 */
function resolvableOutgoingLinks(day) {
  const { routes } = buildValidRouteSet();
  const resolved = [];
  for (const link of day.outgoingLinks || []) {
    if (routes.has(link.target)) {
      resolved.push(link);
      continue;
    }
    // A /blog/<slug>/ target that isn't resolvable yet is almost always a
    // sibling planned article that hasn't been published — correctly
    // excluded, not an error.
  }
  return resolved;
}

function resolvablePillarLink(day, plan) {
  if (day.role !== "supporting" || !day.pillar) return null;
  const posts = loadPosts();
  const KNOWN_PUBLISHED_PILLARS = new Set(["newborn-photography-complete-guide"]);
  const isPublished = KNOWN_PUBLISHED_PILLARS.has(day.pillar) || posts.find((p) => p.slug === day.pillar)?.isPublished;
  if (!isPublished) return null;
  const pillarDay = plan.days.find((d) => d.slug === day.pillar);
  return { target: `/blog/${day.pillar}/`, anchor: pillarDay ? pillarDay.title.toLowerCase() : "complete guide" };
}

function buildBody(day, plan) {
  const parts = [buildIntro(day), ""];
  day.suggestedH2s.forEach((h2, i) => parts.push(buildSection(h2, day, i === 0)));

  const pillarLink = resolvablePillarLink(day, plan);
  if (pillarLink) {
    parts.push(`For the full picture, see our [${pillarLink.anchor}](${pillarLink.target}).`);
    parts.push("");
  }

  return parts.join("\n").trim() + "\n";
}

function truncateAtWordBoundary(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

function buildTags(day) {
  const tags = [day.primaryKeyword];
  if (day.targetLocation?.startsWith("Dubai")) tags.push("Dubai");
  const extra = (day.secondaryKeywords || [])[0];
  if (extra) {
    const short = extra.split(" ").slice(0, 2).join(" ");
    if (short && !tags.includes(short)) tags.push(short);
  }
  return [...new Set(tags)];
}

function buildFrontmatter(day, plan) {
  const image = pickGenericImage(day);
  const relatedSlugs = (day.relatedArticles || [])
    .map((title) => findSlugForTitle(plan, title))
    .filter(Boolean)
    .filter((slug) => loadPosts().find((p) => p.slug === slug && p.isPublished));

  const fm = {
    title: day.title,
    seoTitle: day.seoTitleSuggestion,
    metaDescription: truncateAtWordBoundary(`${day.userQuestion} ${day.contentAngle}`, 155),
    excerpt: day.contentAngle,
    featuredImage: image || "/images/gallery/REPLACE-WITH-REAL-IMAGE.jpg",
    featuredImageAlt: day.featuredImageConcept,
    category: day.primaryService || "Photography Tips",
    tags: buildTags(day),
    author: "MG Photography UAE",
    publishedAt: new Date().toISOString().slice(0, 10),
    status: "draft",
    focusKeyword: day.primaryKeyword,
    cluster: day.cluster,
  };
  if (day.role === "pillar") fm.isPillar = true;
  if (relatedSlugs.length) fm.relatedSlugs = relatedSlugs;

  return fm;
}

export function generateDraft(day, plan) {
  const frontmatter = buildFrontmatter(day, plan);
  const body = buildBody(day, plan);
  const fileContents = matter.stringify(body, frontmatter);
  const filePath = postPath(day.slug);

  const needsImageReview = frontmatter.featuredImage.includes("REPLACE-WITH-REAL-IMAGE");
  const resolvedLinks = resolvableOutgoingLinks(day);
  const skippedLinks = (day.outgoingLinks || []).filter((l) => !resolvedLinks.includes(l));

  return { filePath, fileContents, frontmatter, needsImageReview, resolvedLinks, skippedLinks };
}
