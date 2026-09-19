# 90-Day SEO Content Strategy — MG Photography UAE

**Status: strategy and planning only.** Nothing in this document has been
published, drafted, or scheduled in the CMS. It is the input a future
Claude Work daily-publishing task reads from — see
`docs/SEO_90_DAY_CONTENT_PLAN.json` for the machine-readable version of
the same plan, and "Future Claude Work Handoff" below for how the two are
meant to be used together.

No exact calendar start date has been configured, so this plan uses
relative **Day 1–Day 90** numbering. Convert `day` to a real publish date
only once daily publishing actually begins.

---

## 1. Current Content Audit

**Real, current routes** (verified against the repository, not invented):

- **9 commercial service pages** (`app/lib/services.ts`): Newborn, Baby,
  Maternity, Wedding, Pre-Wedding, Outdoor, Birthday, Real Estate,
  Architecture Photography — each with one canonical `-dubai/-abu-dhabi`
  URL. There is **no** "Commercial Photography" service page — Real
  Estate and Architecture cover that ground per the business's own
  `llms.txt`.
- **4 location variants**: Newborn (Dubai, Abu Dhabi, Sharjah), Maternity
  (Dubai, Abu Dhabi), Wedding (Dubai, Abu Dhabi). Every other service is
  Dubai-based with travel available elsewhere for a fee — this is a real
  business constraint from `llms.txt`, not an oversight, and this plan
  does not propose city-swapped duplicate pages for services that only
  operate out of Dubai.
- **4 pre-existing static `/guides/` pages** (built before the blog
  existed): newborn photoshoot ideas, outdoor photoshoot locations, what
  to wear for a maternity photoshoot, and a Dubai wedding photography
  guide. These are **not part of the blog system** and were not audited
  or linked into the internal-linking architecture in the previous phase
  — see the cannibalization findings below, which is the direct
  consequence of that gap.
- **6 blog posts total**: 5 published, 1 draft. See the Sample Content
  Review immediately below.

### Content support by service (current state, before this plan)

| Service | Published articles | Pillar exists? | Assessment |
|---|---|---|---|
| Newborn Photography | 3 | Yes | **Strong** — the only cluster with real depth |
| Maternity Photography | 1 | No | Weak, and the 1 article cannibalizes an existing `/guides/` page (see below) |
| Wedding Photography | 1 | No | Weak but the 1 article is genuinely useful and non-duplicative |
| Baby Photography | 0 | No | **Zero support** |
| Pre-Wedding Photography | 0 | No | **Zero support** |
| Outdoor Photography | 0 published (1 draft, sample/test content) | No | **Zero support** |
| Birthday Photography | 0 | No | **Zero support** |
| Real Estate Photography | 0 | No | **Zero support**, despite the highest measured CPC in this plan's keyword research (real estate photographer dubai: ~$12–13 CPC) |
| Architecture Photography | 0 | No | **Zero support** |

## 2. Sample/Testing Content Review

Every published article from the Phase 1 blog build, reviewed for
standalone reader value — not kept just because it validated the
technical system.

**Update (Phase 2.5 cleanup, completed):** the two action items below
have been carried out — see the Phase 2.5 Cleanup Log at the end of this
document for exactly what changed.

| Article | Verdict | Reasoning |
|---|---|---|
| `newborn-photography-complete-guide` (pillar) | **KEEP** | Genuinely useful hub, real facts, serves a real search intent, well-linked. |
| `newborn-photoshoot-timing-dubai` | **KEEP** | Real informational value (the 5–14 day window), distinct intent from the other two newborn posts. |
| `newborn-session-preparation-guide` | **KEEP** | Practical, distinct checklist intent. |
| `dubai-wedding-photography-locations` | **KEEP** | Genuinely distinct from the existing `/guides/dubai-wedding-photography-guide/` (locations vs. choosing-a-photographer). |
| `maternity-photoshoot-outfit-guide` | **REMOVED (Phase 2.5)** | Duplicated `/guides/what-to-wear-maternity-photoshoot/` — same intent, same target keyword. Its two genuinely unique tips were merged into the static guide, the blog file was deleted, and a 301 redirect now points the old URL to the canonical guide. |
| `family-photoshoot-props-ideas` (**draft**) | **REMOVED (Phase 2.5)** | Was explicitly test/placeholder content created only to validate the draft-vs-published pipeline, with zero standalone reader value. File deleted. |

## 3. Cannibalization Audit

The most important finding of this audit: **the previous blog phase did
not cross-check against the site's pre-existing static `/guides/` pages**,
and one real overlap resulted (`maternity-photoshoot-outfit-guide` vs.
`/guides/what-to-wear-maternity-photoshoot/`). **This has been resolved**
as part of the Phase 2.5 cleanup — see the Cleanup Log at the end of this
document. This plan corrects course two ways going forward: (1) it no
longer carries that overlap, and (2) every one of the 90 planned articles
below was checked against all four `/guides/` pages, the (now 4)
published blog posts, and every other planned article in this same list.

**Confirmed/flagged risks** (all other 87 planned articles: **None** — no
overlapping existing page identified):

| Planned article | Existing page it's close to | Risk | Action |
|---|---|---|---|
| Day 79 — Maternity Photography Locations in Dubai | `/guides/outdoor-photoshoot-locations-dubai/` | Low | Keep separate — scope strictly to MG Photography's own studio-style/outdoor options and maternity-specific comfort, not a general Dubai location list. |
| Day 76 — Questions to Ask Before Booking a Destination Wedding Photographer | `/guides/dubai-wedding-photography-guide/` | **Medium** | Keep scoped specifically to destination/travel logistics; link to the existing guide for general selection criteria rather than repeating them. If the angle can't stay genuinely distinct at drafting time, retarget instead of publishing. |
| Day 5 — Complete Guide to Family Photography in Dubai (pillar) | `/guides/outdoor-photoshoot-locations-dubai/` | Low | Different intent (planning a family session vs. choosing a location) — must not become a locations list. |
| Day 13 — What to Wear for Your Newborn Photoshoot | `/guides/what-to-wear-maternity-photoshoot/` | Low | Distinct — parent wardrobe for a *newborn* session, not maternity wardrobe. |

**Deliberately excluded topics** (considered and rejected specifically to
avoid cannibalization or thin duplication):

- **"Best Pre-Wedding Photography Locations in Dubai"** — not planned.
  The existing `dubai-wedding-photography-locations` blog post already
  covers this ground and explicitly links to the Pre-Wedding service page.
  Recommendation for later: broaden that post's tags/cluster rather than
  publish a near-duplicate.
- **"Best Newborn Photoshoot Ideas/Themes"** — not planned. Already
  covered by `/guides/newborn-photoshoot-ideas-dubai/`.
- **"Best Outdoor Photoshoot Locations in Dubai"** — not planned. Already
  covered by `/guides/outdoor-photoshoot-locations-dubai/`.
- **City-swapped duplicates** (e.g. separate "Newborn Photographer
  Sharjah" / "...Abu Dhabi" informational articles with no unique
  content) — not planned anywhere in this list, per the brief's explicit
  instruction. Location-specific *service pages* already exist for the
  services that genuinely operate in multiple emirates; blog content adds
  depth to the shared Dubai-based cluster rather than re-explaining the
  same thing per city.
- **Near-duplicate intents within the plan itself** — e.g. "Best Age for
  Newborn Photography" and "When Should You Do a Newborn Photoshoot?"
  were treated as one intent and are covered by the single existing
  `newborn-photoshoot-timing-dubai` post, not duplicated.

## 4. Keyword & Search Data Methodology

Where real data was available (Ubersuggest, Dubai location ID `1000013`,
captured during this planning session), it's attached to the relevant
article as `measuredSearchData` in the JSON, with its source noted. This
covers roughly a quarter of the 90 planned topics — the core seed terms
for each cluster (e.g. "newborn photoshoot": ~140/mo, "maternity
photoshoot": ~320/mo, "real estate photographer dubai": ~170/mo, CPC
~$12). **The remaining topics have no measured volume and are explicitly
labeled `"monthlySearchVolume": null"` with a note that they were
prioritized qualitatively** — by business/commercial importance, content
gap, and how directly they support a real service page — not by invented
volume, difficulty, or CPC figures. No ranking-position claims are made
anywhere in this plan.

Also pulled during this audit: `mgphotographyglobal.com` currently ranks
for only 22 organic keywords with a Domain Authority of 2 (Ubersuggest) —
confirming this is an early-stage site where topical authority genuinely
needs to be built from a low base, not a site already competing at scale.

## 5. Pillar / Cluster Architecture

Nine new pillar articles are planned (one per service that doesn't
already have one), publishing early — within the first 11 days — so every
supporting article in this plan has a real pillar to link to from day one
of its own cluster. Newborn Photography keeps its existing published
pillar (`newborn-photography-complete-guide`); no second pillar is
created for that cluster.

```
SERVICE PAGE  (app/lib/services.ts — already implemented)
     ↑
PILLAR ARTICLE  (9 new + 1 existing = 10 total)
     ↑↓
SUPPORTING ARTICLES  (80 planned + 2 existing = 82 total)
     ↕
RELATED ARTICLES  (existing getRelatedPosts() tiering — already implemented)
```

This plan produces the *content*; the *mechanism* that turns
`cluster`/`isPillar`/`primaryService` frontmatter into live pillar
callouts, "Helpful Guides" sections, and related-article tiering already
exists in the codebase (`app/lib/blog.ts`, `app/components/
ServicePageTemplate.tsx`) — see `docs/INTERNAL_LINKING.md`. Writing the
90 articles and setting that frontmatter correctly is the only new work
required to make all of it live.

## 6. Article Allocation by Service

| Service | Articles in this plan | Why |
|---|---|---|
| Newborn Photography | 17 | Highest commercial priority — the business's primary named service, most detailed real pricing (llms.txt), the only service with 3 location pages, and the cluster with the strongest existing foundation to build on. |
| Maternity Photography | 14 | Second priority — genuinely high measured search interest ("maternity photoshoot": ~320/mo, the highest single measured volume in this whole plan) but currently almost no real content (and what exists cannibalizes an existing page). Needs the most rebuilding. |
| Wedding Photography | 10 | Real differentiator (Indian/destination weddings per the business's own positioning) with decent measured volume and a natural E-E-A-T angle (traditions, multi-day event coverage) competitors are less likely to cover authentically. |
| Baby Photography | 10 | Zero existing content despite a real, separately-priced service (llms.txt: 3-month, 6-month, sitter, cake smash) and genuine measured demand for cake-smash/first-birthday content. |
| Outdoor/Family Photography | 8 | Zero published content; scoped carefully around family-session planning (not locations, which is already covered) to avoid the cannibalization risk flagged above. |
| Real Estate Photography | 8 | Zero existing content despite by far the highest commercial value signal found in this research (CPC ~$12–13, "real estate photographer dubai" ~170/mo) — a B2B audience worth building authority for even at lower search volume. |
| Pre-Wedding Photography | 6 | Distinct service from Wedding with its own real demand ("pre wedding photoshoot": ~110/mo), but deliberately smaller allocation since the locations sub-topic is intentionally excluded (already covered). |
| Birthday/Event Photography | 6 | Real service, lower measured search signal than the other clusters, sized accordingly rather than padded to match the others. |
| Architecture Photography | 6 | Real but niche B2B service (developers/architects); enough to build a genuine pillar + supporting cluster without manufacturing filler. |
| Cross-cutting: Brand & Booking | 5 | Not tied to one service — booking process, delivery/editing process, home-studio model, gifting, pricing transparency. Builds trust and answers real pre-purchase questions across every service rather than being padded into an arbitrary 10th service cluster. |
| **Total** | **90** | |

This is deliberately unequal. Newborn and Maternity alone account for 31
of the 90 articles (34%) because that's where the business's real
priority and the real search demand both point — not because a formula
said "10 services × 9 articles."

## 7. Location SEO Strategy

No new location-swapped articles are planned. The only genuine multi-city
services (Newborn: Dubai/Abu Dhabi/Sharjah; Maternity and Wedding:
Dubai/Abu Dhabi) already have dedicated *service* pages for that — the
blog's job is to deepen the shared Dubai-based content cluster those
service pages all point to, not re-explain "newborn photography" once per
emirate. Two articles in this plan use "local informational" intent
specifically because they have unique local value rather than a
city-swapped headline:

- Day 79 — **Maternity Photography Locations in Dubai** (flagged Low risk
  above; scoped to MG Photography's own studio/outdoor options and
  pregnancy-specific accessibility, not a generic location list).
- Day 28 — **Best Time of Year for Outdoor Family Photos in Dubai**
  (genuinely UAE-specific: cooler-month light quality and heat/comfort
  considerations for young children, not a template swapped across
  cities).

## 8. Content Type Mix

Across the 90 articles: Informational/pillar hubs (10), Planning (16),
FAQ/problem-solving (16), Comparison (11), Commercial investigation (17),
Educational/expertise (32, several articles carry more than one tag —
e.g. Educational + Trust), Safety/Trust (4 standalone), Style/Inspiration
(2), Seasonal (1), Local informational (1), Transactional-support (4),
Inspirational/Commercial (1). No two articles in the plan share the exact
same primary search intent for the same service.

## 9. E-E-A-T: Where Original MG Photography Experience Matters Most

34 of the 90 articles are flagged `eeatOriginalExperience: true` in the
JSON — these specifically call for MG Photography's own working practice,
a real example, or a real photo, not generic internet advice. Concentrated
in:

- **Safety/process articles** (newborn posing safety, C-section sessions,
  keeping a baby happy, HDR technique) — these are worthless without real
  practitioner detail and are exactly where competitors' generic AI
  content is weakest.
- **"What's included" / package-explainer articles** — these use the
  site's actual published collections and pricing (Essence/Signature/
  Legacy, Studio Glow/Radiance/Golden Story, the real add-ons), not
  invented tiers.
