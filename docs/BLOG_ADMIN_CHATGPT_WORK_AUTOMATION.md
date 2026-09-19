# Blog Admin — ChatGPT Work Automation Guide

How an automated browser agent (ChatGPT Work or similar) drives
`/admin/blog` to create and publish articles without a git commit or a
site redeploy. Everything below is stable, explicit HTML: named form
fields, labeled buttons, and no drag-and-drop-only or icon-only controls
— by design, so a browser-automation agent can fill and submit the form
the same way a human would.

## 1. Sign in

- URL: `https://mgphotographyglobal.com/admin/login/`
- Form fields: `email` (type=email), `password` (type=password)
- Submit button: **Sign in**
- On success, redirects to `/admin/blog/` (the dashboard).
- The signed-in account must already exist in `blog_admin_users` — see
  "Adding another admin" below. There is no self-service sign-up.

## 2. Dashboard

- URL: `/admin/blog/`
- Status tabs (as links, not JS toggles — each is a real URL):
  `/admin/blog/`, `/admin/blog/?tab=draft`, `/admin/blog/?tab=review`,
  `/admin/blog/?tab=approved`, `/admin/blog/?tab=scheduled`,
  `/admin/blog/?tab=published`, `/admin/blog/?tab=archived`
- **New Post** button links to `/admin/blog/new/`.
- Each row links to `/admin/blog/<id>/edit/`.

## 3. Create/edit form field names

All on one page (`/admin/blog/new/` or `/admin/blog/<id>/edit/`), one
`<form>`, every field addressable by its `name` attribute:

| Field | `name` | Notes |
|---|---|---|
| Title | `title` | Required |
| Slug | `slug` | Optional — auto-generated from title if left blank |
| Excerpt | `excerpt` | Required to publish |
| Content | `content` | Markdown. Required. H2/H3/paragraphs/bold/lists/links/images/blockquotes all supported. |
| SEO Title | `seoTitle` | Required to publish |
| Meta Description | `metaDescription` | Required to publish, ≤160 chars |
| Focus Keyword | `focusKeyword` | Optional |
| Canonical URL | `canonicalUrl` | Optional — only set if this post duplicates another URL |
| OG Image | `ogImage` | Optional — falls back to the featured image |
| Category | `category` | `<select>`, required. Options are category slugs (e.g. `newborn-photography`). |
| Tags | `tags` | Comma-separated, e.g. `Dubai, newborn photography, safety` |
| Primary Service | `primaryService` | `<select>` of service slugs. Leave unset to auto-resolve from category. |
| Cluster | `cluster` | Optional — defaults to the category slug |
| Related Posts | `relatedPosts` | Comma-separated post slugs. Leave blank for automatic related-post selection (same category → cluster → shared tags). |
| Pillar checkbox | `isPillar` | Checkbox — check only for the one hub article per cluster |
| Featured Image | `featuredImage` | Plain text field — an existing `/images/gallery/...` path or any URL. A file-upload input next to it is a human convenience only; automation should just set this text field directly. |
| Featured Image Alt | `featuredImageAlt` | Required to publish |
| Author | `author` | Defaults to "MG Photography UAE" |
| Published Date/Time | `publishedAt` | Only read by the Publish action. Leave blank to publish immediately. |
| Scheduled Publish Date/Time | `scheduledPublishAt` | Required by the Schedule action |
| Post ID (edit only) | `postId` | Hidden field, already filled in |

## 4. Actions (submit buttons)

All six live in the same form, each a plain `<button type="submit"
name="intent" value="...">` — click by visible text:

| Button text | Resulting status | Validation |
|---|---|---|
| **Save Draft** | `draft` | Title + non-colliding slug only |
| **Preview** | `draft` (saved), then redirects to `/admin/blog/<id>/preview/` | Same as Save Draft |
| **Submit for Review** | `review` | Title + non-colliding slug only |
| **Approve** | `approved` | Full pre-publish validation (below) |
| **Schedule** | `scheduled` | Full validation + `scheduledPublishAt` required |
| **Publish** | `published` | Full validation |

**Full pre-publish validation** (Approve/Schedule/Publish all fail with a
clear message, and the post is **not** saved with that status, if any of
these fail): title, valid+unique slug, content, excerpt, meta description
(≤160 chars), SEO title, featured image, featured image alt text,
category, no leftover `[MG EDITORIAL INPUT REQUIRED]` placeholder
anywhere in title/content/excerpt/meta description, and no internal
`/blog/<slug>/` link in the content pointing at a slug that doesn't
exist. Errors are returned to the same form and rendered above the
fields — check for a `role="alert"` element after submitting.

