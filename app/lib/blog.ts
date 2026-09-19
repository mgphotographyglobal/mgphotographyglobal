import { cache } from "react";
import MarkdownIt from "markdown-it";
import { serviceForCategory } from "./services";
import { createPublicClient } from "@/lib/supabase/server";

const SITE_URL = "https://mgphotographyglobal.com";

// Tag pages below this many published posts aren't generated as their own
// route — a tag page with a single article is thin, low-value content that
// exists only to hold one internal link. The tag still displays on the
// article as plain text in that case (see getAllTags()/isTagLinkable()).
const MIN_POSTS_FOR_TAG_PAGE = 2;

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  breaks: false,
});

export type BlogStatus = "draft" | "review" | "approved" | "scheduled" | "published" | "archived";

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
  cluster?: string;
  isPillar?: boolean;
  primaryService?: string;
}

export interface BlogPost extends BlogFrontmatter {
  id: string;
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

/** Exposed for the admin preview page, which renders draft content that
 * hasn't gone through getAllPosts() (and its published-only RLS) yet. */
export function renderMarkdown(content: string): string {
  return md.render(content);
}

function readingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 200));
}

// Row shape returned by the Supabase select() below.
interface PostRow {
  id: string;
  slug: string;
  title: string;
  seo_title: string | null;
  meta_description: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  featured_image_alt: string;
  og_image_url: string | null;
  author: string;
  status: BlogStatus;
  published_at: string | null;
  updated_at: string;
  canonical_url: string | null;
  focus_keyword: string | null;
  primary_service: string | null;
  cluster: string | null;
  is_pillar: boolean;
  related_post_ids: string[];
  category: { name: string } | { name: string }[] | null;
  pillar: { slug: string } | { slug: string }[] | null;
  post_tags: { tag: { name: string } | { name: string }[] | null }[] | null;
}

function one<T>(rel: T | T[] | null): T | null {
  if (!rel) return null;
  return Array.isArray(rel) ? rel[0] ?? null : rel;
}

function rowToPost(row: PostRow, idToSlug: Map<string, string>): BlogPost {
  const wordCount = row.content.trim().split(/\s+/).filter(Boolean).length;
  const category = one(row.category);
  const tags = (row.post_tags ?? [])
    .map((pt) => one(pt.tag)?.name)
    .filter((t): t is string => Boolean(t));

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    seoTitle: row.seo_title ?? undefined,
    metaDescription: row.meta_description,
    excerpt: row.excerpt,
    contentHtml: md.render(row.content),
    wordCount,
    readingTimeMinutes: readingTime(wordCount),
    featuredImage: row.featured_image_url,
    featuredImageAlt: row.featured_image_alt,
    category: category?.name ?? "Uncategorized",
    tags,
    author: row.author,
    publishedAt: row.published_at ?? row.updated_at,
    updatedAt: row.updated_at,
    status: row.status,
    canonicalUrl: row.canonical_url ?? undefined,
    ogImage: row.og_image_url ?? undefined,
    focusKeyword: row.focus_keyword ?? undefined,
    cluster: row.cluster ?? undefined,
    isPillar: row.is_pillar,
    primaryService: row.primary_service ?? undefined,
    relatedSlugs: (row.related_post_ids ?? [])
      .map((id) => idToSlug.get(id))
      .filter((s): s is string => Boolean(s)),
  };
}

const SELECT = `
  id, slug, title, seo_title, meta_description, excerpt, content,
  featured_image_url, featured_image_alt, og_image_url,
  author, status, published_at, updated_at, canonical_url,
  focus_keyword, primary_service, cluster, is_pillar, related_post_ids,
  category:blog_categories(name),
  pillar:blog_posts!pillar_post_id(slug),
  post_tags:blog_post_tags(tag:blog_tags(name))
`;

/**
 * All publicly-readable posts, newest first. RLS on the anon connection
 * already guarantees only `status = 'published'` (and past `published_at`)
 * rows are returned — there's no separate "unpublished" code path to keep
 * in sync here, the database is the single source of truth for visibility.
 *
 * `cache()` (React's per-request memoization) means this only hits
 * Supabase once no matter how many components on a page call it.
 */
export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(SELECT)
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) {
    console.error("blog: failed to load posts", error);
    return [];
  }

  const rows = (data ?? []) as unknown as PostRow[];
  const idToSlug = new Map(rows.map((r) => [r.id, r.slug]));
  return rows.map((r) => rowToPost(r, idToSlug));
});

/** Kept as a distinct name for call-site clarity — identical to getAllPosts()
 * now that the database itself only ever returns published content to the
 * public client. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  return getAllPosts();
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return (await getAllPosts()).find((p) => p.slug === slug);
}

export async function getPostsByCategory(slug: string): Promise<BlogPost[]> {
  return (await getAllPosts()).filter((p) => categorySlug(p.category) === slug);
}

export async function getPostsByTag(slug: string): Promise<BlogPost[]> {
  return (await getAllPosts()).filter((p) => (p.tags ?? []).some((t) => tagSlug(t) === slug));
}

/** The pillar/hub post for a cluster, if one has been designated. */
export async function getPillarForCluster(cluster: string): Promise<BlogPost | undefined> {
  return (await getAllPosts()).find((p) => p.isPillar && clusterKey(p) === cluster);
}

/** Published posts sharing a cluster, newest first, pillar excluded. */
export async function getClusterPosts(cluster: string, excludeSlug?: string): Promise<BlogPost[]> {
  return (await getAllPosts()).filter(
    (p) => clusterKey(p) === cluster && !p.isPillar && p.slug !== excludeSlug
  );
}

export interface CategoryInfo {
  name: string;
  slug: string;
  count: number;
}

export async function getAllCategories(): Promise<CategoryInfo[]> {
  const map = new Map<string, CategoryInfo>();
  for (const post of await getAllPosts()) {
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

async function getAllTagsRaw(): Promise<TagInfo[]> {
  const map = new Map<string, TagInfo>();
  for (const post of await getAllPosts()) {
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
export async function getAllTags(): Promise<TagInfo[]> {
  return (await getAllTagsRaw()).filter((t) => t.count >= MIN_POSTS_FOR_TAG_PAGE);
}

/** Whether a tag has its own page to link to (see getAllTags). */
export async function isTagLinkable(tag: string): Promise<boolean> {
  return (await getAllTags()).some((t) => t.slug === tagSlug(tag));
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
 * rather than being padded out with unrelated content.
 */
export async function getRelatedPosts(post: BlogPost, limit = 3): Promise<BlogPost[]> {
  const all = (await getAllPosts()).filter((p) => p.slug !== post.slug && !p.isPillar);
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