- **Cross-cutting brand articles** (booking flow, editing/delivery
  process, home-studio setup) — these describe the business's actual,
  real operating model (WhatsApp-first booking, no physical studio,
  hand-retouched delivery in 5–7 working days) and cannot be written
  generically at all.

No article in this plan calls for fabricated awards, years-in-business
claims, client counts, or statistics not already published on the site.

## 10. Image SEO Strategy

Every planned article has a `featuredImageConcept` in the JSON. Per the
brief's instruction to prefer real portfolio imagery over generic AI
images: roughly two-thirds of the concepts describe a shot type MG
Photography's existing `public/images/gallery/` portfolio likely already
contains in some form (newborn wraps/baskets, maternity gowns, wedding
moments, family groups) and can be sourced from there during drafting;
the remainder (process/behind-the-scenes shots like a photographer's
hands, a gallery-delivery mockup, an HDR before/after) will need a
purpose-shot or mockup image, flagged as such in each entry's concept
text. No article defaults to a generic stock/AI image without that being
a deliberate, reviewable decision at drafting time.

## 11. Priority: First 30 Days (Detail)

The first 30 days establish all 9 new pillars (days 2–9, plus the
brand/booking pillar on day 11) and each cluster's first 1–3 supporting
articles, so every service has a real, linkable foundation before the
plan moves deeper into any single cluster.

### Day 1 — Newborn Photography Safety: How We Keep Babies Safe

- **Slug:** `newborn-photography-safety-how-we-keep-babies-safe`
- **Primary keyword:** newborn photography safety (no measured data — prioritized qualitatively)
- **Search intent:** Safety / Trust
- **Target audience:** Parents/couples/clients considering Newborn Photography
- **Primary service:** Newborn Photography (`/dubai-newborn-photography/`)
- **Cluster / role:** newborn-photography — supporting (pillar: `newborn-photography-complete-guide`)
- **User question answered:** Are professional newborn photographers trained to handle babies safely?
- **Content angle:** Walks through the specific safety practices used during posed and lifestyle newborn shoots — spotting, temperature control, never leaving baby unsupported.
- **Suggested H2s:** Why safety comes before any pose / Spotting and support during posed shots / Room temperature and comfort / When we stop and change approach / What parents can expect us to explain on the day
- **Primary CTA:** View Newborn Collections
- **Outgoing links:** /dubai-newborn-photography/ ("our newborn photography sessions in Dubai"); /blog/newborn-photography-complete-guide/ ("our complete newborn photography guide"); /blog/at-home-vs-studio-newborn-photography-what-s-the-difference/ ("more on at-home vs studio newborn photography"); /blog/what-to-wear-for-your-newborn-photoshoot-a-parent-s-guide/ ("how we approach what to wear for your newborn photoshoot")
- **Incoming link opportunities:** from "At-Home vs Studio Newborn Photography: What's the Difference" ("our guide to newborn photography safety"); from "What to Wear for Your Newborn Photoshoot: A Parent's Guide" ("newborn photography safety"); from "What's Included in a Newborn Photography Package?" ("more on newborn photography safety")
- **Related articles:** At-Home vs Studio Newborn Photography: What's the Difference; What to Wear for Your Newborn Photoshoot: A Parent's Guide; What's Included in a Newborn Photography Package?
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Photographer's hands supporting a baby during a posed shot — process, not just the final image.
- **SEO title idea:** Newborn Photography Safety: How We Keep Babies Safe | MG Photography UAE
- **Meta description angle:** Answer "Are professional newborn photographers trained to handle babies safely?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 2 — Complete Guide to Maternity Photography in Dubai

- **Slug:** `complete-guide-to-maternity-photography-in-dubai`
- **Primary keyword:** complete guide to maternity photography in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Informational
- **Target audience:** Parents/couples/clients considering Maternity Photography
- **Primary service:** Maternity Photography (`/maternity-photography-dubai/`)
- **Cluster / role:** maternity-photography — pillar
- **User question answered:** What should I know before booking a maternity photoshoot in Dubai?
- **Content angle:** The cluster's hub — timing, styling basics (linking out, not repeating the outfit guide), locations, what to expect.
- **Suggested H2s:** When to book your session / Studio vs outdoor: an overview / What to expect on the day / Packages at a glance / Where to go deeper
- **Primary CTA:** View Maternity Photography
- **Outgoing links:** /maternity-photography-dubai/ ("our maternity photography sessions in Dubai"); /blog/best-time-for-a-maternity-photoshoot-a-week-by-week-guide/ ("more on best time for a maternity photoshoot"); /blog/studio-vs-outdoor-maternity-photography-in-dubai/ ("how we approach studio vs outdoor maternity photography in dubai")
- **Incoming link opportunities:** from "Best Time for a Maternity Photoshoot: A Week-by-Week Guide" ("our guide to complete guide to maternity photography in dubai"); from "Studio vs Outdoor Maternity Photography in Dubai" ("complete guide to maternity photography in dubai"); from "Including Your Partner in Maternity Photos" ("more on complete guide to maternity photography in dubai")
- **Related articles:** Best Time for a Maternity Photoshoot: A Week-by-Week Guide; Studio vs Outdoor Maternity Photography in Dubai; Including Your Partner in Maternity Photos
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Maternity portrait in golden-hour outdoor light, Dubai skyline softly visible.
- **SEO title idea:** Complete Guide to Maternity Photography in Dubai | MG Photography UAE
- **Meta description angle:** Answer "What should I know before booking a maternity photoshoot in Dubai?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 3 — Wedding Day Photography Timeline: What to Expect Hour-by-Hour

- **Slug:** `wedding-day-photography-timeline-what-to-expect-hour-by-hour`
- **Primary keyword:** wedding day photography timeline (no measured data — prioritized qualitatively)
- **Search intent:** Planning
- **Target audience:** Parents/couples/clients considering Wedding Photography
- **Primary service:** Wedding Photography (`/wedding-photography-dubai/`)
- **Cluster / role:** wedding-photography — pillar
- **User question answered:** What does a typical wedding-day photography timeline look like?
- **Content angle:** The cluster's hub — a realistic hour-by-hour walkthrough of coverage from getting-ready to reception.
- **Suggested H2s:** Getting-ready coverage / Ceremony coverage / Couple portraits: when and how long / Reception coverage / Building your own timeline with your photographer
- **Primary CTA:** View Wedding Photography
- **Outgoing links:** /wedding-photography-dubai/ ("our wedding photography sessions in Dubai"); /blog/photographing-indian-weddings-in-dubai-traditions-we-capture/ ("more on photographing indian weddings in dubai"); /blog/mehendi-and-sangeet-photography-a-coverage-guide/ ("how we approach mehendi and sangeet photography")
- **Incoming link opportunities:** from "Photographing Indian Weddings in Dubai: Traditions We Capture" ("our guide to wedding day photography timeline"); from "Mehendi and Sangeet Photography: A Coverage Guide" ("wedding day photography timeline"); from "How Many Photos Will I Receive From My Wedding?" ("more on wedding day photography timeline")
- **Related articles:** Photographing Indian Weddings in Dubai: Traditions We Capture; Mehendi and Sangeet Photography: A Coverage Guide; How Many Photos Will I Receive From My Wedding?
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Bride getting ready with natural window light, candid moment.
- **SEO title idea:** Wedding Day Photography Timeline: What to Expect Hour-by-Hour | MG Photography UAE
- **Meta description angle:** Answer "What does a typical wedding-day photography timeline look like?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 4 — Complete Guide to Baby Milestone Photography

- **Slug:** `complete-guide-to-baby-milestone-photography`
- **Primary keyword:** complete guide to baby milestone photography (no measured data — prioritized qualitatively)
- **Search intent:** Informational
- **Target audience:** Parents/couples/clients considering Baby Photography
- **Primary service:** Baby Photography (`/baby-photography-dubai/`)
- **Cluster / role:** baby-photography — pillar
- **User question answered:** What is milestone baby photography and when should I book each session?
- **Content angle:** Cluster hub — overview of the 3-month, 6-month, sitter, and cake-smash milestone sessions.
- **Suggested H2s:** What counts as a 'milestone' session / 3-month vs 6-month vs sitter sessions / Cake smash: what it is and when to book / Planning a full first-year series / Where to go deeper
- **Primary CTA:** View Baby Photography
- **Outgoing links:** /baby-photography-dubai/ ("our baby photography sessions in Dubai"); /blog/cake-smash-photography-what-to-expect/ ("more on cake smash photography"); /blog/best-age-for-a-sitter-session/ ("how we approach best age for a sitter session")
- **Incoming link opportunities:** from "Cake Smash Photography: What to Expect" ("our guide to complete guide to baby milestone photography"); from "Best Age for a Sitter Session" ("complete guide to baby milestone photography"); from "3-Month vs 6-Month Milestone Sessions: What's the Difference" ("more on complete guide to baby milestone photography")
- **Related articles:** Cake Smash Photography: What to Expect; Best Age for a Sitter Session; 3-Month vs 6-Month Milestone Sessions: What's the Difference
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Collage of a baby at different milestone ages.
- **SEO title idea:** Complete Guide to Baby Milestone Photography | MG Photography UAE
- **Meta description angle:** Answer "What is milestone baby photography and when should I book each session?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 5 — Complete Guide to Family Photography in Dubai

