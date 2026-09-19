#!/usr/bin/env node
// npm run seo:approve -- --day 1
// npm run seo:approve -- --slug <slug>
//
// Records approval as its own explicit step — preparing and publishing an
// article are never allowed to be the same operation. Approval does not
// touch the content file at all.
import { parseArgs } from "../lib/args.mjs";
import { loadPlan, savePlan, findDay, findSlug } from "../lib/repo.mjs";

const args = parseArgs();
if (!args.day && !args.slug) {
  console.error("Usage: npm run seo:approve -- --day <N>   OR   npm run seo:approve -- --slug <slug>");
  process.exit(1);
}

const plan = loadPlan();
const day = args.day ? findDay(plan, args.day) : findSlug(plan, args.slug);
if (!day) {
  console.error("No matching plan item found.");
  process.exit(1);
}

const status = day.status || "planned";

if (status === "approved" || status === "published") {
  console.log(`Day ${day.day} is already "${status}" — nothing to do.`);
  process.exit(0);
}

if (status !== "draft") {
  console.error(`Day ${day.day} is in status "${status}", not "draft" — run "npm run seo:prepare" first.`);
  process.exit(1);
}

day.status = "approved";
day.approvedAt = new Date().toISOString();
savePlan(plan);

console.log(`Day ${day.day} ("${day.title}") approved.`);
console.log(`Publish with:  npm run seo:publish -- --day ${day.day}`);
