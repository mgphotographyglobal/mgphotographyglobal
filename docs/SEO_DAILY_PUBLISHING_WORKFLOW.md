# SEO Daily Publishing Workflow (Phase 3)

Turns one item from `docs/SEO_90_DAY_CONTENT_PLAN.json` (the single
source of truth for the publishing plan — no second plan exists) into one
production-ready blog article, one at a time:

```
PLAN → GENERATE → VALIDATE → DRAFT → REVIEW → APPROVE → PUBLISH
```

**Version 1 does not auto-publish anything.** Preparing a draft and
publishing it are always two separate, explicit commands. The first
7–10 articles published through this workflow **must** be manually
reviewed and approved — do not skip the review report.

## Commands

### See what's next

```sh
npm run seo:next
```

Prints the next planned item (first `status: "planned"` day, in day
order) and the exact command to prepare it. Read-only.

```sh
npm run seo:status
```

Prints a progress overview across all 90 days (counts by status, what's
currently in progress, what's published). Read-only.

### Prepare an article (creates a DRAFT only)

```sh
npm run seo:prepare -- --day 1
npm run seo:prepare -- --slug newborn-photography-safety-how-we-keep-babies-safe
```

Runs the pre-generation safety checks, then — only if they pass — writes
`content/blog/<slug>.md` with `status: "draft"`, runs the internal-link
validator / typecheck / lint / build, and writes a review report to
`docs/seo-reports/day-<N>-<slug>.md`.

**Idempotent:** running this again for an item that's already
drafted/approved/published does nothing except tell you its current
state — it never overwrites or duplicates a draft.

**Stops (exit 1, nothing written) if:**
- a file already exists at that slug (inconsistent state — check `seo:status` first)
- the plan flags this item as **High** cannibalization risk
- the plan flags it as **Medium** risk and you haven't passed `--acknowledge-risk` (read the note in the plan first)
- it's a supporting article whose pillar isn't published yet
- (live re-check, not just the plan snapshot) it now matches an existing published post or static `/guides/` page too closely

The generated article body is a **structured scaffold** — correct H2s,
verified internal links, and explicit
`[MG EDITORIAL INPUT REQUIRED: ...]` placeholders wherever the plan marks
real MG Photography experience as required. It is not finished prose.
**Review and rewrite it** (by hand, or by asking Claude directly in this
repo) before approving.

### Review

Open the two files the prepare step points you to:
- `content/blog/<slug>.md` — the draft itself
- `docs/seo-reports/day-<N>-<slug>.md` — the review report (SEO fields,
  links added, links skipped, incoming-link recommendations, image
  status, editorial-input locations, cannibalization result, validation
  results, and a final **READY FOR HUMAN REVIEW** / **BLOCKED** verdict)

Fix anything the report flags: fill every editorial placeholder, confirm
(or replace) the featured image, polish the prose.

### Approve

```sh
npm run seo:approve -- --day 1
```

Records approval (`status: "approved"`, `approvedAt` timestamp). Does
**not** touch the content file. Requires the item to currently be in
`status: "draft"`. Idempotent — approving an already-approved item is a
no-op, not an error.

### Publish

```sh
npm run seo:publish -- --day 1
```

**Hard-gated on `status: "approved"`** — there is no path from draft
straight to published, and no flag that skips this. On run it:

1. Re-runs cannibalization + pillar-dependency checks fresh (a conflict
   can appear between approval and publish if other things changed).
2. Refuses if any `[MG EDITORIAL INPUT REQUIRED: ...]` placeholder is
   still in the body, or the featured image is still a placeholder path.
3. Confirms every internal link in the draft body resolves to a real,
   live page right now.
4. Flips frontmatter `status` to `"published"` and sets `publishedAt` to
   today.
5. Re-runs the link validator, typecheck, lint, and a full production
   build.
6. Confirms the article's route (`out/blog/<slug>/index.html`) and
   sitemap entry actually exist in that fresh build.
7. Updates the plan item to `status: "published"`.
8. Prints (but does **not** run) the `git add` / `commit` / `push`
   commands — committing stays part of the repository's normal git
   workflow, run by a human or the calling agent, never automatically.

**If any check after step 4 fails, the file is reverted back to
`status: "draft"` automatically** — publish never leaves a half-published
or corrupted file, and the plan is never marked published unless the
whole thing succeeded.

### Skip / retarget an article

```sh
npm run seo:skip -- --day 76 --reason "retargeted — too close to /guides/dubai-wedding-photography-guide/"
```

Marks a planned item `status: "skipped"` with a required `--reason` (so
the plan stays auditable) without deleting it or touching any other day.
Use this when a fresh cannibalization check at prepare-time finds a real
conflict that needs a different angle — write the retargeted version as
a manual edit to `docs/SEO_90_DAY_CONTENT_PLAN.json`'s `days[]` array
afterward if needed (this command only records the skip, it doesn't
rewrite plan content).

### Recover from a failed/interrupted run

- **`prepare` failed before writing the file** (a pre-generation check
  stopped it): nothing was written, the plan is untouched. Just fix the
  underlying issue and re-run.
- **`prepare` failed during validation** (after the file was written):
  the draft file and `status: "draft"` in the plan both exist — this is
  a normal, safe state. Fix whatever the report flagged and either edit
  the draft directly or re-run `seo:prepare` (which will now report "already
  in status draft" — that's expected; keep editing the file by hand).
- **`publish` failed**: the script auto-reverts the file to `status:
  "draft"` and leaves the plan at `"approved"`. Nothing is half-published.
  Fix the blocking issue and run `npm run seo:publish` again.
- **Inconsistent state** (plan says one status, the file says another):
  both `prepare` and `publish` detect this and stop with a message asking
  for manual resolution rather than guessing.

## What's checked, and when

| Check | prepare | publish |
|---|---|---|
| Slug not already in use | ✓ | — (expected to exist) |
| Plan-flagged cannibalization risk (High blocks, Medium needs `--acknowledge-risk`) | ✓ | ✓ (re-checked) |
| Live re-check vs. currently published posts + static `/guides/` pages | ✓ | ✓ (re-checked) |
| Pillar published before its supporting articles | ✓ | ✓ (re-checked) |
| Outgoing links resolve to something real right now | ✓ (unresolvable ones are simply omitted from the draft, not an error) | ✓ (hard block if the draft body itself contains an unresolvable link) |
| No unresolved editorial placeholders | — | ✓ |
| Featured image is not a placeholder | — | ✓ |
| Internal link validator / typecheck / lint (no new issues) / build | ✓ | ✓ |
| Route + sitemap entry present in the built output | — | ✓ |

## Future Claude Work handoff

The daily task, run once per day, is exactly:

1. `npm run seo:next` — read the next planned item.
2. `npm run seo:prepare -- --day <N>` — runs the safety checks and
   generates the scaffold draft + report. If it stops with a reason,
   that's the day's output: investigate, and either fix and retry or
   `npm run seo:skip` with a reason.
3. **Turn the scaffold into a real article** — this is the one step this
   tooling deliberately does NOT automate: write real prose, replace
   every `[MG EDITORIAL INPUT REQUIRED: ...]` placeholder with actual
   MG Photography experience, and confirm the featured image. (In a
   Claude Work session, this is Claude directly editing the draft file
   using its own writing capability — the npm scripts only handle
   selection, safety, structure, and validation.)
4. Re-run `npm run seo:prepare -- --day <N>` if you want fresh validation
   after edits (it will report "already draft" — that's fine, just check
   the draft/report by hand; validation itself can be re-run directly
   with `npm run validate:links`, `npx tsc --noEmit`, `npm run lint`,
   `npm run build`).
5. **Notify for approval** — surface the review report to a human. Do not
   proceed without an explicit approval signal, for at least the first
   7–10 articles published this way.
6. Once approved: `npm run seo:approve -- --day <N>`, then
   `npm run seo:publish -- --day <N>`.
7. Commit and push using the printed commands (per the repo's normal git
   workflow — never force-push, never skip hooks).
8. `node scripts/suggest-internal-links.mjs --reciprocal <new-slug>` and
   apply any genuinely fitting incoming links to older articles by hand.

**This is documentation of the intended handoff only.** No scheduled
automation, and no unattended auto-publishing, is implemented by this
task. A future task may enable auto-approval/auto-publish once quality is
proven over the manual-review period — that is an explicit, separate
decision, not a default this workflow assumes.

## Files

- `scripts/lib/repo.mjs` — shared repo-state reader (routes, posts,
  `/guides/` pages, the plan file itself). Also used by
  `scripts/validate-internal-links.mjs`, refactored to use the same
  source instead of a second copy of the route-walking logic.
- `scripts/lib/args.mjs` — minimal `--flag value` CLI parser.
- `scripts/lib/lint.mjs` — lint check that ignores the project's known
  pre-existing baseline issues and only fails on genuinely new ones.
- `scripts/seo/checks.mjs` — the safety-check functions described above.
- `scripts/seo/generate.mjs` — frontmatter + body scaffold builder.
- `scripts/seo/report.mjs` — review report builder.
- `scripts/seo/{next,status,prepare,approve,publish,skip}.mjs` — the CLI
  commands.
- `docs/seo-reports/` — generated review reports (one per prepared item;
  safe to delete/regenerate, not itself a source of truth).
