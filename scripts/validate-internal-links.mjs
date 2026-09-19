#!/usr/bin/env node
/**
 * Internal link validator.
 *
 * Scans content/blog/*.md and app/**\/*.tsx for internal links and checks
 * every one against the site's actual routes — derived by walking app/ for
 * page.tsx files and by reading blog post frontmatter, never from a
 * separately hand-maintained list that could drift out of sync.
 *
 * Findings on PUBLISHED posts / real .tsx files are errors (exit 1).
 * Findings on DRAFT/future-dated posts are warnings (non-blocking) so
 * authors get early feedback without the build failing on a post that
 * isn't public yet.
 *
 * Run standalone with `npm run validate:links`, or automatically before
 * every `npm run build` via the "prebuild" script in package.json.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content", "blog");
const APP_DIR = path.join(ROOT, "app");
const MIN_POSTS_FOR_TAG_PAGE = 2; // keep in sync with app/lib/blog.ts

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ─── Load blog posts ────────────────────────────────────────────────────
function loadPosts() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
      const { data, content } = matter(raw);
      const slug = filename.replace(/\.md$/, "");
      const publishedAt = new Date(data.publishedAt);
      const isPublished =
        data.status === "published" &&
        !Number.isNaN(publishedAt.getTime()) &&
        publishedAt.getTime() <= Date.now();
      return { slug, filename, data, content, isPublished };
    });
}

// ─── Walk app/ for real static routes ───────────────────────────────────
function walkAppRoutes(dir, base = "") {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith("[") || entry.name === "components" || entry.name === "lib") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      routes.push(...walkAppRoutes(full, `${base}/${entry.name}`));
    } else if (entry.name === "page.tsx") {
      routes.push(base === "" ? "/" : `${base}/`);
    }
  }
  return routes;
}

// ─── Extract candidate .tsx files (excluding blog/[slug] etc.) ─────────
function walkTsxFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkTsxFiles(full));
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

function extractMarkdownLinks(content) {
  const links = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(content))) links.push({ anchor: m[1], href: m[2] });
  return links;
}

function extractJsxHrefs(source) {
  const links = [];
  const re = /href="(\/[^"]*)"/g;
  let m;
  while ((m = re.exec(source))) links.push({ anchor: null, href: m[1] });
  return links;
}

function normalizeHref(href) {
  let h = href.trim();
  if (h.startsWith("https://mgphotographyglobal.com")) h = h.replace("https://mgphotographyglobal.com", "");
  if (h.startsWith("http://mgphotographyglobal.com")) h = h.replace("http://mgphotographyglobal.com", "");
  return h;
}

function isExternalOrSkippable(href) {
  return (
    /^https?:\/\//.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("wa.me")
  );
}

function main() {
  const posts = loadPosts();
  const publishedSlugs = new Set(posts.filter((p) => p.isPublished).map((p) => p.slug));
  const unpublishedSlugs = new Set(posts.filter((p) => !p.isPublished).map((p) => p.slug));

  const categorySlugs = new Set(posts.filter((p) => p.isPublished).map((p) => slugify(p.data.category || "")));

  const tagCounts = new Map();
  for (const p of posts.filter((p) => p.isPublished)) {
    for (const tag of p.data.tags || []) {
      const s = slugify(tag);
      tagCounts.set(s, (tagCounts.get(s) || 0) + 1);
    }
  }
  const linkableTagSlugs = new Set([...tagCounts.entries()].filter(([, c]) => c >= MIN_POSTS_FOR_TAG_PAGE).map(([s]) => s));

  const staticRoutes = new Set(walkAppRoutes(APP_DIR));
  const blogRoutes = new Set([
    "/blog/",
    ...[...publishedSlugs].map((s) => `/blog/${s}/`),
    ...[...categorySlugs].map((c) => `/blog/category/${c}/`),
    ...[...linkableTagSlugs].map((t) => `/blog/tag/${t}/`),
  ]);
  const validRoutes = new Set([...staticRoutes, ...blogRoutes]);

  const errors = [];
  const warnings = [];

  function checkHref({ source, href, anchor, isDraftContext }) {
    if (isExternalOrSkippable(href)) return;
    const normalized = normalizeHref(href);
    if (!normalized.startsWith("/")) {
      warnings.push(`${source}: malformed internal href "${href}" (not root-relative)`);
      return;
    }
    if (/\/\/(?!$)/.test(normalized.slice(1))) {
      warnings.push(`${source}: malformed internal href "${href}" (double slash)`);
      return;
    }

    const withoutQuery = normalized.split(/[?#]/)[0];
    const hasExtension = /\.[a-zA-Z0-9]+$/.test(withoutQuery);
    if (!hasExtension && !withoutQuery.endsWith("/")) {
      warnings.push(`${source}: internal href "${href}" is missing a trailing slash`);
    }
    const canonicalPath = hasExtension ? withoutQuery : withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;

    if (hasExtension) return; // asset link (image etc.) — not a page route

    // Links to a blog slug that exists but is a draft/future post.
    const slugMatch = canonicalPath.match(/^\/blog\/([a-z0-9-]+)\/$/);
    if (slugMatch && unpublishedSlugs.has(slugMatch[1])) {
      (isDraftContext ? warnings : errors).push(
        `${source}: links to unpublished/draft post "/blog/${slugMatch[1]}/" — anchor "${anchor ?? ""}"`
      );
      return;
    }

    if (!validRoutes.has(canonicalPath)) {
      (isDraftContext ? warnings : errors).push(
        `${source}: broken internal link "${href}" — no matching page (anchor: "${anchor ?? ""}")`
      );
    }
  }

  for (const post of posts) {
    const links = extractMarkdownLinks(post.content);
    for (const { anchor, href } of links) {
      checkHref({ source: `content/blog/${post.filename}`, href, anchor, isDraftContext: !post.isPublished });
    }
  }

  for (const file of walkTsxFiles(APP_DIR)) {
    const rel = path.relative(ROOT, file);
    const source = fs.readFileSync(file, "utf8");
    for (const { href } of extractJsxHrefs(source)) {
      checkHref({ source: rel, href, anchor: null, isDraftContext: false });
    }
  }

  if (warnings.length) {
    console.warn(`\n⚠ ${warnings.length} internal link warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }

  if (errors.length) {
    console.error(`\n✖ ${errors.length} internal link error(s):`);
    for (const e of errors) console.error(`  - ${e}`);
    console.error("\nFix these before building/deploying.\n");
    process.exit(1);
  }

  console.log(`✓ Internal link validation passed (${posts.length} posts, ${staticRoutes.size} static routes checked).`);
}

main();
