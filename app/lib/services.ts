/**
 * The single source of truth for "which URL is the money page for this
 * service" — the only hardcoded list in the internal-linking system.
 *
 * These are the 9 real, indexable commercial service pages that exist in
 * the repo today (canonical -dubai/-abu-dhabi pages; short-URL aliases and
 * the noindex redirect stub are intentionally excluded — see README).
 * Everything else (blog → service links, service → blog links, CTA hrefs,
 * the link validator) reads from this one list instead of re-hardcoding
 * URLs, so adding/renaming a service page only ever requires one edit.
 *
 * `slug` matches categorySlug(blog post category) — the blog's `category`
 * frontmatter field is written using the same human-readable service
 * names on purpose, so a post's category alone is enough to resolve its
 * primary service page with no separate mapping table to keep in sync.
 */
export interface ServiceLink {
  slug: string;
  title: string;
  href: string;
}

export const SERVICES: ServiceLink[] = [
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

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function serviceForCategory(category: string): ServiceLink | undefined {
  const slug = slugify(category);
  return SERVICES.find((s) => s.slug === slug);
}

export function serviceBySlug(slug: string): ServiceLink | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
