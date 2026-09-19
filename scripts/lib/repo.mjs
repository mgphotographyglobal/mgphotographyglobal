// Shared, dependency-light helpers for reading the repo's real state —
// used by both the internal-link validator and the SEO publishing
// workflow scripts, so there is exactly one implementation of "what
// routes/posts actually exist" instead of two that could drift apart.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const ROOT = process.cwd();
export const CONTENT_DIR = path.join(ROOT, "content", "blog");
export const APP_DIR = path.join(ROOT, "app");
export const GUIDES_DIR = path.join(APP_DIR, "guides");
export const PLAN_PATH = path.join(ROOT, "docs", "SEO_90_DAY_CONTENT_PLAN.json");
export const MIN_POSTS_FOR_TAG_PAGE = 2; // keep in sync with app/lib/blog.ts

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Reads every content/blog/*.md file with its parsed frontmatter + body. */
export function loadPosts() {
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

export function postPath(slug) {
  return path.join(CONTENT_DIR, `${slug}.md`);
}

export function postExists(slug) {
  return fs.existsSync(postPath(slug));
}

/** Walks app/ for real page.tsx routes, skipping dynamic segments. */
export function walkAppRoutes(dir = APP_DIR, base = "") {
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

/** The 4 pre-existing static /guides/ pages, with their real title+description, read from source rather than hardcoded. */
export function loadGuidesPages() {
  if (!fs.existsSync(GUIDES_DIR)) return [];
  return fs.readdirSync(GUIDES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => {
      const file = path.join(GUIDES_DIR, e.name, "page.tsx");
      if (!fs.existsSync(file)) return null;
      const src = fs.readFileSync(file, "utf8");
      const title = /title:\s*"([^"]+)"/.exec(src)?.[1] ?? e.name;
      const description = /description:\s*"([^"]+)"/.exec(src)?.[1] ?? "";
      return { slug: e.name, route: `/guides/${e.name}/`, title, description };
    })
    .filter(Boolean);
}

/** Builds the full set of currently-valid, publicly-linkable routes. */
export function buildValidRouteSet() {
  const posts = loadPosts();
  const publishedSlugs = posts.filter((p) => p.isPublished).map((p) => p.slug);
  const categorySlugs = [...new Set(posts.filter((p) => p.isPublished).map((p) => slugify(p.data.category || "")))];

  const tagCounts = new Map();
  for (const p of posts.filter((p) => p.isPublished)) {
    for (const tag of p.data.tags || []) {
      const s = slugify(tag);
      tagCounts.set(s, (tagCounts.get(s) || 0) + 1);
    }
  }
  const linkableTags = [...tagCounts.entries()].filter(([, c]) => c >= MIN_POSTS_FOR_TAG_PAGE).map(([s]) => s);

  const routes = new Set([
    ...walkAppRoutes(),
    "/blog/",
    ...publishedSlugs.map((s) => `/blog/${s}/`),
    ...categorySlugs.map((c) => `/blog/category/${c}/`),
    ...linkableTags.map((t) => `/blog/tag/${t}/`),
  ]);

  return { routes, publishedSlugs: new Set(publishedSlugs) };
}

export function normalizeHref(href) {
  let h = href.trim();
  if (h.startsWith("https://mgphotographyglobal.com")) h = h.replace("https://mgphotographyglobal.com", "");
  if (h.startsWith("http://mgphotographyglobal.com")) h = h.replace("http://mgphotographyglobal.com", "");
  return h;
}

export function isExternalOrSkippable(href) {
  return (
    /^https?:\/\//.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.startsWith("wa.me")
  );
}

// ─── SEO 90-day plan ─────────────────────────────────────────────────────
export function loadPlan() {
  return JSON.parse(fs.readFileSync(PLAN_PATH, "utf8"));
}

/** Writes the plan back with the same 2-space formatting it already uses. */
export function savePlan(plan) {
  fs.writeFileSync(PLAN_PATH, JSON.stringify(plan, null, 2) + "\n");
}

export function findDay(plan, day) {
  return plan.days.find((d) => d.day === Number(day));
}

export function findSlug(plan, slug) {
  return plan.days.find((d) => d.slug === slug);
}

/** First item still in its initial "planned" state, in day order. */
export function findNextPlanned(plan) {
  return plan.days.slice().sort((a, b) => a.day - b.day).find((d) => (d.status || "planned") === "planned");
}