- **Slug:** `complete-guide-to-family-photography-in-dubai`
- **Primary keyword:** complete guide to family photography in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Informational
- **Target audience:** Parents/couples/clients considering Outdoor Photography
- **Primary service:** Outdoor Photography (`/outdoor-photography-dubai/`)
- **Cluster / role:** outdoor-photography — pillar
- **User question answered:** What should I know before booking a family photoshoot in Dubai?
- **Content angle:** Cluster hub focused on FAMILY sessions specifically — deliberately not a locations list, since /guides/outdoor-photoshoot-locations-dubai/ already covers that.
- **Suggested H2s:** What a family photography session includes / Home vs outdoor: an overview / Planning around kids' schedules / Packages at a glance / Where to go deeper
- **Primary CTA:** View Outdoor Photography
- **Outgoing links:** /outdoor-photography-dubai/ ("our outdoor photography sessions in Dubai"); /blog/multi-generation-family-sessions-capturing-grandparents-to/ ("more on multi-generation family sessions"); /blog/best-time-of-year-for-outdoor-family-photos-in-dubai/ ("how we approach best time of year for outdoor family photos in dubai")
- **Incoming link opportunities:** from "Multi-Generation Family Sessions: Capturing Grandparents to Grandchildren" ("our guide to complete guide to family photography in dubai"); from "Best Time of Year for Outdoor Family Photos in Dubai" ("complete guide to family photography in dubai"); from "What to Wear for a Family Photoshoot: Coordinating Without Matching" ("more on complete guide to family photography in dubai")
- **Related articles:** Multi-Generation Family Sessions: Capturing Grandparents to Grandchildren; Best Time of Year for Outdoor Family Photos in Dubai; What to Wear for a Family Photoshoot: Coordinating Without Matching
- **Cannibalization risk:** Low — Adjacent to /guides/outdoor-photoshoot-locations-dubai/ (locations) but a different intent (planning a family SESSION vs choosing a LOCATION). Must not turn into a locations list — link out to the existing guide for that instead.
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Multi-generation family group, candid outdoor moment.
- **SEO title idea:** Complete Guide to Family Photography in Dubai | MG Photography UAE
- **Meta description angle:** Answer "What should I know before booking a family photoshoot in Dubai?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 6 — Complete Guide to Real Estate Photography in Dubai

- **Slug:** `complete-guide-to-real-estate-photography-in-dubai`
- **Primary keyword:** complete guide to real estate photography in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Informational
- **Target audience:** Parents/couples/clients considering Real Estate Photography
- **Primary service:** Real Estate Photography (`/real-estate-photography-dubai/`)
- **Cluster / role:** real-estate-photography — pillar
- **User question answered:** What should agents and landlords know about professional real estate photography?
- **Content angle:** Cluster hub for a B2B audience.
- **Suggested H2s:** What professional real estate photography includes / HDR explained simply / Preparing a property for a shoot / Packages at a glance / Where to go deeper
- **Primary CTA:** View Real Estate Photography
- **Outgoing links:** /real-estate-photography-dubai/ ("our real estate photography sessions in Dubai"); /blog/what-is-hdr-real-estate-photography-and-why-it-matters/ ("more on what is hdr real estate photography and why it matters"); /blog/how-professional-photos-improve-property-listings/ ("how we approach how professional photos improve property listings")
- **Incoming link opportunities:** from "What Is HDR Real Estate Photography and Why It Matters" ("our guide to complete guide to real estate photography in dubai"); from "How Professional Photos Improve Property Listings" ("complete guide to real estate photography in dubai"); from "Preparing a Property for a Real Estate Photoshoot: A Checklist" ("more on complete guide to real estate photography in dubai")
- **Related articles:** What Is HDR Real Estate Photography and Why It Matters; How Professional Photos Improve Property Listings; Preparing a Property for a Real Estate Photoshoot: A Checklist
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Wide-angle HDR interior shot of a bright, staged living room.
- **SEO title idea:** Complete Guide to Real Estate Photography in Dubai | MG Photography UAE
- **Meta description angle:** Answer "What should agents and landlords know about professional real estate photography?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 7 — Complete Guide to Pre-Wedding Photography in Dubai

