#!/usr/bin/env node
// npm run seo:next — prints the next eligible planned article (first item
// still in status "planned", in day order). Does not modify anything.
import { loadPlan, findNextPlanned } from "../lib/repo.mjs";

const plan = loadPlan();
const next = findNextPlanned(plan);

if (!next) {
  console.log("No planned items remain (all are drafting/draft/approved/published/skipped).");
  console.log('Run "npm run seo:status" to see the full breakdown.');
  process.exit(0);
}

console.log(`Next planned article: Day ${next.day} — "${next.title}"`);
console.log(`  slug:            ${next.slug}`);
console.log(`  primary service: ${next.primaryService || "—"}`);
console.log(`  cluster:         ${next.cluster} (${next.role})`);
console.log("");
console.log(`Prepare it with:  npm run seo:prepare -- --day ${next.day}`);
