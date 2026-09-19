# MG Photography UAE

Luxury newborn, baby, maternity, family, wedding, and real estate photography studio website — serving Dubai, Abu Dhabi, and Sharjah.

**Live site:** https://mgphotographyglobal.com

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Hosting:** Netlify
- **Analytics:** GA4 + Meta Pixel (`app/components/Analytics.tsx`)

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production static export → ./out
```

This project uses `output: "export"` in `next.config.ts`, so `npm run build` produces a fully static `out/` directory ready for any static host.

## Project Structure

```
app/
  components/       Shared UI components (Header, Footer, Analytics, CTAs, etc.)
  guides/           SEO content guides
  landing/          Paid-ads landing pages (excluded from sitemap/robots)
  blog/             Dynamic blog (see "Blog" section below)
  lib/blog.ts        Blog content loader (reads content/blog/*.md)
  lib/blogCta.ts      Per-category default calls-to-action
  <service>/        One folder per service + location route
  layout.tsx         Root layout, global metadata, LocalBusiness schema
  page.tsx            Homepage
  sitemap.ts          Generates sitemap.xml at build time (static + blog)
content/blog/        Blog post source files (Markdown + frontmatter)
public/
  images/            Site photography assets
  robots.txt          Static — sitemap.xml is generated (see app/sitemap.ts)
netlify.toml          Build, redirect, and header config
```

## Blog

The blog (`/blog`) is a Markdown-driven, statically-generated section built for
SEO, designed to scale to hundreds of posts without touching any React code.

- **Content:** one `.md` file per post in `content/blog/`, with YAML
  frontmatter for all SEO/metadata fields (title, slug via filename,
  metaDescription, category, tags, author, publishedAt, status, etc.) and
  the article body as Markdown.
- **Publishing a post:** add a new `content/blog/<slug>.md` file with
  `status: "published"` and a `publishedAt` date, then rebuild/deploy. No
  component changes are ever required — this is what allows an automated
  workflow (e.g. Claude Work) to publish a new article per day.
- **Drafts & scheduling:** `status: "draft"` or a future `publishedAt`
  keeps a post out of the production build entirely (never linked, never
  in the sitemap, never indexable) while still being visible in
  `npm run dev` for preview.
- **Routes:** `/blog`, `/blog/page/[n]`, `/blog/[slug]`,
  `/blog/category/[slug]`, `/blog/tag/[slug]` — all statically generated
  (`output: "export"`-compatible).
- **SEO:** each post gets its own `<title>`, meta description, canonical
  URL, Open Graph/Twitter metadata, and `BlogPosting` + `BreadcrumbList`
  JSON-LD. `app/sitemap.ts` regenerates `sitemap.xml` at build time,
  automatically including every published post, category and tag page.
- **Related articles & CTAs:** related posts are derived from
  category/cluster/tag overlap (`getRelatedPosts` in `app/lib/blog.ts`),
  and each article's CTA defaults by category (`app/lib/blogCta.ts`) but
  can be overridden per post via the `cta` frontmatter field.
- **Internal linking (service ↔ pillar ↔ supporting ↔ related articles):**
  see [`docs/INTERNAL_LINKING.md`](docs/INTERNAL_LINKING.md) for the full
  architecture, the `cluster`/`isPillar`/`primaryService` frontmatter
  fields, the broken-link validator (`npm run validate:links`, runs
  automatically before `npm run build`), and the link-suggestion CLI
  (`npm run suggest:links -- <slug>`) that a future automated publishing
  workflow uses to find where a new article should link to/from.

## Deployment

See `DEPLOYMENT.md` for full Netlify deploy instructions (drag-and-drop or GitHub-connected auto-deploy).

## Notes on routing

Several short-URL routes (e.g. `/newborn-photography/`) exist purely as SEO-safe aliases that 301-redirect (via `netlify.toml`) to their canonical `-dubai` counterpart. These are intentionally excluded from `sitemap.xml` to avoid duplicate-content issues — see comments in the relevant `page.tsx` files.