- **Slug:** `complete-guide-to-pre-wedding-photography-in-dubai`
- **Primary keyword:** complete guide to pre-wedding photography in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Informational
- **Target audience:** Parents/couples/clients considering Pre-Wedding Photography
- **Primary service:** Pre-Wedding Photography (`/pre-wedding-photography-dubai/`)
- **Cluster / role:** pre-wedding-photography — pillar
- **User question answered:** What should couples know before booking a pre-wedding photoshoot?
- **Content angle:** The cluster's hub — what pre-wedding photography is for, how it differs from the wedding day itself, planning basics.
- **Suggested H2s:** What a pre-wedding shoot is (and isn't) / How it differs from wedding-day coverage / Planning timeline before your wedding / Styling and outfit basics / Where to go deeper
- **Primary CTA:** View Pre-Wedding Photography
- **Outgoing links:** /pre-wedding-photography-dubai/ ("our pre-wedding photography sessions in Dubai"); /blog/what-to-wear-for-your-pre-wedding-photoshoot/ ("more on what to wear for your pre-wedding photoshoot"); /blog/saree-vs-lehenga-styling-your-pre-wedding-shoot/ ("how we approach saree vs lehenga")
- **Incoming link opportunities:** from "What to Wear for Your Pre-Wedding Photoshoot" ("our guide to complete guide to pre-wedding photography in dubai"); from "Saree vs Lehenga: Styling Your Pre-Wedding Shoot" ("complete guide to pre-wedding photography in dubai"); from "How Long Before the Wedding Should You Do a Pre-Wedding Shoot?" ("more on complete guide to pre-wedding photography in dubai")
- **Related articles:** What to Wear for Your Pre-Wedding Photoshoot; Saree vs Lehenga: Styling Your Pre-Wedding Shoot; How Long Before the Wedding Should You Do a Pre-Wedding Shoot?
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Couple in coordinated outfits at a scenic Dubai backdrop, joyful candid moment.
- **SEO title idea:** Complete Guide to Pre-Wedding Photography in Dubai | MG Photography UAE
- **Meta description angle:** Answer "What should couples know before booking a pre-wedding photoshoot?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 8 — Complete Guide to Birthday & Event Photography

- **Slug:** `complete-guide-to-birthday-event-photography`
- **Primary keyword:** complete guide to birthday & event photography (no measured data — prioritized qualitatively)
- **Search intent:** Informational
- **Target audience:** Parents/couples/clients considering Birthday Photography
- **Primary service:** Birthday Photography (`/birthday-photography-dubai/`)
- **Cluster / role:** birthday-photography — pillar
- **User question answered:** What should I know before booking birthday or event photography?
- **Content angle:** Cluster hub.
- **Suggested H2s:** What's covered in birthday/event photography / Coverage styles: candid vs posed / Planning coverage around your party timeline / Packages at a glance / Where to go deeper
- **Primary CTA:** View Birthday Photography
- **Outgoing links:** /birthday-photography-dubai/ ("our birthday photography sessions in Dubai"); /blog/candid-vs-posed-capturing-birthday-parties-naturally/ ("more on candid vs posed"); /blog/what-to-expect-from-event-photography-coverage/ ("how we approach what to expect from event photography coverage")
- **Incoming link opportunities:** from "Candid vs Posed: Capturing Birthday Parties Naturally" ("our guide to complete guide to birthday & event photography"); from "What to Expect From Event Photography Coverage" ("complete guide to birthday & event photography"); from "Planning the Best Photo Moments for a Kids' Birthday Party" ("more on complete guide to birthday & event photography")
- **Related articles:** Candid vs Posed: Capturing Birthday Parties Naturally; What to Expect From Event Photography Coverage; Planning the Best Photo Moments for a Kids' Birthday Party
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Wide shot of a birthday party in full swing, candid coverage style.
- **SEO title idea:** Complete Guide to Birthday & Event Photography | MG Photography UAE
- **Meta description angle:** Answer "What should I know before booking birthday or event photography?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 9 — Complete Guide to Architecture Photography in Dubai

- **Slug:** `complete-guide-to-architecture-photography-in-dubai`
- **Primary keyword:** complete guide to architecture photography in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Informational
- **Target audience:** Parents/couples/clients considering Architecture Photography
- **Primary service:** Architecture Photography (`/architecture-photography-dubai/`)
- **Cluster / role:** architecture-photography — pillar
- **User question answered:** What should I know about booking architecture photography?
- **Content angle:** Cluster hub for developers, architects, and interior designers.
- **Suggested H2s:** What architecture photography covers / Interior vs exterior: an overview / Who typically books this service / Packages at a glance / Where to go deeper
- **Primary CTA:** View Architecture Photography
- **Outgoing links:** /architecture-photography-dubai/ ("our architecture photography sessions in Dubai"); /blog/interior-vs-exterior-architecture-photography-what-s/ ("more on interior vs exterior architecture photography"); /blog/photographing-commercial-spaces-what-businesses-should-know/ ("how we approach photographing commercial spaces")
- **Incoming link opportunities:** from "Interior vs Exterior Architecture Photography: What's Different" ("our guide to complete guide to architecture photography in dubai"); from "Photographing Commercial Spaces: What Businesses Should Know" ("complete guide to architecture photography in dubai"); from "Architecture Photography for Developers: Building a Marketing Portfolio" ("more on complete guide to architecture photography in dubai")
- **Related articles:** Interior vs Exterior Architecture Photography: What's Different; Photographing Commercial Spaces: What Businesses Should Know; Architecture Photography for Developers: Building a Marketing Portfolio
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Clean exterior architectural shot with strong geometric lines.
- **SEO title idea:** Complete Guide to Architecture Photography in Dubai | MG Photography UAE
- **Meta description angle:** Answer "What should I know about booking architecture photography?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 10 — At-Home vs Studio Newborn Photography: What's the Difference

- **Slug:** `at-home-vs-studio-newborn-photography-what-s-the-difference`
- **Primary keyword:** at-home vs studio newborn photography (no measured data — prioritized qualitatively)
- **Search intent:** Comparison
- **Target audience:** Parents/couples/clients considering Newborn Photography
- **Primary service:** Newborn Photography (`/dubai-newborn-photography/`)
- **Cluster / role:** newborn-photography — supporting (pillar: `newborn-photography-complete-guide`)
- **User question answered:** Should I book a home session or a studio session for newborn photos?
- **Content angle:** MG Photography is home-visit only — explain why that's often better for newborns (no travel, familiar environment) and what a 'studio-style' home setup actually looks like.
- **Suggested H2s:** What 'studio-style at home' means / Why we don't operate a walk-in studio / Comfort and safety benefits of staying home / What we bring with us / Is a home session right for you?
- **Primary CTA:** View Newborn Collections
- **Outgoing links:** /dubai-newborn-photography/ ("our newborn photography sessions in Dubai"); /blog/newborn-photography-complete-guide/ ("our complete newborn photography guide"); /blog/newborn-photography-safety-how-we-keep-babies-safe/ ("more on newborn photography safety"); /blog/what-to-wear-for-your-newborn-photoshoot-a-parent-s-guide/ ("how we approach what to wear for your newborn photoshoot")
- **Incoming link opportunities:** from "Newborn Photography Safety: How We Keep Babies Safe" ("our guide to at-home vs studio newborn photography"); from "What to Wear for Your Newborn Photoshoot: A Parent's Guide" ("at-home vs studio newborn photography"); from "What's Included in a Newborn Photography Package?" ("more on at-home vs studio newborn photography")
- **Related articles:** Newborn Photography Safety: How We Keep Babies Safe; What to Wear for Your Newborn Photoshoot: A Parent's Guide; What's Included in a Newborn Photography Package?
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Full home-studio setup (backdrop, lighting, props) assembled in a client's living room.
- **SEO title idea:** At-Home vs Studio Newborn Photography: What's the Difference | MG Photography UAE
- **Meta description angle:** Answer "Should I book a home session or a studio session for newborn photos?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 11 — How to Book a Photography Session With MG Photography UAE

- **Slug:** `how-to-book-a-photography-session-with-mg-photography-uae`
- **Primary keyword:** how to book a photography session with mg photography uae (no measured data — prioritized qualitatively)
- **Search intent:** Transactional-support
- **Target audience:** Prospective clients across all services
- **Primary service:** —
- **Cluster / role:** brand-and-booking — pillar
- **User question answered:** How do I actually book a session with MG Photography?
- **Content angle:** Cross-cutting hub explaining the real WhatsApp-first booking flow.
- **Suggested H2s:** Why we book primarily through WhatsApp / What information to have ready when you reach out / Provisional vs confirmed dates / Deposits and confirming your booking / What happens next
- **Primary CTA:** Talk to MG Photography
- **Outgoing links:** /blog/what-happens-after-your-photoshoot-editing-and-delivery/ ("more on what happens after your photoshoot"); /blog/home-studio-sessions-explained-what-we-bring-to-you/ ("how we approach home studio sessions explained")
- **Incoming link opportunities:** from "What Happens After Your Photoshoot: Editing and Delivery Explained" ("our guide to how to book a photography session with mg photography uae"); from "Home Studio Sessions Explained: What We Bring to You" ("how to book a photography session with mg photography uae"); from "Gift a Photography Session: A Guide for Gifting in Dubai" ("more on how to book a photography session with mg photography uae")
- **Related articles:** What Happens After Your Photoshoot: Editing and Delivery Explained; Home Studio Sessions Explained: What We Bring to You; Gift a Photography Session: A Guide for Gifting in Dubai
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** WhatsApp conversation mockup (anonymised) showing a friendly booking exchange.
- **SEO title idea:** How to Book a Photography Session With MG Photography UAE | MG Photography UAE
- **Meta description angle:** Answer "How do I actually book a session with MG Photography?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 2,000–3,000 words (major pillar)

### Day 12 — Best Time for a Maternity Photoshoot: A Week-by-Week Guide

- **Slug:** `best-time-for-a-maternity-photoshoot-a-week-by-week-guide`
- **Primary keyword:** best time for a maternity photoshoot (no measured data — prioritized qualitatively)
- **Search intent:** Planning
- **Target audience:** Parents/couples/clients considering Maternity Photography
- **Primary service:** Maternity Photography (`/maternity-photography-dubai/`)
- **Cluster / role:** maternity-photography — supporting (pillar: `complete-guide-to-maternity-photography-in-dubai`)
- **User question answered:** What week of pregnancy is best for maternity photos?
- **Content angle:** Uses the real 28–34 week recommendation with the reasoning behind it.
- **Suggested H2s:** Why 28–34 weeks is the sweet spot / What happens if you book earlier or later / Booking timeline: when to lock in your date / Special considerations for twin pregnancies / What to do if your due date shifts
- **Primary CTA:** View Maternity Photography
- **Outgoing links:** /maternity-photography-dubai/ ("our maternity photography sessions in Dubai"); /blog/complete-guide-to-maternity-photography-in-dubai/ ("our complete guide"); /blog/studio-vs-outdoor-maternity-photography-in-dubai/ ("more on studio vs outdoor maternity photography in dubai"); /blog/including-your-partner-in-maternity-photos/ ("how we approach including your partner in maternity photos")
- **Incoming link opportunities:** from "Complete Guide to Maternity Photography in Dubai" ("how we approach best time for a maternity photoshoot"); from "Studio vs Outdoor Maternity Photography in Dubai" ("our guide to best time for a maternity photoshoot"); from "Including Your Partner in Maternity Photos" ("best time for a maternity photoshoot"); from "Maternity Photography FAQ" ("more on best time for a maternity photoshoot")
- **Related articles:** Studio vs Outdoor Maternity Photography in Dubai; Including Your Partner in Maternity Photos; Maternity Photography FAQ
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Side-profile silhouette showing the classic 'bump' shape at the ideal stage.
- **SEO title idea:** Best Time for a Maternity Photoshoot: A Week-by-Week Guide | MG Photography UAE
- **Meta description angle:** Answer "What week of pregnancy is best for maternity photos?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 13 — What to Wear for Your Newborn Photoshoot: A Parent's Guide

- **Slug:** `what-to-wear-for-your-newborn-photoshoot-a-parent-s-guide`
- **Primary keyword:** what to wear for your newborn photoshoot (no measured data — prioritized qualitatively)
- **Search intent:** Planning
- **Target audience:** Parents/couples/clients considering Newborn Photography
- **Primary service:** Newborn Photography (`/dubai-newborn-photography/`)
- **Cluster / role:** newborn-photography — supporting (pillar: `newborn-photography-complete-guide`)
- **User question answered:** What should parents wear for a newborn photoshoot?
- **Content angle:** Focused on PARENT/family wardrobe for a newborn session (distinct from the maternity outfit guide) — neutral tones, texture, what to avoid.
- **Suggested H2s:** Why simple beats busy / Colour palettes that complement newborn wraps / What to avoid (patterns, logos, stiff fabric) / Coordinating without matching exactly / A quick checklist
- **Primary CTA:** View Newborn Collections
- **Outgoing links:** /dubai-newborn-photography/ ("our newborn photography sessions in Dubai"); /blog/newborn-photography-complete-guide/ ("our complete newborn photography guide"); /blog/newborn-photography-safety-how-we-keep-babies-safe/ ("more on newborn photography safety"); /blog/at-home-vs-studio-newborn-photography-what-s-the-difference/ ("how we approach at-home vs studio newborn photography")
- **Incoming link opportunities:** from "Newborn Photography Safety: How We Keep Babies Safe" ("our guide to what to wear for your newborn photoshoot"); from "At-Home vs Studio Newborn Photography: What's the Difference" ("what to wear for your newborn photoshoot"); from "What's Included in a Newborn Photography Package?" ("more on what to wear for your newborn photoshoot")
- **Related articles:** Newborn Photography Safety: How We Keep Babies Safe; At-Home vs Studio Newborn Photography: What's the Difference; What's Included in a Newborn Photography Package?
- **Cannibalization risk:** Low — Distinct from /guides/what-to-wear-maternity-photoshoot/ (the canonical "what to wear" page for maternity) — this covers PARENT wardrobe for a newborn session, not maternity wardrobe. Keep separate; do not reuse maternity phrasing.
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Parents in soft neutral tones holding their wrapped newborn.
- **SEO title idea:** What to Wear for Your Newborn Photoshoot: A Parent's Guide | MG Photography UAE
- **Meta description angle:** Answer "What should parents wear for a newborn photoshoot?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 14 — Photographing Indian Weddings in Dubai: Traditions We Capture

- **Slug:** `photographing-indian-weddings-in-dubai-traditions-we-capture`
- **Primary keyword:** photographing indian weddings in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Educational / Trust
- **Target audience:** Parents/couples/clients considering Wedding Photography
- **Primary service:** Wedding Photography (`/wedding-photography-dubai/`)
- **Cluster / role:** wedding-photography — supporting (pillar: `wedding-day-photography-timeline-what-to-expect-hour-by-hour`)
- **User question answered:** Do wedding photographers in Dubai understand Indian wedding traditions?
- **Content angle:** Genuine expertise article reflecting the business's real Indian/destination wedding focus.
- **Suggested H2s:** Why understanding tradition changes how a day is covered / Key rituals we plan coverage around / Family and elder involvement in photography / Working with multiple outfit changes / What couples tell us matters most to capture
- **Primary CTA:** View Wedding Photography
- **Outgoing links:** /wedding-photography-dubai/ ("our wedding photography sessions in Dubai"); /blog/wedding-day-photography-timeline-what-to-expect-hour-by-hour/ ("our complete guide"); /blog/mehendi-and-sangeet-photography-a-coverage-guide/ ("more on mehendi and sangeet photography"); /blog/how-many-photos-will-i-receive-from-my-wedding/ ("how we approach how many photos will i receive from my wedding?")
- **Incoming link opportunities:** from "Wedding Day Photography Timeline: What to Expect Hour-by-Hour" ("how we approach photographing indian weddings in dubai"); from "Mehendi and Sangeet Photography: A Coverage Guide" ("our guide to photographing indian weddings in dubai"); from "How Many Photos Will I Receive From My Wedding?" ("photographing indian weddings in dubai"); from "Second Photographer vs Solo Coverage: What's Right for Your Wedding?" ("more on photographing indian weddings in dubai")
- **Related articles:** Mehendi and Sangeet Photography: A Coverage Guide; How Many Photos Will I Receive From My Wedding?; Second Photographer vs Solo Coverage: What's Right for Your Wedding?
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Hands performing a traditional ritual (e.g. exchanging garlands), candid documentary style.
- **SEO title idea:** Photographing Indian Weddings in Dubai: Traditions We Capture | MG Photography UAE
- **Meta description angle:** Answer "Do wedding photographers in Dubai understand Indian wedding traditions?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 15 — Cake Smash Photography: What to Expect

- **Slug:** `cake-smash-photography-what-to-expect`
- **Primary keyword:** cake smash photography (no measured data — prioritized qualitatively)
- **Search intent:** Educational
- **Target audience:** Parents/couples/clients considering Baby Photography
- **Primary service:** Baby Photography (`/baby-photography-dubai/`)
- **Cluster / role:** baby-photography — supporting (pillar: `complete-guide-to-baby-milestone-photography`)
- **User question answered:** What happens during a cake smash photoshoot?
- **Content angle:** Practical walkthrough for first-time parents.
- **Suggested H2s:** What a cake smash session actually involves / How messy does it really get? / Timing around nap and feeding schedules / What we provide vs what to bring / Clean-up and what happens after
- **Primary CTA:** View Baby Photography
- **Outgoing links:** /baby-photography-dubai/ ("our baby photography sessions in Dubai"); /blog/complete-guide-to-baby-milestone-photography/ ("our complete guide"); /blog/best-age-for-a-sitter-session/ ("more on best age for a sitter session"); /blog/3-month-vs-6-month-milestone-sessions-what-s-the-difference/ ("how we approach 3-month vs 6-month milestone sessions")
- **Incoming link opportunities:** from "Complete Guide to Baby Milestone Photography" ("how we approach cake smash photography"); from "Best Age for a Sitter Session" ("our guide to cake smash photography"); from "3-Month vs 6-Month Milestone Sessions: What's the Difference" ("cake smash photography"); from "Baby Photography Package Options Explained" ("more on cake smash photography")
- **Related articles:** Best Age for a Sitter Session; 3-Month vs 6-Month Milestone Sessions: What's the Difference; Baby Photography Package Options Explained
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Baby mid-cake-smash, joyful candid expression, colourful set.
- **SEO title idea:** Cake Smash Photography: What to Expect | MG Photography UAE
- **Meta description angle:** Answer "What happens during a cake smash photoshoot?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 16 — Studio vs Outdoor Maternity Photography in Dubai

- **Slug:** `studio-vs-outdoor-maternity-photography-in-dubai`
- **Primary keyword:** studio vs outdoor maternity photography in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Comparison
- **Target audience:** Parents/couples/clients considering Maternity Photography
- **Primary service:** Maternity Photography (`/maternity-photography-dubai/`)
- **Cluster / role:** maternity-photography — supporting (pillar: `complete-guide-to-maternity-photography-in-dubai`)
- **User question answered:** Should I choose a studio or outdoor maternity photoshoot?
- **Content angle:** Honest comparison of the two real options offered, including weather/comfort considerations for pregnant clients.
- **Suggested H2s:** What studio sessions offer / What outdoor golden-hour sessions offer / Comfort considerations during pregnancy / Weather and season in Dubai / How to decide
- **Primary CTA:** View Maternity Photography
- **Outgoing links:** /maternity-photography-dubai/ ("our maternity photography sessions in Dubai"); /blog/complete-guide-to-maternity-photography-in-dubai/ ("our complete guide"); /blog/best-time-for-a-maternity-photoshoot-a-week-by-week-guide/ ("more on best time for a maternity photoshoot"); /blog/including-your-partner-in-maternity-photos/ ("how we approach including your partner in maternity photos")
- **Incoming link opportunities:** from "Complete Guide to Maternity Photography in Dubai" ("how we approach studio vs outdoor maternity photography in dubai"); from "Best Time for a Maternity Photoshoot: A Week-by-Week Guide" ("our guide to studio vs outdoor maternity photography in dubai"); from "Including Your Partner in Maternity Photos" ("studio vs outdoor maternity photography in dubai"); from "Maternity Photography FAQ" ("more on studio vs outdoor maternity photography in dubai")
- **Related articles:** Best Time for a Maternity Photoshoot: A Week-by-Week Guide; Including Your Partner in Maternity Photos; Maternity Photography FAQ
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Split image: studio backdrop portrait next to an outdoor waterfront portrait.
- **SEO title idea:** Studio vs Outdoor Maternity Photography in Dubai | MG Photography UAE
- **Meta description angle:** Answer "Should I choose a studio or outdoor maternity photoshoot?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 17 — Multi-Generation Family Sessions: Capturing Grandparents to Grandchildren

- **Slug:** `multi-generation-family-sessions-capturing-grandparents-to`
- **Primary keyword:** multi-generation family sessions (no measured data — prioritized qualitatively)
- **Search intent:** Educational
- **Target audience:** Parents/couples/clients considering Outdoor Photography
- **Primary service:** Outdoor Photography (`/outdoor-photography-dubai/`)
- **Cluster / role:** outdoor-photography — supporting (pillar: `complete-guide-to-family-photography-in-dubai`)
- **User question answered:** How do you photograph a family session with grandparents, parents, and kids together?
- **Content angle:** Niche differentiator reflecting UAE multi-generational household patterns.
- **Suggested H2s:** Coordinating a session across three generations / Posing for comfort across different mobility levels / Capturing genuine interaction, not stiff group lineups / Managing a larger group on the day / Planning timing around everyone's schedules
- **Primary CTA:** View Outdoor Photography
- **Outgoing links:** /outdoor-photography-dubai/ ("our outdoor photography sessions in Dubai"); /blog/complete-guide-to-family-photography-in-dubai/ ("our complete guide"); /blog/best-time-of-year-for-outdoor-family-photos-in-dubai/ ("more on best time of year for outdoor family photos in dubai"); /blog/what-to-wear-for-a-family-photoshoot-coordinating-without/ ("how we approach what to wear for a family photoshoot")
- **Incoming link opportunities:** from "Complete Guide to Family Photography in Dubai" ("how we approach multi-generation family sessions"); from "Best Time of Year for Outdoor Family Photos in Dubai" ("our guide to multi-generation family sessions"); from "What to Wear for a Family Photoshoot: Coordinating Without Matching" ("multi-generation family sessions"); from "Including Pets in Your Family Photoshoot" ("more on multi-generation family sessions")
- **Related articles:** Best Time of Year for Outdoor Family Photos in Dubai; What to Wear for a Family Photoshoot: Coordinating Without Matching; Including Pets in Your Family Photoshoot
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Three-generation family group, warm candid interaction.
- **SEO title idea:** Multi-Generation Family Sessions: Capturing Grandparents to Grandchildren | MG Photography UAE
- **Meta description angle:** Answer "How do you photograph a family session with grandparents, parents, and kids together?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 18 — What Is HDR Real Estate Photography and Why It Matters

- **Slug:** `what-is-hdr-real-estate-photography-and-why-it-matters`
- **Primary keyword:** what is hdr real estate photography and why it matters (no measured data — prioritized qualitatively)
- **Search intent:** Educational
- **Target audience:** Parents/couples/clients considering Real Estate Photography
- **Primary service:** Real Estate Photography (`/real-estate-photography-dubai/`)
- **Cluster / role:** real-estate-photography — supporting (pillar: `complete-guide-to-real-estate-photography-in-dubai`)
- **User question answered:** What does HDR mean in real estate photography?
- **Content angle:** Genuine technical-expertise explainer for a non-technical B2B audience.
- **Suggested H2s:** What HDR actually does to an image / Why single-exposure photos often fall short indoors / How HDR balances bright windows and darker interiors / What to expect from HDR-edited listing photos / Questions to ask a photographer about their process
- **Primary CTA:** View Real Estate Photography
- **Outgoing links:** /real-estate-photography-dubai/ ("our real estate photography sessions in Dubai"); /blog/complete-guide-to-real-estate-photography-in-dubai/ ("our complete guide"); /blog/how-professional-photos-improve-property-listings/ ("more on how professional photos improve property listings"); /blog/preparing-a-property-for-a-real-estate-photoshoot-a/ ("how we approach preparing a property for a real estate photoshoot")
- **Incoming link opportunities:** from "Complete Guide to Real Estate Photography in Dubai" ("how we approach what is hdr real estate photography and why it matters"); from "How Professional Photos Improve Property Listings" ("our guide to what is hdr real estate photography and why it matters"); from "Preparing a Property for a Real Estate Photoshoot: A Checklist" ("what is hdr real estate photography and why it matters"); from "Real Estate Photography Packages for Agents and Landlords" ("more on what is hdr real estate photography and why it matters")
- **Related articles:** How Professional Photos Improve Property Listings; Preparing a Property for a Real Estate Photoshoot: A Checklist; Real Estate Photography Packages for Agents and Landlords
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Before/after-style HDR comparison of a window-lit room.
- **SEO title idea:** What Is HDR Real Estate Photography and Why It Matters | MG Photography UAE
- **Meta description angle:** Answer "What does HDR mean in real estate photography?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 19 — What's Included in a Newborn Photography Package?

- **Slug:** `what-s-included-in-a-newborn-photography-package`
- **Primary keyword:** what's included in a newborn photography package (no measured data — prioritized qualitatively)
- **Search intent:** Commercial investigation
- **Target audience:** Parents/couples/clients considering Newborn Photography
- **Primary service:** Newborn Photography (`/dubai-newborn-photography/`)
- **Cluster / role:** newborn-photography — supporting (pillar: `newborn-photography-complete-guide`)
- **User question answered:** What do you actually get in a newborn photography package?
- **Content angle:** Walks through the real Essence/Signature/Legacy collections and add-ons using the site's actual published pricing — a genuine buying-decision article, not vague.
- **Suggested H2s:** The three collections explained / What changes between tiers / Add-ons: Macro Detail Collection and Cinematic Reel / The Dubai home-visit fee / Choosing the right collection for your family
- **Primary CTA:** View Newborn Collections
- **Outgoing links:** /dubai-newborn-photography/ ("our newborn photography sessions in Dubai"); /blog/newborn-photography-complete-guide/ ("our complete newborn photography guide"); /blog/newborn-photography-safety-how-we-keep-babies-safe/ ("more on newborn photography safety"); /blog/at-home-vs-studio-newborn-photography-what-s-the-difference/ ("how we approach at-home vs studio newborn photography")
- **Incoming link opportunities:** from "Newborn Photography Safety: How We Keep Babies Safe" ("our guide to what's included in a newborn photography package?"); from "At-Home vs Studio Newborn Photography: What's the Difference" ("what's included in a newborn photography package?"); from "What to Wear for Your Newborn Photoshoot: A Parent's Guide" ("more on what's included in a newborn photography package?")
- **Related articles:** Newborn Photography Safety: How We Keep Babies Safe; At-Home vs Studio Newborn Photography: What's the Difference; What to Wear for Your Newborn Photoshoot: A Parent's Guide
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Flat-lay of a finished printed gallery box or album alongside a phone showing the online gallery.
- **SEO title idea:** What's Included in a Newborn Photography Package? | MG Photography UAE
- **Meta description angle:** Answer "What do you actually get in a newborn photography package?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 20 — Including Your Partner in Maternity Photos

- **Slug:** `including-your-partner-in-maternity-photos`
- **Primary keyword:** including your partner in maternity photos (no measured data — prioritized qualitatively)
- **Search intent:** Educational
- **Target audience:** Parents/couples/clients considering Maternity Photography
- **Primary service:** Maternity Photography (`/maternity-photography-dubai/`)
- **Cluster / role:** maternity-photography — supporting (pillar: `complete-guide-to-maternity-photography-in-dubai`)
- **User question answered:** Should my partner be in the maternity photos too?
- **Content angle:** Encourages partner inclusion with practical posing guidance.
- **Suggested H2s:** Why couple maternity portraits are so popular / Simple poses that feel natural, not staged / What to wear as a pair / Including partners who feel camera-shy / Making space for genuine connection
- **Primary CTA:** View Maternity Photography
- **Outgoing links:** /maternity-photography-dubai/ ("our maternity photography sessions in Dubai"); /blog/complete-guide-to-maternity-photography-in-dubai/ ("our complete guide"); /blog/best-time-for-a-maternity-photoshoot-a-week-by-week-guide/ ("more on best time for a maternity photoshoot"); /blog/studio-vs-outdoor-maternity-photography-in-dubai/ ("how we approach studio vs outdoor maternity photography in dubai")
- **Incoming link opportunities:** from "Complete Guide to Maternity Photography in Dubai" ("how we approach including your partner in maternity photos"); from "Best Time for a Maternity Photoshoot: A Week-by-Week Guide" ("our guide to including your partner in maternity photos"); from "Studio vs Outdoor Maternity Photography in Dubai" ("including your partner in maternity photos"); from "Maternity Photography FAQ" ("more on including your partner in maternity photos")
- **Related articles:** Best Time for a Maternity Photoshoot: A Week-by-Week Guide; Studio vs Outdoor Maternity Photography in Dubai; Maternity Photography FAQ
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Couple embracing, hands together over the bump, golden-hour light.
- **SEO title idea:** Including Your Partner in Maternity Photos | MG Photography UAE
- **Meta description angle:** Answer "Should my partner be in the maternity photos too?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 21 — Mehendi and Sangeet Photography: A Coverage Guide

- **Slug:** `mehendi-and-sangeet-photography-a-coverage-guide`
- **Primary keyword:** mehendi and sangeet photography (no measured data — prioritized qualitatively)
- **Search intent:** Educational
- **Target audience:** Parents/couples/clients considering Wedding Photography
- **Primary service:** Wedding Photography (`/wedding-photography-dubai/`)
- **Cluster / role:** wedding-photography — supporting (pillar: `wedding-day-photography-timeline-what-to-expect-hour-by-hour`)
- **User question answered:** How should mehendi and sangeet events be photographed?
- **Content angle:** Niche expertise piece for multi-event Indian weddings.
- **Suggested H2s:** What makes mehendi photography different from ceremony coverage / Capturing henna detail shots / Sangeet: dance, energy, and low light / Coordinating coverage across multiple event days / What to communicate to your photographer in advance
- **Primary CTA:** View Wedding Photography
- **Outgoing links:** /wedding-photography-dubai/ ("our wedding photography sessions in Dubai"); /blog/wedding-day-photography-timeline-what-to-expect-hour-by-hour/ ("our complete guide"); /blog/photographing-indian-weddings-in-dubai-traditions-we-capture/ ("more on photographing indian weddings in dubai"); /blog/how-many-photos-will-i-receive-from-my-wedding/ ("how we approach how many photos will i receive from my wedding?")
- **Incoming link opportunities:** from "Wedding Day Photography Timeline: What to Expect Hour-by-Hour" ("how we approach mehendi and sangeet photography"); from "Photographing Indian Weddings in Dubai: Traditions We Capture" ("our guide to mehendi and sangeet photography"); from "How Many Photos Will I Receive From My Wedding?" ("mehendi and sangeet photography"); from "Second Photographer vs Solo Coverage: What's Right for Your Wedding?" ("more on mehendi and sangeet photography")
- **Related articles:** Photographing Indian Weddings in Dubai: Traditions We Capture; How Many Photos Will I Receive From My Wedding?; Second Photographer vs Solo Coverage: What's Right for Your Wedding?
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Close-up of intricate henna detail on hands.
- **SEO title idea:** Mehendi and Sangeet Photography: A Coverage Guide | MG Photography UAE
- **Meta description angle:** Answer "How should mehendi and sangeet events be photographed?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 22 — What to Wear for Your Pre-Wedding Photoshoot

- **Slug:** `what-to-wear-for-your-pre-wedding-photoshoot`
- **Primary keyword:** what to wear for your pre-wedding photoshoot (no measured data — prioritized qualitatively)
- **Search intent:** Planning
- **Target audience:** Parents/couples/clients considering Pre-Wedding Photography
- **Primary service:** Pre-Wedding Photography (`/pre-wedding-photography-dubai/`)
- **Cluster / role:** pre-wedding-photography — supporting (pillar: `complete-guide-to-pre-wedding-photography-in-dubai`)
- **User question answered:** What should a couple wear for pre-wedding photos?
- **Content angle:** Own distinct intent from the wedding-day and maternity outfit content — engagement-shoot-specific styling.
- **Suggested H2s:** Coordinating without matching exactly / Fabrics and colours that photograph well outdoors / Bringing a second outfit for variety / Accessorising traditional vs western looks / What to avoid
- **Primary CTA:** View Pre-Wedding Photography
- **Outgoing links:** /pre-wedding-photography-dubai/ ("our pre-wedding photography sessions in Dubai"); /blog/complete-guide-to-pre-wedding-photography-in-dubai/ ("our complete guide"); /blog/saree-vs-lehenga-styling-your-pre-wedding-shoot/ ("more on saree vs lehenga"); /blog/how-long-before-the-wedding-should-you-do-a-pre-wedding/ ("how we approach how long before the wedding should you do a pre-wedding shoot?")
- **Incoming link opportunities:** from "Complete Guide to Pre-Wedding Photography in Dubai" ("how we approach what to wear for your pre-wedding photoshoot"); from "Saree vs Lehenga: Styling Your Pre-Wedding Shoot" ("our guide to what to wear for your pre-wedding photoshoot"); from "How Long Before the Wedding Should You Do a Pre-Wedding Shoot?" ("what to wear for your pre-wedding photoshoot"); from "Pre-Wedding Photography Packages Explained" ("more on what to wear for your pre-wedding photoshoot")
- **Related articles:** Saree vs Lehenga: Styling Your Pre-Wedding Shoot; How Long Before the Wedding Should You Do a Pre-Wedding Shoot?; Pre-Wedding Photography Packages Explained
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Couple in two coordinated outfit changes side by side.
- **SEO title idea:** What to Wear for Your Pre-Wedding Photoshoot | MG Photography UAE
- **Meta description angle:** Answer "What should a couple wear for pre-wedding photos?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 23 — Best Age for a Sitter Session

- **Slug:** `best-age-for-a-sitter-session`
- **Primary keyword:** best age for a sitter session (no measured data — prioritized qualitatively)
- **Search intent:** Planning
- **Target audience:** Parents/couples/clients considering Baby Photography
- **Primary service:** Baby Photography (`/baby-photography-dubai/`)
- **Cluster / role:** baby-photography — supporting (pillar: `complete-guide-to-baby-milestone-photography`)
- **User question answered:** When should I book a sitter session for my baby?
- **Content angle:** Timing-focused article distinct from the newborn timing article.
- **Suggested H2s:** What a sitter session captures that newborn photos don't / Why 6–8 months is the typical window / Signs your baby is ready / What if your baby isn't sitting confidently yet / Booking around nap schedules
- **Primary CTA:** View Baby Photography
- **Outgoing links:** /baby-photography-dubai/ ("our baby photography sessions in Dubai"); /blog/complete-guide-to-baby-milestone-photography/ ("our complete guide"); /blog/cake-smash-photography-what-to-expect/ ("more on cake smash photography"); /blog/3-month-vs-6-month-milestone-sessions-what-s-the-difference/ ("how we approach 3-month vs 6-month milestone sessions")
- **Incoming link opportunities:** from "Complete Guide to Baby Milestone Photography" ("how we approach best age for a sitter session"); from "Cake Smash Photography: What to Expect" ("our guide to best age for a sitter session"); from "3-Month vs 6-Month Milestone Sessions: What's the Difference" ("best age for a sitter session"); from "Baby Photography Package Options Explained" ("more on best age for a sitter session")
- **Related articles:** Cake Smash Photography: What to Expect; 3-Month vs 6-Month Milestone Sessions: What's the Difference; Baby Photography Package Options Explained
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Baby sitting independently, engaged and smiling, soft studio-style set.
- **SEO title idea:** Best Age for a Sitter Session | MG Photography UAE
- **Meta description angle:** Answer "When should I book a sitter session for my baby?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 24 — Candid vs Posed: Capturing Birthday Parties Naturally

- **Slug:** `candid-vs-posed-capturing-birthday-parties-naturally`
- **Primary keyword:** candid vs posed (no measured data — prioritized qualitatively)
- **Search intent:** Comparison
- **Target audience:** Parents/couples/clients considering Birthday Photography
- **Primary service:** Birthday Photography (`/birthday-photography-dubai/`)
- **Cluster / role:** birthday-photography — supporting (pillar: `complete-guide-to-birthday-event-photography`)
- **User question answered:** Should birthday party photography be candid or posed?
- **Content angle:** Style-education article.
- **Suggested H2s:** What candid coverage captures that posed shots miss / When posed group shots are still worth planning / Balancing both styles across a party / Working around kids who won't pose / What we recommend
- **Primary CTA:** View Birthday Photography
- **Outgoing links:** /birthday-photography-dubai/ ("our birthday photography sessions in Dubai"); /blog/complete-guide-to-birthday-event-photography/ ("our complete guide"); /blog/what-to-expect-from-event-photography-coverage/ ("more on what to expect from event photography coverage"); /blog/planning-the-best-photo-moments-for-a-kids-birthday-party/ ("how we approach planning the best photo moments for a kids' birthday party")
- **Incoming link opportunities:** from "Complete Guide to Birthday & Event Photography" ("how we approach candid vs posed"); from "What to Expect From Event Photography Coverage" ("our guide to candid vs posed"); from "Planning the Best Photo Moments for a Kids' Birthday Party" ("candid vs posed"); from "How Many Hours of Coverage Do You Need for a Birthday Party?" ("more on candid vs posed")
- **Related articles:** What to Expect From Event Photography Coverage; Planning the Best Photo Moments for a Kids' Birthday Party; How Many Hours of Coverage Do You Need for a Birthday Party?
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Candid laughing moment mid-party, unposed.
- **SEO title idea:** Candid vs Posed: Capturing Birthday Parties Naturally | MG Photography UAE
- **Meta description angle:** Answer "Should birthday party photography be candid or posed?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 25 — Interior vs Exterior Architecture Photography: What's Different

- **Slug:** `interior-vs-exterior-architecture-photography-what-s`
- **Primary keyword:** interior vs exterior architecture photography (no measured data — prioritized qualitatively)
- **Search intent:** Comparison
- **Target audience:** Parents/couples/clients considering Architecture Photography
- **Primary service:** Architecture Photography (`/architecture-photography-dubai/`)
- **Cluster / role:** architecture-photography — supporting (pillar: `complete-guide-to-architecture-photography-in-dubai`)
- **User question answered:** What's the difference between interior and exterior architecture photography?
- **Content angle:** Educational comparison for prospective commercial clients.
- **Suggested H2s:** Lighting challenges unique to interiors / Composing exteriors: lines, scale, context / Equipment considerations for each / When a project needs both / What to expect from each type of shoot
- **Primary CTA:** View Architecture Photography
- **Outgoing links:** /architecture-photography-dubai/ ("our architecture photography sessions in Dubai"); /blog/complete-guide-to-architecture-photography-in-dubai/ ("our complete guide"); /blog/photographing-commercial-spaces-what-businesses-should-know/ ("more on photographing commercial spaces"); /blog/architecture-photography-for-developers-building-a/ ("how we approach architecture photography for developers")
- **Incoming link opportunities:** from "Complete Guide to Architecture Photography in Dubai" ("how we approach interior vs exterior architecture photography"); from "Photographing Commercial Spaces: What Businesses Should Know" ("our guide to interior vs exterior architecture photography"); from "Architecture Photography for Developers: Building a Marketing Portfolio" ("interior vs exterior architecture photography"); from "Light and Time of Day in Architecture Photography" ("more on interior vs exterior architecture photography")
- **Related articles:** Photographing Commercial Spaces: What Businesses Should Know; Architecture Photography for Developers: Building a Marketing Portfolio; Light and Time of Day in Architecture Photography
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Split image: a clean interior shot next to an exterior facade shot.
- **SEO title idea:** Interior vs Exterior Architecture Photography: What's Different | MG Photography UAE
- **Meta description angle:** Answer "What's the difference between interior and exterior architecture photography?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 26 — Newborn Photography FAQ: Your Questions Answered

- **Slug:** `newborn-photography-faq-your-questions-answered`
- **Primary keyword:** newborn photography faq (no measured data — prioritized qualitatively)
- **Search intent:** FAQ
- **Target audience:** Parents/couples/clients considering Newborn Photography
- **Primary service:** Newborn Photography (`/dubai-newborn-photography/`)
- **Cluster / role:** newborn-photography — supporting (pillar: `newborn-photography-complete-guide`)
- **User question answered:** What do parents most commonly ask before booking newborn photography?
- **Content angle:** A consolidated FAQ pulling together the smaller questions that don't deserve their own page — session length, who can attend, weather/no-weather-dependency (it's home-based), pets in the room.
- **Suggested H2s:** How long does a session take? / Can grandparents or siblings be there? / What if my baby cries the whole time? / Do you edit in black and white or colour? / How far in advance should I book?
- **Primary CTA:** View Newborn Collections
- **Outgoing links:** /dubai-newborn-photography/ ("our newborn photography sessions in Dubai"); /blog/newborn-photography-complete-guide/ ("our complete newborn photography guide"); /blog/newborn-photography-safety-how-we-keep-babies-safe/ ("more on newborn photography safety"); /blog/at-home-vs-studio-newborn-photography-what-s-the-difference/ ("how we approach at-home vs studio newborn photography")
- **Incoming link opportunities:** from "Newborn Photography Safety: How We Keep Babies Safe" ("our guide to newborn photography faq"); from "At-Home vs Studio Newborn Photography: What's the Difference" ("newborn photography faq"); from "What to Wear for Your Newborn Photoshoot: A Parent's Guide" ("more on newborn photography faq")
- **Related articles:** Newborn Photography Safety: How We Keep Babies Safe; At-Home vs Studio Newborn Photography: What's the Difference; What to Wear for Your Newborn Photoshoot: A Parent's Guide
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Collage-style flat lay of newborn session props: wraps, headbands, a woven basket.
- **SEO title idea:** Newborn Photography FAQ: Your Questions Answered | MG Photography UAE
- **Meta description angle:** Answer "What do parents most commonly ask before booking newborn photography?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 700–1,100 words (focused FAQ)

