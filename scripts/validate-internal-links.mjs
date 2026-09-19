#!/usr/bin/env node
/**
 * Internal link validator.
 *
 * Scans content/blog/*.md and app/**\/*.tsx for internal links and checks
 * every one against the site's actual routes — derived by walking app/ for
 * page.tsx files and by reading blog post frontmatter, never from a
 * separately hand-maintained list that could drift out of sync. Route
 * discovery lives in scripts/lib/repo.mjs, shared with the SEO publishing
 * workflow scripts (scripts/seo/*.mjs) so both read the same reality.
 *
 * Findings on PUBLISHED posts / real .tsx files are errors (exit 1).
 * Findings on DRAFT/future-dated posts are warnings (non-blocking) so
 * authors get early feedback without the build failing on a post that
 * isn't public yet.
 *
 * Run standalone with `npm run validate:links`, or automatically before
 * every `npm run build` via the "prebuild" script in package.json.
 */
import fs from "node:fs";
import path from "node:path";
import {
  ROOT,
  APP_DIR,
  loadPosts,
  buildValidRouteSet,
  normalizeHref,
  isExternalOrSkippable,
} from "./lib/repo.mjs";

// ─── Extract candidate .tsx files (excluding blog/[slug] etc.) ─────────
function walkTsxFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkTsxFiles(full));
    else if (entry.name.endsWith(".tsx")) files.push(full);
  }
  return files;
}

function extractMarkdownLinks(content) {
  const links = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let m;
  while ((m = re.exec(content))) links.push({ anchor: m[1], href: m[2] });
  return links;
}

function extractJsxHrefs(source) {
  const links = [];
  const re = /href="(\/[^"]*)"/g;
  let m;
  while ((m = re.exec(source))) links.push({ anchor: null, href: m[1] });
  return links;
}

function main() {
  const posts = loadPosts();
  const unpublishedSlugs = new Set(posts.filter((p) => !p.isPublished).map((p) => p.slug));
  const { routes: validRoutes } = buildValidRouteSet();

  const errors = [];
  const warnings = [];

  function checkHref({ source, href, anchor, isDraftContext }) {
    if (isExternalOrSkippable(href)) return;
    const normalized = normalizeHref(href);
    if (!normalized.startsWith("/")) {
      warnings.push(`${source}: malformed internal href "${href}" (not root-relative)`);
      return;
    }
    if (/\/\/(?!$)/.test(normalized.slice(1))) {
      warnings.push(`${source}: malformed internal href "${href}" (double slash)`);
      return;
    }

    const withoutQuery = normalized.split(/[?#]/)[0];
    const hasExtension = /\.[a-zA-Z0-9]+$/.test(withoutQuery);
    if (!hasExtension && !withoutQuery.endsWith("/")) {
      warnings.push(`${source}: internal href "${href}" is missing a trailing slash`);
    }
    const canonicalPath = hasExtension ? withoutQuery : withoutQuery.endsWith("/") ? withoutQuery : `${withoutQuery}/`;

    if (hasExtension) return; // asset link (image etc.) — not a page route

    // Links to a blog slug that exists but is a draft/future post.
    const slugMatch = canonicalPath.match(/^\/blog\/([a-z0-9-]+)\/$/);
    if (slugMatch && unpublishedSlugs.has(slugMatch[1])) {
      (isDraftContext ? warnings : errors).push(
        `${source}: links to unpublished/draft post "/blog/${slugMatch[1]}/" — anchor "${anchor ?? ""}"`
      );
      return;
    }

    if (!validRoutes.has(canonicalPath)) {
      (isDraftContext ? warnings : errors).push(
        `${source}: broken internal link "${href}" — no matching page (anchor: "${anchor ?? ""}")`
      );
    }
  }

  for (const post of posts) {
    const links = extractMarkdownLinks(post.content);
    for (const { anchor, href } of links) {
      checkHref({ source: `content/blog/${post.filename}`, href, anchor, isDraftContext: !post.isPublished });
    }
  }

  for (const file of walkTsxFiles(APP_DIR)) {
    const rel = path.relative(ROOT, file);
    const source = fs.readFileSync(file, "utf8");
    for (const { href } of extractJsxHrefs(source)) {
      checkHref({ source: rel, href, anchor: null, isDraftContext: false });
    }
  }

  if (warnings.length) {
    console.warn(`\n⚠ ${warnings.length} internal link warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }

  if (errors.length) {
    console.error(`\n✖ ${errors.length} internal link error(s):`);
    for (const e of errors) console.error(`  - ${e}`);
    console.error("\nFix these before building/deploying.\n");
    process.exit(1);
  }

  console.log(`✓ Internal link validation passed (${posts.length} posts, ${validRoutes.size} routes checked).`);
}

main();
