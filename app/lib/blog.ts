import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import { serviceForCategory } from "./services";

const SITE_URL = "https://mgphotographyglobal.com";
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

// Tag pages below this many published posts aren't generated as their own
// route — a tag page with a single article is thin, low-value content that
// exists only to hold one internal link. The tag still displays on the
// article as plain text in that case (see getAllTags()/isTagLinkable()).
const MIN_POSTS_FOR_TAG_PAGE = 2;

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

  /**
   * Topic cluster key. Defaults to categorySlug(category) when omitted, so
   * most posts never need to set this explicitly — it only needs to be set
   * when a post's cluster should differ from its category (a rare,
   * deliberate editorial choice, not the default path).
   */
  cluster?: string;
  /** Marks this post as the pillar/hub article for its cluster. At most one per cluster. */
  isPillar?: boolean;
  /**
   * Explicit override for the service page this article should support.
   * Defaults to serviceForCategory(category) — set this only when an
   * article's primary commercial intent differs from its category.
   */
  primaryService?: string;
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

/** A post's cluster key — explicit `cluster` field, or its category slug. */
export function clusterKey(post: Pick<BlogFrontmatter, "category" | "cluster">): string {
  return post.cluster ? slugify(post.cluster) : categorySlug(post.category);
}

/** The service page this post should link to as its primary commercial target. */
export function resolvePrimaryServiceHref(post: BlogPost): string | undefined {
  if (post.primaryService) return post.primaryService;
  return serviceForCategory(post.category)?.href;
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

/** The pillar/hub post for a cluster, if one has been designated. */
export function getPillarForCluster(cluster: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.isPillar && clusterKey(p) === cluster);
}

/** Published posts sharing a cluster, newest first, pillar excluded. */
export function getClusterPosts(cluster: string, excludeSlug?: string): BlogPost[] {
  return getAllPosts().filter(
    (p) => clusterKey(p) === cluster && !p.isPillar && p.slug !== excludeSlug
  );
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

/** All tags, including thin ones — used only to render tag pills as plain text. */
function getAllTagsRaw(): TagInfo[] {
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
 * Tags with enough posts to justify their own indexable page. This is the
 * list used for generateStaticParams and the sitemap — a tag used by only
 * one article would otherwise become a thin, near-duplicate page that
 * exists purely to hold a single internal link (index bloat).
 */
export function getAllTags(): TagInfo[] {
  return getAllTagsRaw().filter((t) => t.count >= MIN_POSTS_FOR_TAG_PAGE);
}

/** Whether a tag has its own page to link to (see getAllTags). */
export function isTagLinkable(tag: string): boolean {
  return getAllTags().some((t) => t.slug === tagSlug(tag));
}

function byRecency(a: BlogPost, b: BlogPost): number {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

/**
 * Related posts are derived from topical signals rather than hardcoded
 * references, so new articles automatically surface in each other's
 * "related" sections without touching any component. Priority, highest
 * first: same category/service -> same cluster -> shared tags -> the
 * post's own explicit relatedSlugs. Each post appears at most once, in the
 * tier of its strongest match.
 *
 * Deliberately no "recent posts" catch-all: if a post has fewer than
 * `limit` genuinely topical matches, it simply gets fewer related links
 * rather than being padded out with unrelated content. An empty-ish
 * Related Articles section is preferable to recommending, say, a wedding
 * post underneath a newborn article just to hit a round number.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug && !p.isPillar);
  const postCluster = clusterKey(post);
  const explicitSet = new Set(post.relatedSlugs ?? []);

  const sameCategory = all.filter((p) => categorySlug(p.category) === categorySlug(post.category));
  const sameClusterOnly = all.filter(
    (p) => clusterKey(p) === postCluster && categorySlug(p.category) !== categorySlug(post.category)
  );
  const sharedTags = all.filter(
    (p) =>
      categorySlug(p.category) !== categorySlug(post.category) &&
      clusterKey(p) !== postCluster &&
      (p.tags ?? []).some((t) => (post.tags ?? []).some((pt) => tagSlug(pt) === tagSlug(t)))
  );
  const explicit = all.filter((p) => explicitSet.has(p.slug));

  const tiers = [sameCategory.sort(byRecency), sameClusterOnly.sort(byRecency), sharedTags.sort(byRecency), explicit];

  const seen = new Set<string>();
  const result: BlogPost[] = [];
  for (const tier of tiers) {
    for (const p of tier) {
      if (result.length >= limit) break;
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      result.push(p);
    }
    if (result.length >= limit) break;
  }

  return result;
}

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}/`;
}

export function postCanonicalUrl(post: BlogPost): string {
  return post.canonicalUrl ?? postUrl(post.slug);
}

export const BLOG_SITE_URL = SITE_URL;
export const POSTS_PER_PAGE = 9;