### Day 27 — What Happens After Your Photoshoot: Editing and Delivery Explained

- **Slug:** `what-happens-after-your-photoshoot-editing-and-delivery`
- **Primary keyword:** what happens after your photoshoot (no measured data — prioritized qualitatively)
- **Search intent:** Trust / transactional-support
- **Target audience:** Prospective clients across all services
- **Primary service:** —
- **Cluster / role:** brand-and-booking — supporting (pillar: `how-to-book-a-photography-session-with-mg-photography-uae`)
- **User question answered:** What happens between the photoshoot and receiving my photos?
- **Content angle:** Cross-cutting trust content using real delivery facts (5–7 working days, hand-retouched, private gallery).
- **Suggested H2s:** Our hand-retouching process, image by image / Why we don't batch-process edits / Typical delivery timeline / How the private online gallery works / Printing and sharing your images
- **Primary CTA:** Talk to MG Photography
- **Outgoing links:** /blog/how-to-book-a-photography-session-with-mg-photography-uae/ ("our complete guide"); /blog/home-studio-sessions-explained-what-we-bring-to-you/ ("more on home studio sessions explained"); /blog/gift-a-photography-session-a-guide-for-gifting-in-dubai/ ("how we approach gift a photography session")
- **Incoming link opportunities:** from "How to Book a Photography Session With MG Photography UAE" ("how we approach what happens after your photoshoot"); from "Home Studio Sessions Explained: What We Bring to You" ("our guide to what happens after your photoshoot"); from "Gift a Photography Session: A Guide for Gifting in Dubai" ("what happens after your photoshoot"); from "Photography Pricing in Dubai: What Affects the Cost" ("more on what happens after your photoshoot")
- **Related articles:** Home Studio Sessions Explained: What We Bring to You; Gift a Photography Session: A Guide for Gifting in Dubai; Photography Pricing in Dubai: What Affects the Cost
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Behind-the-scenes: an editor's monitor showing before/after retouching.
- **SEO title idea:** What Happens After Your Photoshoot: Editing and Delivery Explained | MG Photography UAE
- **Meta description angle:** Answer "What happens between the photoshoot and receiving my photos?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 28 — Best Time of Year for Outdoor Family Photos in Dubai

