import type { MetadataRoute } from "next";
import { getPublishedPosts, getAllCategories, getAllTags, postCanonicalUrl } from "./lib/blog";

// Now that the site is no longer output:"export" (blog content is
// database-backed), the sitemap is regenerated periodically instead of
// once at build time, so newly published posts appear without a redeploy.
export const revalidate = 300;

const SITE_URL = "https://mgphotographyglobal.com";

// ─── Static site routes ──────────────────────────────────────────────────
// Mirrors what used to live in public/sitemap.xml. Kept here (rather than a
// hand-maintained XML file) so the blog section below can be merged in
// automatically at build time instead of needing manual edits forever.
const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/testimonials/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/gallery/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/terms/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/dubai-newborn-photography/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/baby-photography-dubai/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/maternity-photography-dubai/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/wedding-photography-dubai/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pre-wedding-photography-dubai/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/outdoor-photography-dubai/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/birthday-photography-dubai/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/architecture-photography-dubai/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/real-estate-photography-dubai/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/newborn-photography-abu-dhabi/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/newborn-photography-sharjah/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/maternity-photography-abu-dhabi/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/wedding-photography-abu-dhabi/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/newborn-photoshoot-ideas-dubai/", changeFrequency: "yearly", priority: 0.65 },
  { path: "/guides/outdoor-photoshoot-locations-dubai/", changeFrequency: "yearly", priority: 0.6 },
  { path: "/guides/what-to-wear-maternity-photoshoot/", changeFrequency: "yearly", priority: 0.6 },
  { path: "/guides/dubai-wedding-photography-guide/", changeFrequency: "yearly", priority: 0.6 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const posts = await getPublishedPosts();

  entries.push({
    url: `${SITE_URL}/blog/`,
    lastModified: posts[0]?.updatedAt ?? posts[0]?.publishedAt,
    changeFrequency: "daily",
    priority: 0.9,
  });

  for (const post of posts) {
    // Posts with a canonical pointing elsewhere shouldn't compete with
    // that canonical target in the sitemap.
    if (post.canonicalUrl && post.canonicalUrl !== postCanonicalUrl(post)) continue;

    entries.push({
      url: postCanonicalUrl(post),
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const category of await getAllCategories()) {
    entries.push({
      url: `${SITE_URL}/blog/category/${category.slug}/`,
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  for (const tag of await getAllTags()) {
    entries.push({
      url: `${SITE_URL}/blog/tag/${tag.slug}/`,
      changeFrequency: "weekly",
      priority: 0.4,
    });
  }

  return entries;
}
