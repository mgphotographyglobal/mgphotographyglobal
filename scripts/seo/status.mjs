#!/usr/bin/env node
// npm run seo:status — read-only progress overview across all 90 days.
import { loadPlan } from "../lib/repo.mjs";

const plan = loadPlan();
const counts = {};
for (const d of plan.days) {
  const s = d.status || "planned";
  counts[s] = (counts[s] || 0) + 1;
}

console.log(`SEO 90-day plan — ${plan.days.length} total\n`);
for (const [status, count] of Object.entries(counts)) {
  console.log(`  ${status.padEnd(10)} ${count}`);
}

const active = plan.days.filter((d) => (d.status || "planned") !== "planned" && (d.status || "planned") !== "published");
if (active.length) {
  console.log("\nIn progress:");
  for (const d of active.sort((a, b) => a.day - b.day)) {
    console.log(`  Day ${d.day} — ${d.title} [${d.status}]`);
  }
}

const published = plan.days.filter((d) => d.status === "published").sort((a, b) => a.day - b.day);
if (published.length) {
  console.log("\nPublished:");
  for (const d of published) {
    console.log(`  Day ${d.day} — ${d.title} (${d.publishedAt || "?"})`);
  }
}