- **Slug:** `best-time-of-year-for-outdoor-family-photos-in-dubai`
- **Primary keyword:** best time of year for outdoor family photos in dubai (no measured data — prioritized qualitatively)
- **Search intent:** Seasonal
- **Target audience:** Parents/couples/clients considering Outdoor Photography
- **Primary service:** Outdoor Photography (`/outdoor-photography-dubai/`)
- **Cluster / role:** outdoor-photography — supporting (pillar: `complete-guide-to-family-photography-in-dubai`)
- **User question answered:** When is the best season for outdoor family photography in Dubai?
- **Content angle:** Real climate expertise — cooler months, light quality, comfort for young kids.
- **Suggested H2s:** Why cooler months suit outdoor sessions best / Light quality across the seasons / Comfort considerations for young children in heat / Booking ahead for the busy cooler season / What we recommend if you need summer dates
- **Primary CTA:** View Outdoor Photography
- **Outgoing links:** /outdoor-photography-dubai/ ("our outdoor photography sessions in Dubai"); /blog/complete-guide-to-family-photography-in-dubai/ ("our complete guide"); /blog/multi-generation-family-sessions-capturing-grandparents-to/ ("more on multi-generation family sessions"); /blog/what-to-wear-for-a-family-photoshoot-coordinating-without/ ("how we approach what to wear for a family photoshoot")
- **Incoming link opportunities:** from "Complete Guide to Family Photography in Dubai" ("how we approach best time of year for outdoor family photos in dubai"); from "Multi-Generation Family Sessions: Capturing Grandparents to Grandchildren" ("our guide to best time of year for outdoor family photos in dubai"); from "What to Wear for a Family Photoshoot: Coordinating Without Matching" ("best time of year for outdoor family photos in dubai"); from "Including Pets in Your Family Photoshoot" ("more on best time of year for outdoor family photos in dubai")
- **Related articles:** Multi-Generation Family Sessions: Capturing Grandparents to Grandchildren; What to Wear for a Family Photoshoot: Coordinating Without Matching; Including Pets in Your Family Photoshoot
- **Cannibalization risk:** None
- **E-E-A-T:** Yes — Should include MG Photography's own working practice/example, not generic advice.
- **Featured image concept:** Family portrait in soft cool-season light, comfortable clothing.
- **SEO title idea:** Best Time of Year for Outdoor Family Photos in Dubai | MG Photography UAE
- **Meta description angle:** Answer "When is the best season for outdoor family photography in Dubai?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 29 — How Professional Photos Improve Property Listings

