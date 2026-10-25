/**
 * Prod deploy guard — refuses a production deploy unless three conditions hold:
 *
 *   1. the working tree is clean  (git status --porcelain is empty)
 *   2. HEAD equals origin/main    (after `git fetch origin main`)
 *   3. CONFIRM_PROD_DEPLOY=spineinnovtech.com is set (the explicit human OK)
 *
 * It is run FIRST in `npm run deploy:cloudflare`, and `npm run deploy:prod`
 * routes through the same guarded path instead of a bare `wrangler deploy`.
 *
 * Modes:
 *   node scripts/prod-deploy-guard.mjs              # guard, then `wrangler deploy --env prod`
 *   node scripts/prod-deploy-guard.mjs --check-only # guard only, NEVER calls wrangler (CI-safe)
 */
import { execFileSync } from "node:child_process";

const CHECK_ONLY = process.argv.includes("--check-only");
const CONFIRM_EXPECTED = "spineinnovtech.com";

function git(args) {
  return execFileSync("git", args, { encoding: "utf8" }).trim();
}

const problems = [];

// 1) Clean tree.
let porcelain = "";
try {
  porcelain = git(["status", "--porcelain"]);
} catch (e) {
  problems.push(`could not read git status: ${e.message}`);
}
if (porcelain) {
  problems.push(
    `working tree is NOT clean — commit or discard before a prod deploy:\n    ` +
      porcelain.split("\n").join("\n    "),
  );
}

// 2) HEAD == origin/main (fetch first).
try {
  git(["fetch", "origin", "main"]);
} catch (e) {
  problems.push(`git fetch origin main failed: ${e.message}`);
}
let head = "", originMain = "";
try {
  head = git(["rev-parse", "HEAD"]);
  originMain = git(["rev-parse", "origin/main"]);
} catch (e) {
  problems.push(`could not resolve HEAD / origin/main: ${e.message}`);
}
if (head && originMain && head !== originMain) {
  problems.push(
    `HEAD is not origin/main — prod deploys only from the released main commit.\n` +
      `    HEAD:        ${head}\n` +
      `    origin/main: ${originMain}`,
  );
}

// 3) Explicit human OK.
const confirm = process.env.CONFIRM_PROD_DEPLOY ?? "";
if (confirm !== CONFIRM_EXPECTED) {
  problems.push(
    `CONFIRM_PROD_DEPLOY must equal "${CONFIRM_EXPECTED}" (the explicit human OK). ` +
      (confirm ? `Got "${confirm}".` : "It is unset."),
  );
}

if (problems.length) {
  console.error(
    `✗ prod deploy guard REFUSED (${problems.length}):\n  - ` +
      problems.join("\n  - "),
  );
  process.exit(1);
}

console.log(
  `✓ prod deploy guard passed: clean tree, HEAD == origin/main (${head.slice(0, 12)}), CONFIRM_PROD_DEPLOY set.`,
);

if (CHECK_ONLY) {
  console.log("--check-only: not invoking wrangler.");
  process.exit(0);
}

// Guarded deploy.
console.log("Deploying to Cloudflare (prod)…");
execFileSync("npx", ["wrangler", "deploy", "--env", "prod"], { stdio: "inherit" });
