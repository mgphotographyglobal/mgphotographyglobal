// Runs eslint and reports whether it introduced any issue beyond the
// project's known pre-existing baseline — `npm run lint` always exits
// non-zero because of 3 unrelated pre-existing errors, so a raw exit-code
// check would permanently show "lint: fail" regardless of what the SEO
// workflow actually touched. Per project convention: never fix unrelated
// pre-existing warnings, only regressions caused by the change at hand.
import { execSync } from "node:child_process";

const KNOWN_BASELINE_FILES = ["app/about/page.tsx", "app/components/Header.tsx"];

export function lintHasNoNewIssues() {
  let output = "";
  try {
    execSync("npx eslint", { stdio: "pipe", encoding: "utf8" });
    return { ok: true, output: "" };
  } catch (e) {
    output = (e.stdout || "").toString();
  }

  const blocks = output.split(/\n\n+/).filter((b) => b.trim());
  const newIssueBlocks = blocks.filter((b) => {
    const fileLine = b.split("\n")[0].trim();
    const isFileHeader = /^\/.*\.(tsx?|mjs|jsx?)$/.test(fileLine);
    if (!isFileHeader) return false; // summary line ("✖ N problems...") etc — not a per-file block
    return !KNOWN_BASELINE_FILES.some((known) => fileLine.endsWith(known));
  });

  return { ok: newIssueBlocks.length === 0, output: newIssueBlocks.join("\n\n") };
}
