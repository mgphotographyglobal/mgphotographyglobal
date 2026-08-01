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
  <service>/        One folder per service + location route
  layout.tsx         Root layout, global metadata, LocalBusiness schema
  page.tsx            Homepage
public/
  images/            Site photography assets
  robots.txt, sitemap.xml
netlify.toml          Build, redirect, and header config
```

## Deployment

See `DEPLOYMENT.md` for full Netlify deploy instructions (drag-and-drop or GitHub-connected auto-deploy).

## Notes on routing

Several short-URL routes (e.g. `/newborn-photography/`) exist purely as SEO-safe aliases that 301-redirect (via `netlify.toml`) to their canonical `-dubai` counterpart. These are intentionally excluded from `sitemap.xml` to avoid duplicate-content issues — see comments in the relevant `page.tsx` files.