Publishing immediately revalidates (no redeploy): the article's own URL,
`/blog/`, the paginated blog index, its category page, its primary
service page's "Helpful Guides" section, and the sitemap.

## 5. Preview

`/admin/blog/<id>/preview/` renders the current draft content (title,
excerpt, featured image, rendered markdown, SEO fields). It requires the
same admin login as the rest of `/admin`, is marked `noindex`, and is
never linked from any public page or the sitemap — safe for a draft that
isn't ready to be public yet.

## 6. Recommended daily ChatGPT Work loop

1. Sign in (Section 1), or reuse an existing authenticated session.
2. Open `/admin/blog/?tab=draft` and `/admin/blog/?tab=review` to see
   what's already in flight before starting new work.
3. Pick the next item from `docs/SEO_90_DAY_CONTENT_PLAN.json` (title,
   primary keyword, target service/category, cluster).
4. Open `/admin/blog/new/`.
5. Fill in `title`, `content` (markdown), `excerpt`, `seoTitle`,
   `metaDescription`, `focusKeyword`, `category`, `tags`,
   `primaryService`, `cluster`, `featuredImage`, `featuredImageAlt`.
6. Click **Save Draft**. Confirm the redirect to `/admin/blog/<id>/edit/`
   succeeded (this is the post's id for the rest of the flow).
7. Click **Preview** and read the rendered article for obvious problems
   (broken formatting, an unresolved placeholder, a missing image).
8. Click **Submit for Review**.
9. **Leave for human approval initially.** A human opens
   `/admin/blog/?tab=review`, reads the draft, and clicks **Approve**
   then **Publish** (or sends it back with edits) themselves. Do not
   click Approve/Publish in this step yet — that's the point where a
   human is still meaningfully checking the work.
10. Once a human has approved and published this way for a run of
    articles without needing corrections, the trusted next step is for
    ChatGPT Work to also click **Approve** and **Publish** itself,
    skipping the manual wait — but only after that trust has actually
    been established, not from day one.
11. **Later** (once quality has been proven over that run of
    human-reviewed articles): publish automatically — ChatGPT Work
    clicks **Publish** directly instead of stopping at Submit for
    Review, closing the loop end-to-end with no daily human step.

## 7. Scheduled publishing

V1 ships the data model and the **Schedule** action (sets `status =
'scheduled'` and `scheduled_publish_at`), but nothing currently flips a
scheduled post to `published` automatically at that time — the public
site only ever shows `status = 'published'` rows (see
`public read published posts` RLS policy), so a scheduled post stays
correctly hidden, it just doesn't self-publish yet.

**Recommended next implementation** (not built in V1, to avoid a fragile
custom cron system): a Netlify Scheduled Function running every 5–15
minutes that runs
`update blog_posts set status = 'published', published_at = now() where status = 'scheduled' and scheduled_publish_at <= now()`
against Supabase using the same RLS-respecting pattern as the rest of
this app (the function would need its own row in `blog_admin_users` —
still no service-role key), then calls the same revalidation paths as
the Publish action. Until that exists, treat **Schedule** as "queued,
publish it manually with the Publish button when the time comes."

## 8. Adding another admin

There's no self-service sign-up. To grant access:

1. Create (or reuse) a Supabase Auth user for that person — e.g. via the
   Supabase dashboard's Authentication → Users → "Add user", or their
   own sign-in if the project already has password auth enabled for
   them.
2. Insert a row into `public.blog_admin_users`:
   `insert into blog_admin_users (user_id, email, role) values ('<their auth.users.id>', '<email>', 'admin');`

No service-role key is used anywhere in this app for this or any other
write — every admin action runs as that signed-in user's own
RLS-checked session, gated by the `blog_is_admin()` check against this
table.

## 9. What's deliberately not automated yet

- **"Create from SEO Plan" prefill** — pulling title/slug/keyword/service
  from `docs/SEO_90_DAY_CONTENT_PLAN.json` straight into the new-post
  form. Not built; the plan file is untouched and still the source of
  truth for *what* to write next, it's just not wired into the form UI.
- **Full AI content generation inside the admin panel.** The admin panel
  publishes whatever content is given to it — it does not call an
  LLM itself. Content generation stays wherever it already happens
  (this ChatGPT Work session, or `scripts/seo/generate.mjs` for the
  legacy markdown flow), and only the *publishing* step moved into the
  database.
