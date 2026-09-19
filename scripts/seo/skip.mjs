#!/usr/bin/env node
// npm run seo:skip -- --day 76 --reason "retargeted, overlapped with existing guide"
//
// Marks a planned item as skipped without deleting it from the plan or
// touching any other day — use when a topic turns out to need retargeting
// or should be dropped after a fresh cannibalization check.
import { parseArgs } from "../lib/args.mjs";
import { loadPlan, savePlan, findDay, findSlug } from "../lib/repo.mjs";

const args = parseArgs();
if (!args.day && !args.slug) {
  console.error('Usage: npm run seo:skip -- --day <N> --reason "..."');
  process.exit(1);
}
if (!args.reason) {
  console.error("A --reason is required so the plan stays auditable.");
  process.exit(1);
}

const plan = loadPlan();
const day = args.day ? findDay(plan, args.day) : findSlug(plan, args.slug);
if (!day) {
  console.error("No matching plan item found.");
  process.exit(1);
}

if (day.status === "published") {
  console.error(`Day ${day.day} is already published — cannot skip.`);
  process.exit(1);
}

day.status = "skipped";
day.skipReason = args.reason;
day.skippedAt = new Date().toISOString();
savePlan(plan);

console.log(`Day ${day.day} ("${day.title}") marked skipped: ${args.reason}`);
