# MG Photography UAE — Deployment Guide

## Quick Deploy to Netlify

### Option A: Drag & Drop (Easiest)
1. Run `npm run build` in this folder
2. A folder called `out/` will be created
3. Go to [app.netlify.com](https://app.netlify.com)
4. Drag the `out/` folder into the Netlify deploy zone
5. Your site is live! ✅

### Option B: GitHub + Netlify (Recommended for ongoing updates)
1. Create a GitHub repository
2. Push this project: `git init && git add . && git commit -m "Initial commit" && git push`
3. In Netlify: New site → Import from Git → Select your repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click Deploy ✅

## Custom Domain
1. In Netlify: Site settings → Domain management → Add custom domain
2. Add `mgphotographyglobal.com`
3. Update your domain DNS:
   - Add a CNAME record: `www` → `[your-netlify-subdomain].netlify.app`
   - Or use Netlify DNS for full management
4. SSL certificate is automatic ✅

## After Deployment — Required Updates

### 1. Contact Form (IMPORTANT)
The contact form uses Formspree. To activate it:
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your form ID
3. In `app/contact/page.tsx`, replace `https://formspree.io/f/your-form-id` with your real ID
4. Rebuild and redeploy

### 2. Domain in layout.tsx
Update `metadataBase` in `app/layout.tsx` once your domain is confirmed:
```
metadataBase: new URL("https://YOUR-ACTUAL-DOMAIN.com"),
```

### 3. Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Submit `https://mgphotographyglobal.com/sitemap.xml`

### 4. OG Image
Replace `public/images/og-image.jpg` with a real 1200×630px brand image.

## Replacing Placeholder Images
All photos currently show as elegant dark placeholders. To add real photos:
1. Add images to `public/images/` folder
2. Replace `<div className="photo-placeholder">` with `<Image src="/images/your-photo.jpg" alt="..." fill />`
3. Import `Image` from `next/image` at the top of the file

## Build Command Reference
```bash
npm run build    # Creates the static export in /out
npm run dev      # Local development server at localhost:3000
```
