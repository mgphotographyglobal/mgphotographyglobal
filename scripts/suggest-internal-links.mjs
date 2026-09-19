#!/usr/bin/env node
/**
 * Internal link recommendation helper — NOT an auto-linker. It only ever
 * prints suggestions for a human (or an automated publishing workflow) to
 * review and place by hand inside the article's own prose. Nothing in the
 * repo ever gets edited by this script.
 *
 * Two modes:
 *
 *   node scripts/suggest-internal-links.mjs <slug>
 *     "I'm about to publish/have published <slug> — what should it link
 *     out to?" Prints its primary service page, its cluster's pillar (or
 *     supporting articles, if it is the pillar), and topically related
 *     posts, each with a suggested natural anchor phrase.
 *
 *   node scripts/suggest-internal-links.mjs --reciprocal <slug>
 *     "Now that <slug> exists, which OLDER published posts could link
 *     back to it?" — the reciprocal-discovery half of the workflow: run
 *     this right after publishing a new article to find existing content
 *     worth updating with a link to it.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content", "blog");

const SERVICES = [
  { slug: "newborn-photography", title: "Newborn Photography", href: "/dubai-newborn-photography/" },
  { slug: "baby-photography", title: "Baby Photography", href: "/baby-photography-dubai/" },
  { slug: "maternity-photography", title: "Maternity Photography", href: "/maternity-photography-dubai/" },
  { slug: "wedding-photography", title: "Wedding Photography", href: "/wedding-photography-dubai/" },
  { slug: "pre-wedding-photography", title: "Pre-Wedding Photography", href: "/pre-wedding-photography-dubai/" },
  { slug: "outdoor-photography", title: "Outdoor Photography", href: "/outdoor-photography-dubai/" },
  { slug: "birthday-photography", title: "Birthday Photography", href: "/birthday-photography-dubai/" },
  { slug: "real-estate-photography", title: "Real Estate Photography", href: "/real-estate-photography-dubai/" },
  { slug: "architecture-photography", title: "Architecture Photography", href: "/architecture-photography-dubai/" },
];

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function loadPosts() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
      const { data } = matter(raw);
      const slug = filename.replace(/\.md$/, "");
      const publishedAt = new Date(data.publishedAt);
      const isPublished =
        data.status === "published" && !Number.isNaN(publishedAt.getTime()) && publishedAt.getTime() <= Date.now();
      return { slug, ...data, cluster: data.cluster ? slugify(data.cluster) : slugify(data.category || ""), isPublished };
    })
    .filter((p) => p.isPublished);
}

function anchorSuggestion(target) {
  // A short, natural, descriptive phrase — never the raw title verbatim,
  // and never a generic "click here" / "learn more".
  return target.excerpt ? target.excerpt.split(".")[0].toLowerCase() : target.title.toLowerCase();
}

function suggestOutbound(slug) {
  const posts = loadPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    console.error(`No published post found with slug "${slug}".`);
    process.exit(1);
  }

  console.log(`\nSuggestions for "${post.title}" (/blog/${slug}/)\n${"=".repeat(50)}`);

  const service = SERVICES.find((s) => s.slug === slugify(post.category));
  if (service) {
    console.log(`\nPrimary service page:`);
    console.log(`  -> ${service.href}  (anchor idea: "${service.title.toLowerCase()} in Dubai" / "our ${service.title.toLowerCase()} sessions")`);
  }

  const pillar = posts.find((p) => p.isPillar && p.cluster === post.cluster && p.slug !== post.slug);
  if (!post.isPillar && pillar) {
    console.log(`\nCluster pillar:`);
    console.log(`  -> /blog/${pillar.slug}/  (anchor idea: "${anchorSuggestion(pillar)}")`);
  }

  const clusterMates = posts.filter((p) => p.cluster === post.cluster && p.slug !== post.slug && !p.isPillar);
  const tagMates = posts.filter(
    (p) => p.slug !== post.slug && (p.tags || []).some((t) => (post.tags || []).some((pt) => slugify(pt) === slugify(t)))
  );
  const candidates = [...clusterMates, ...tagMates].filter(
    (p, i, arr) => arr.findIndex((x) => x.slug === p.slug) === i && p.slug !== pillar?.slug
  );

  if (candidates.length) {
    console.log(`\nRelated articles worth linking to (pick 2-5 that genuinely fit the prose):`);
    for (const c of candidates.slice(0, 6)) {
      console.log(`  -> /blog/${c.slug}/  (anchor idea: "${anchorSuggestion(c)}")`);
    }
  }

  console.log("\nReminder: place these as natural links inside the article's prose where they");
  console.log("genuinely help the reader — do not force links where the topic doesn't fit.\n");
}

function suggestReciprocal(slug) {
  const posts = loadPosts();
  const target = posts.find((p) => p.slug === slug);
  if (!target) {
    console.error(`No published post found with slug "${slug}".`);
    process.exit(1);
  }

  const older = posts.filter((p) => p.slug !== slug && new Date(p.publishedAt) < new Date(target.publishedAt));

  const candidates = older
    .map((p) => {
      let reason = null;
      if (slugify(p.category) === slugify(target.category)) reason = "same category";
      else if (p.cluster === target.cluster) reason = "same cluster";
      else if ((p.tags || []).some((t) => (target.tags || []).some((tt) => slugify(tt) === slugify(t)))) reason = "shared tag";
      return reason ? { post: p, reason } : null;
    })
    .filter(Boolean);

  console.log(`\nOlder posts that could link back to "${target.title}" (/blog/${slug}/)\n${"=".repeat(50)}`);
  if (candidates.length === 0) {
    console.log("\nNo topically related older posts found.\n");
    return;
  }
  for (const { post, reason } of candidates) {
    console.log(`\nFrom: ${post.title}  (/blog/${post.slug}/)  [${reason}]`);
    console.log(`  Suggested anchor: "${anchorSuggestion(target)}"`);
    console.log(`  Suggested link:   /blog/${slug}/`);
  }
  console.log("\nReview each and add the link only where it fits naturally in the existing prose.\n");
}

const args = process.argv.slice(2);
if (args[0] === "--reciprocal") {
  if (!args[1]) {
    console.error("Usage: node scripts/suggest-internal-links.mjs --reciprocal <slug>");
    process.exit(1);
  }
  suggestReciprocal(args[1]);
} else if (args[0]) {
  suggestOutbound(args[0]);
} else {
  console.error("Usage:");
  console.error("  node scripts/suggest-internal-links.mjs <slug>");
  console.error("  node scripts/suggest-internal-links.mjs --reciprocal <slug>");
  process.exit(1);
}