- **Slug:** `how-professional-photos-improve-property-listings`
- **Primary keyword:** how professional photos improve property listings (no measured data — prioritized qualitatively)
- **Search intent:** Educational
- **Target audience:** Parents/couples/clients considering Real Estate Photography
- **Primary service:** Real Estate Photography (`/real-estate-photography-dubai/`)
- **Cluster / role:** real-estate-photography — supporting (pillar: `complete-guide-to-real-estate-photography-in-dubai`)
- **User question answered:** Does professional photography actually make a difference for property listings?
- **Content angle:** Informational, framed qualitatively — no fabricated statistics or guarantees.
- **Suggested H2s:** Why first impressions happen in the listing photos / What buyers and renters notice / How professional photos differ from phone photos / Setting realistic expectations, not guarantees / What we focus on to represent a property well
- **Primary CTA:** View Real Estate Photography
- **Outgoing links:** /real-estate-photography-dubai/ ("our real estate photography sessions in Dubai"); /blog/complete-guide-to-real-estate-photography-in-dubai/ ("our complete guide"); /blog/what-is-hdr-real-estate-photography-and-why-it-matters/ ("more on what is hdr real estate photography and why it matters"); /blog/preparing-a-property-for-a-real-estate-photoshoot-a/ ("how we approach preparing a property for a real estate photoshoot")
- **Incoming link opportunities:** from "Complete Guide to Real Estate Photography in Dubai" ("how we approach how professional photos improve property listings"); from "What Is HDR Real Estate Photography and Why It Matters" ("our guide to how professional photos improve property listings"); from "Preparing a Property for a Real Estate Photoshoot: A Checklist" ("how professional photos improve property listings"); from "Real Estate Photography Packages for Agents and Landlords" ("more on how professional photos improve property listings")
- **Related articles:** What Is HDR Real Estate Photography and Why It Matters; Preparing a Property for a Real Estate Photoshoot: A Checklist; Real Estate Photography Packages for Agents and Landlords
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Comparison of a cluttered phone photo next to a professionally composed shot.
- **SEO title idea:** How Professional Photos Improve Property Listings | MG Photography UAE
- **Meta description angle:** Answer "Does professional photography actually make a difference for property listings?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 1,200–1,800 words (standard guide)

### Day 30 — Maternity Photography FAQ

- **Slug:** `maternity-photography-faq`
- **Primary keyword:** maternity photography faq (no measured data — prioritized qualitatively)
- **Search intent:** FAQ
- **Target audience:** Parents/couples/clients considering Maternity Photography
- **Primary service:** Maternity Photography (`/maternity-photography-dubai/`)
- **Cluster / role:** maternity-photography — supporting (pillar: `complete-guide-to-maternity-photography-in-dubai`)
- **User question answered:** What do expecting mothers most want to know before a maternity shoot?
- **Content angle:** Consolidated FAQ — comfort during posing, how long sessions run, can family attend, safety for high-risk pregnancies.
- **Suggested H2s:** How long does a session take? / Is it safe to pose for photos while pregnant? / Can my kids come to the session? / What if I feel unwell on the day? / Can we reschedule easily?
- **Primary CTA:** View Maternity Photography
- **Outgoing links:** /maternity-photography-dubai/ ("our maternity photography sessions in Dubai"); /blog/complete-guide-to-maternity-photography-in-dubai/ ("our complete guide"); /blog/best-time-for-a-maternity-photoshoot-a-week-by-week-guide/ ("more on best time for a maternity photoshoot"); /blog/studio-vs-outdoor-maternity-photography-in-dubai/ ("how we approach studio vs outdoor maternity photography in dubai")
- **Incoming link opportunities:** from "Complete Guide to Maternity Photography in Dubai" ("how we approach maternity photography faq"); from "Best Time for a Maternity Photoshoot: A Week-by-Week Guide" ("our guide to maternity photography faq"); from "Studio vs Outdoor Maternity Photography in Dubai" ("maternity photography faq"); from "Including Your Partner in Maternity Photos" ("more on maternity photography faq")
- **Related articles:** Best Time for a Maternity Photoshoot: A Week-by-Week Guide; Studio vs Outdoor Maternity Photography in Dubai; Including Your Partner in Maternity Photos
- **Cannibalization risk:** None
- **E-E-A-T:** No — Standalone-useful without requiring a specific client example.
- **Featured image concept:** Flat lay of maternity styling props: gowns, flowers, soft fabric.
- **SEO title idea:** Maternity Photography FAQ | MG Photography UAE
- **Meta description angle:** Answer "What do expecting mothers most want to know before a maternity shoot?" directly in the first sentence; mention Dubai/UAE and MG Photography's home-visit model where natural.
- **Word count guidance:** 700–1,100 words (focused FAQ)

## 12. Full 90-Day Calendar (Compact)

Full per-article detail (keywords, links, anchors, CTA, image concept,
word count, etc.) for every day lives in
`docs/SEO_90_DAY_CONTENT_PLAN.json`. This table is the at-a-glance index.

