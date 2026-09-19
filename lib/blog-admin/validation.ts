export interface PostFields {
  title: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  categorySlug: string;
}

/** Marks a field a human still needs to fill in — never allowed to publish. */
export const EDITORIAL_PLACEHOLDER = "[MG EDITORIAL INPUT REQUIRED]";

/**
 * Full pre-publish validation, per the "block publish with a clear message"
 * requirement. `existingSlugs` excludes the post's own current slug (when
 * editing) so a post doesn't collide with itself.
 */
export function validateForPublish(fields: PostFields, existingSlugs: Set<string>): string[] {
  const errors: string[] = [];

  if (!fields.title.trim()) errors.push("Title is required.");
  if (!fields.slug.trim()) errors.push("Slug is required.");
  else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(fields.slug)) {
    errors.push("Slug must be lowercase letters, numbers, and hyphens only.");
  } else if (existingSlugs.has(fields.slug)) {
    errors.push(`Slug "${fields.slug}" is already used by another post.`);
  }

  if (!fields.content.trim()) errors.push("Content is required.");
  if (!fields.metaDescription.trim()) errors.push("Meta description is required.");
  else if (fields.metaDescription.length > 160) {
    errors.push("Meta description is longer than 160 characters.");
  }
  if (!fields.excerpt.trim()) errors.push("Excerpt is required.");
  if (!fields.seoTitle.trim()) errors.push("SEO title is required.");
  if (!fields.featuredImage.trim()) errors.push("Featured image is required.");
  if (!fields.featuredImageAlt.trim()) errors.push("Featured image alt text is required.");
  if (!fields.categorySlug.trim()) errors.push("Category is required.");

  const haystack = `${fields.title}\n${fields.content}\n${fields.excerpt}\n${fields.metaDescription}`;
  if (haystack.includes(EDITORIAL_PLACEHOLDER)) {
    errors.push(`Content still contains an unresolved "${EDITORIAL_PLACEHOLDER}" placeholder.`);
  }

  // Internal /blog/<slug>/ links must point at a post that actually exists.
  const linkedSlugs = [...fields.content.matchAll(/\/blog\/([a-z0-9-]+)\/?\)/g)].map((m) => m[1]);
  for (const linked of linkedSlugs) {
    if (linked === fields.slug) continue;
    if (!existingSlugs.has(linked)) {
      errors.push(`Content links to /blog/${linked}/ which doesn't match any known post slug.`);
    }
  }

  return errors;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
