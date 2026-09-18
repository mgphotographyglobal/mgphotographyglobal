import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const SITE_URL = "https://mgphotographyglobal.com";
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

// Draft/scheduled posts are only visible outside production so an author or
// automation workflow can preview them before they go live. A production
// build (the one that gets deployed) excludes them from every list and
// from generateStaticParams, so they are never built into static HTML and
// can never be indexed or linked to.
const INCLUDE_UNPUBLISHED = process.env.NODE_ENV !== "production";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  breaks: false,
});

export type BlogStatus = "draft" | "published";

export interface BlogCta {
  title?: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export interface BlogFrontmatter {
  title: string;
  seoTitle?: string;
  metaDescription: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  tags?: string[];
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  status: BlogStatus;
  canonicalUrl?: string;
  ogImage?: string;
  focusKeyword?: string;
  relatedSlugs?: string[];
  cta?: BlogCta;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  contentHtml: string;
  readingTimeMinutes: number;
  wordCount: number;
}

export type BlogPostSummary = Omit<BlogPost, "contentHtml" | "wordCount">;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function categorySlug(category: string): string {
  return slugify(category);
}

export function tagSlug(tag: string): string {
  return slugify(tag);
}

function readingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 200));
}

function isPublishable(fm: BlogFrontmatter): boolean {
  if (fm.status !== "published") return false;
  const publishedAt = new Date(fm.publishedAt);
  if (Number.isNaN(publishedAt.getTime())) return false;
  return publishedAt.getTime() <= Date.now();
}

let cache: BlogPost[] | null = null;

function loadAllPostsFromDisk(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const posts: BlogPost[] = files.map((filename) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const fm = data as BlogFrontmatter;
    const slug = filename.replace(/\.md$/, "");
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

    return {
      ...fm,
      slug,
      tags: fm.tags ?? [],
      contentHtml: md.render(content),
      wordCount,
      readingTimeMinutes: readingTime(wordCount),
    };
  });

  return posts;
}

/** All posts eligible for the current environment, newest first. */
export function getAllPosts(): BlogPost[] {
  if (cache) return cache;

  const all = loadAllPostsFromDisk();
  const visible = all.filter((p) => isPublishable(p) || INCLUDE_UNPUBLISHED);

  visible.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  cache = visible;
  return visible;
}

/** Only posts that are truly public — used for static params & sitemap. */
export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter(isPublishable);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function isDraftOrScheduled(post: BlogPost): boolean {
  return !isPublishable(post);
}

export function getPostsByCategory(slug: string): BlogPost[] {
  return getAllPosts().filter((p) => categorySlug(p.category) === slug);
}

export function getPostsByTag(slug: string): BlogPost[] {
  return getAllPosts().filter((p) => (p.tags ?? []).some((t) => tagSlug(t) === slug));
}

export interface CategoryInfo {
  name: string;
  slug: string;
  count: number;
}

export function getAllCategories(): CategoryInfo[] {
  const map = new Map<string, CategoryInfo>();
  for (const post of getAllPosts()) {
    const slug = categorySlug(post.category);
    const existing = map.get(slug);
    if (existing) existing.count += 1;
    else map.set(slug, { name: post.category, slug, count: 1 });
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

export interface TagInfo {
  name: string;
  slug: string;
  count: number;
}

export function getAllTags(): TagInfo[] {
  const map = new Map<string, TagInfo>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags ?? []) {
      const slug = tagSlug(tag);
      const existing = map.get(slug);
      if (existing) existing.count += 1;
      else map.set(slug, { name: tag, slug, count: 1 });
    }
  }
  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

/**
 * Related posts are derived from category/tag overlap rather than
 * hardcoded references, so new articles automatically surface in each
 * other's "related" sections without touching any component.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug);

  if (post.relatedSlugs?.length) {
    const manual = post.relatedSlugs
      .map((s) => all.find((p) => p.slug === s))
      .filter((p): p is BlogPost => Boolean(p));
    if (manual.length >= limit) return manual.slice(0, limit);
  }

  const scored = all.map((p) => {
    let score = 0;
    if (categorySlug(p.category) === categorySlug(post.category)) score += 3;
    const sharedTags = (p.tags ?? []).filter((t) =>
      (post.tags ?? []).some((pt) => tagSlug(pt) === tagSlug(t))
    ).length;
    score += sharedTags;
    return { post: p, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const manualSlugs = new Set(post.relatedSlugs ?? []);
  const ranked = scored.filter((s) => !manualSlugs.has(s.post.slug) && s.score > 0);
  const manualPosts = (post.relatedSlugs ?? [])
    .map((s) => all.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p));

  return [...manualPosts, ...ranked.map((s) => s.post)].slice(0, limit);
}

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}/`;
}

export function postCanonicalUrl(post: BlogPost): string {
  return post.canonicalUrl ?? postUrl(post.slug);
}

export const BLOG_SITE_URL = SITE_URL;
export const POSTS_PER_PAGE = 9;