| Day | Title | Cluster | Role | Intent | Risk |
|---|---|---|---|---|---|
| 1 | Newborn Photography Safety: How We Keep Babies Safe | Newborn | supporting | Safety / Trust | None |
| 2 | Complete Guide to Maternity Photography in Dubai | Maternity | pillar | Informational | None |
| 3 | Wedding Day Photography Timeline: What to Expect Hour-by-Hour | Wedding | pillar | Planning | None |
| 4 | Complete Guide to Baby Milestone Photography | Baby | pillar | Informational | None |
| 5 | Complete Guide to Family Photography in Dubai | Outdoor | pillar | Informational | Low |
| 6 | Complete Guide to Real Estate Photography in Dubai | Real Estate | pillar | Informational | None |
| 7 | Complete Guide to Pre-Wedding Photography in Dubai | Pre-Wedding | pillar | Informational | None |
| 8 | Complete Guide to Birthday & Event Photography | Birthday | pillar | Informational | None |
| 9 | Complete Guide to Architecture Photography in Dubai | Architecture | pillar | Informational | None |
| 10 | At-Home vs Studio Newborn Photography: What's the Difference | Newborn | supporting | Comparison | None |
| 11 | How to Book a Photography Session With MG Photography UAE | Brand/Booking | pillar | Transactional-support | None |
| 12 | Best Time for a Maternity Photoshoot: A Week-by-Week Guide | Maternity | supporting | Planning | None |
| 13 | What to Wear for Your Newborn Photoshoot: A Parent's Guide | Newborn | supporting | Planning | Low |
| 14 | Photographing Indian Weddings in Dubai: Traditions We Capture | Wedding | supporting | Educational / Trust | None |
| 15 | Cake Smash Photography: What to Expect | Baby | supporting | Educational | None |
| 16 | Studio vs Outdoor Maternity Photography in Dubai | Maternity | supporting | Comparison | None |
| 17 | Multi-Generation Family Sessions: Capturing Grandparents to Grandchildren | Outdoor | supporting | Educational | None |
| 18 | What Is HDR Real Estate Photography and Why It Matters | Real Estate | supporting | Educational | None |
| 19 | What's Included in a Newborn Photography Package? | Newborn | supporting | Commercial investigation | None |
| 20 | Including Your Partner in Maternity Photos | Maternity | supporting | Educational | None |
| 21 | Mehendi and Sangeet Photography: A Coverage Guide | Wedding | supporting | Educational | None |
| 22 | What to Wear for Your Pre-Wedding Photoshoot | Pre-Wedding | supporting | Planning | None |
| 23 | Best Age for a Sitter Session | Baby | supporting | Planning | None |
| 24 | Candid vs Posed: Capturing Birthday Parties Naturally | Birthday | supporting | Comparison | None |
| 25 | Interior vs Exterior Architecture Photography: What's Different | Architecture | supporting | Comparison | None |
| 26 | Newborn Photography FAQ: Your Questions Answered | Newborn | supporting | FAQ | None |
| 27 | What Happens After Your Photoshoot: Editing and Delivery Explained | Brand/Booking | supporting | Trust / transactional-support | None |
| 28 | Best Time of Year for Outdoor Family Photos in Dubai | Outdoor | supporting | Seasonal | None |
| 29 | How Professional Photos Improve Property Listings | Real Estate | supporting | Educational | None |
| 30 | Maternity Photography FAQ | Maternity | supporting | FAQ | None |
| 31 | Including Siblings in Your Newborn Photoshoot | Newborn | supporting | Educational | None |
| 32 | How Many Photos Will I Receive From My Wedding? | Wedding | supporting | FAQ / transactional-support | None |
| 33 | 3-Month vs 6-Month Milestone Sessions: What's the Difference | Baby | supporting | Comparison | None |
| 34 | Including Parents in Newborn Photos: Why It Matters | Newborn | supporting | Educational | None |
| 35 | What's Included in a Maternity Photography Package? | Maternity | supporting | Commercial investigation | None |
| 36 | Saree vs Lehenga: Styling Your Pre-Wedding Shoot | Pre-Wedding | supporting | Educational | None |
| 37 | What to Expect From Event Photography Coverage | Birthday | supporting | Educational / FAQ | None |
| 38 | Photographing Commercial Spaces: What Businesses Should Know | Architecture | supporting | Educational | None |
| 39 | What to Wear for a Family Photoshoot: Coordinating Without Matching | Outdoor | supporting | Planning | None |
| 40 | Preparing a Property for a Real Estate Photoshoot: A Checklist | Real Estate | supporting | Planning | None |
| 41 | What If My Newborn Won't Settle During the Session? | Newborn | supporting | FAQ / problem-solving | None |
| 42 | Second Photographer vs Solo Coverage: What's Right for Your Wedding? | Wedding | supporting | Comparison | None |
| 43 | Baby Photography Package Options Explained | Baby | supporting | Commercial investigation | None |
| 44 | Maternity Photoshoot Poses for Comfort and Confidence | Maternity | supporting | Educational | None |
| 45 | Newborn Photography After a C-Section: What to Know | Newborn | supporting | Educational / Trust | None |
| 46 | Home Studio Sessions Explained: What We Bring to You | Brand/Booking | supporting | Trust / Educational | None |
| 47 | Golden Hour Maternity Photography: Why Light Matters | Maternity | supporting | Educational | None |
| 48 | Wedding Photography Packages Explained | Wedding | supporting | Commercial investigation | None |
| 49 | Keeping Baby Happy During a Photoshoot: Our Approach | Baby | supporting | Trust / expertise | None |
| 50 | Photographing Twins: A Guide for Parents Expecting Two | Newborn | supporting | Educational | None |
| 51 | Including Pets in Your Family Photoshoot | Outdoor | supporting | Educational | None |
| 52 | Real Estate Photography Packages for Agents and Landlords | Real Estate | supporting | Commercial investigation | None |
| 53 | How Long Before the Wedding Should You Do a Pre-Wedding Shoot? | Pre-Wedding | supporting | Planning / FAQ | None |
| 54 | Planning the Best Photo Moments for a Kids' Birthday Party | Birthday | supporting | Planning | None |
| 55 | Architecture Photography for Developers: Building a Marketing Portfolio | Architecture | supporting | Commercial investigation | None |
| 56 | Maternity Photography for Twin Pregnancies | Maternity | supporting | Educational | None |
| 57 | Macro Newborn Photography: Capturing the Tiny Details | Newborn | supporting | Style / Inspiration | None |
| 58 | Best Time of Day for Wedding Photography in Dubai's Climate | Wedding | supporting | Educational | None |
| 59 | At-Home Baby Milestone Photography: What to Expect | Baby | supporting | Educational | None |
| 60 | The Cinematic Newborn Reel: Video Alongside Your Photos | Newborn | supporting | Commercial investigation | None |
| 61 | Including Older Siblings in Your Maternity Session | Maternity | supporting | Educational | None |
| 62 | Family Photography FAQ | Outdoor | supporting | FAQ | None |
| 63 | Twilight and Golden Hour Property Photography: When It's Worth It | Real Estate | supporting | Educational | None |
| 64 | Gift a Photography Session: A Guide for Gifting in Dubai | Brand/Booking | supporting | Inspirational / Commercial | None |
| 65 | How Long Does a Newborn Photography Session Take? | Newborn | supporting | FAQ / Planning | None |
| 66 | How Far Along Should I Be for Outdoor Maternity Photos? | Maternity | supporting | Planning / FAQ | None |
| 67 | Documentary vs Posed Wedding Photography: Which Style Is Right for You? | Wedding | supporting | Comparison | None |
| 68 | Pre-Wedding Photography Packages Explained | Pre-Wedding | supporting | Commercial investigation | None |
| 69 | Baby Photography FAQ | Baby | supporting | FAQ | None |
| 70 | How Many Hours of Coverage Do You Need for a Birthday Party? | Birthday | supporting | FAQ | None |
| 71 | Light and Time of Day in Architecture Photography | Architecture | supporting | Educational | None |
| 72 | When Will I Receive My Newborn Photos? Gallery & Delivery Explained | Newborn | supporting | Transactional-support | None |
| 73 | Home vs Outdoor Family Photography: Which Is Right for You? | Outdoor | supporting | Comparison | None |
| 74 | Real Estate Photography FAQ for Dubai Agents | Real Estate | supporting | FAQ | None |
| 75 | Choosing a Maternity Photographer in Dubai | Maternity | supporting | Commercial investigation | None |
| 76 | Questions to Ask Before Booking a Destination Wedding Photographer | Wedding | supporting | Commercial investigation | Medium |
| 77 | First Year Photography: Planning a Milestone Series | Baby | supporting | Planning | None |
| 78 | Newborn Photography Poses Explained: What's Safe and What Isn't | Newborn | supporting | Safety / Trust | None |
| 79 | Maternity Photography Locations in Dubai: Studio and Outdoor Options We Offer | Maternity | supporting | Local informational | Low |
| 80 | Photography Pricing in Dubai: What Affects the Cost | Brand/Booking | supporting | Educational / Commercial investigation | None |
| 81 | Choosing a Newborn Photographer in Dubai: What to Look For | Newborn | supporting | Commercial investigation | None |
| 82 | Couple Posing Tips for a Natural Pre-Wedding Shoot | Pre-Wedding | supporting | Educational | None |
| 83 | Birthday & Event Photography Packages Explained | Birthday | supporting | Commercial investigation | None |
| 84 | Architecture Photography FAQ | Architecture | supporting | FAQ | None |
| 85 | Family Photography Packages Explained | Outdoor | supporting | Commercial investigation | None |
| 86 | How Long Does a Real Estate Photoshoot Take? | Real Estate | supporting | FAQ / Planning | None |
| 87 | Wedding Photography FAQ | Wedding | supporting | FAQ | None |
| 88 | What to Wear for Baby Milestone Photos | Baby | supporting | Planning | None |
| 89 | From Bump to Baby: Booking Maternity and Newborn Sessions Together | Maternity | supporting | Commercial investigation | None |
| 90 | Grandparents in Newborn Photos: Capturing Three Generations | Newborn | supporting | Inspirational / Educational | None |

## 13. Internal Linking Map

The linking *mechanism* (service ↔ pillar ↔ supporting ↔ related) is
already implemented — see `docs/INTERNAL_LINKING.md`. What this plan adds
is the *content* that mechanism needs: every planned article's
`primaryService`, `cluster`, `role` (pillar/supporting), and — for
supporting articles — its `pillar` reference are all set correctly in the
JSON, which is exactly the frontmatter a drafting workflow needs to
reproduce (`category`, `cluster`, `isPillar`, `primaryService`,
`relatedSlugs`) when it actually writes the `.md` file.

Each article's JSON record also carries concrete, non-generic
**outgoingLinks** (target URL + a natural anchor phrase — never "click
here"), **incomingLinkOpportunities** (which other planned/existing
articles should link back to it, each with a *different* anchor phrase —
anchors are rotated across templates specifically so the same exact-match
phrase is never reused wholesale across a cluster), and **relatedArticles**
(topically related planned articles, not just "recent posts"). Day 1's
full record above shows the shape of this in practice.

## 14. Future Claude Work Handoff

This plan is designed to be read, not executed, by automation. The
documented daily workflow:

1. **Read today's planned item** from `docs/SEO_90_DAY_CONTENT_PLAN.json`
   (`days[n]`, matched by the next unpublished `day` in sequence — the
   plan itself has no calendar dates baked in).
2. **Re-check for cannibalization** against the site's *current* state at
   publish time (not just this plan's snapshot) — run
   `node scripts/suggest-internal-links.mjs <planned-slug>` once a draft
   file exists, and manually re-scan `/guides/` and recently published
   posts, since new articles may have shifted the landscape since this
   plan was written.
3. **Review existing published articles** in the same cluster (via
   `app/lib/blog.ts`'s `getPostsByCategory`/`getClusterPosts`, or just
   reading `content/blog/`) so the new article doesn't repeat what a
   sibling already covers.
4. **Prepare article research** using the plan's `userQuestion`,
   `contentAngle`, and `suggestedH2s` as the brief — these are starting
   points, not a rigid template to fill in mechanically.
5. **Write the article**, respecting `wordCountGuidance` as a range, not
   a quota, and fulfilling the `eeatNote` where `eeatOriginalExperience`
   is true.
6. **Insert relevant contextual internal links** using `outgoingLinks` as
   candidates — place 2–5 that genuinely fit the prose, using natural
   anchor variations (never force all of them in if the article doesn't
   call for it).
7. **Add metadata/frontmatter**: `category` = `primaryService`,
   `cluster`, `isPillar` (true only for pillar days), `primaryService`
   (only if it should override the category default), `tags`,
   `relatedSlugs` (seed from `relatedArticles`), `focusKeyword` =
   `primaryKeyword`, plus `seoTitleSuggestion`/`metaDescriptionAngle` as
   a starting point for final copy.
8. **Validate links**: `npm run validate:links` (also runs automatically
   via `prebuild` before `npm run build`) — must pass with zero errors
   before the article is considered ready.
9. **Validate draft/published state**: the new file should be
   `status: "draft"` until the publishing workflow explicitly authorizes
   it live; confirm it does NOT appear in `getPublishedPosts()` output
   (i.e. a dev build) while still a draft.
10. **Build/test**: `npx tsc --noEmit`, `npm run lint`, `npm run build`.
11. **Publish only after the future publishing workflow authorizes it** —
    flip `status` to `"published"` and set a real `publishedAt` only at
    that point. This plan does not authorize publishing anything itself.
12. **Mark that planned item as completed** — update its `status` field
    in a local tracking copy of the JSON (not this checked-in strategy
    file) to `"published"` with the actual slug/date, so the next day's
    run knows where it left off. (This plan intentionally does not
    prescribe *where* that tracking state lives — that's an
    implementation detail for the automation task that doesn't exist
    yet, not this one.)
13. **Reciprocal discovery**: once published, run
    `node scripts/suggest-internal-links.mjs --reciprocal <new-slug>` and
    apply any genuinely fitting incoming links to older articles — this
    is exactly what `incomingLinkOpportunities` in this plan anticipates.

No part of this workflow is implemented by this task. This section is
documentation of the intended handoff only.

## 15. Files Created / Changed

- `docs/SEO_90_DAY_CONTENT_PLAN.md` — this file.
- `docs/SEO_90_DAY_CONTENT_PLAN.json` — the machine-readable version of
  the same 90-day plan (`strategyVersion: 1`).

No other files were changed. No article content was written, no
frontmatter `status` fields were modified, and no articles were
published, per the task's explicit scope.

## 16. Phase 2.5 Cleanup Log

A fast follow-up pass resolved the two conflicts this document flagged,
before daily publishing (Phase 3) begins:

- **`content/blog/maternity-photoshoot-outfit-guide.md` deleted.** It
  duplicated `/guides/what-to-wear-maternity-photoshoot/` (same intent,
  same target keyword). The older static guide was kept as canonical —
  it was more complete and already indexed/linked (Footer, sitemap). Its
  two genuinely unique tips ("fitted underneath, flowing on top" and
  "bring a second outfit") were merged into the static guide. A permanent
  301 redirect (`netlify.toml`) now sends
  `/blog/maternity-photoshoot-outfit-guide/` to
  `/guides/what-to-wear-maternity-photoshoot/`. The one internal
  reference to the deleted post (`relatedSlugs` in
  `dubai-wedding-photography-locations.md`) was removed.
- **`content/blog/family-photoshoot-props-ideas.md` deleted.** It was
  explicit pipeline-test content ("Draft — Not Yet Published" in its own
  title) with zero reader value and was never linked from anywhere.
- **`docs/INTERNAL_LINKING.md`** link map updated to drop both removed
  posts and add the static guide as the canonical maternity-outfit URL.
- No changes were made to `docs/SEO_90_DAY_CONTENT_PLAN.json`'s 90
  planned slots — none of them conflicted with a retained `/guides/`
  page. Only the audit narrative in this file and one stale
  `cannibalizationNotes` string (Day 13) were updated to stop referencing
  the now-deleted post.
