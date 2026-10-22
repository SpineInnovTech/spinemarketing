# DISPATCH: Remediation Worker (Gate 1 Fixes)

You are the Remediation Worker.
Working directory: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_remediation
Authoritative User Request: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/ORIGINAL_REQUEST.md
Master Project Plan: /Users/nirmal/Github/spinemarketing-magic-ui/PROJECT.md
Gate Feedback:
- Challenger 1 handoff: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/challenger_1/handoff.md
- Challenger 2 handoff: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/challenger_2/handoff.md

## Scope & Tasks
1. Fix Protocol-Relative Open Redirect Vulnerability in `spinemarketing-magic-ui`:
   - In `worker/index.ts` line 47 (`maybeCanonicalRedirect`):
     Sanitize path before creating `new URL(...)`:
     ```ts
     const safePath = "/" + url.pathname.replace(/^[\/\\]+/, "");
     const target = new URL(safePath + url.search, canonicalBase);
     ```
   - In `lib/workspace-entry.ts` line 78 (`appEntryUrl`):
     Sanitize pathname similarly:
     ```ts
     const safePath = "/" + pathname.replace(/^[\/\\]+/, "");
     return new URL(safePath, SPINE_WORKSPACE_APP).toString();
     ```
2. Fix Solution Slug Alignment in `spineworkspace-live/apps/marketing`:
   - In `/Users/nirmal/Github/spineworkspace-live/apps/marketing/components/workbench/workbench-view-explorer.tsx` (and `components/marketing/workbench/workbench-view-explorer.tsx` if present):
     Update `DOMAIN_TO_SOLUTION_PATH` so that all domain keys map to valid canonical product solution slugs matching `SOLUTION_DOCS` in `apps/marketing`:
     * `customer-success` -> `"/solutions/account-success"`
     * `customer-support` -> `"/solutions/support"`
     * `product-engineering` -> `"/solutions/productengineering"`
     * `human-resources` -> `"/solutions/humanresources"`
     * `memoryandknowledge` -> `"/solutions/knowledge-records"`
     * `operations` -> `"/solutions/ops"`
     * `revops` -> `"/solutions/businessops"`
     * `founders` -> `"/solutions/founderops"`
     * `finance-leaders` -> `"/solutions/finance"`
     * `sales` -> `"/solutions/sales"`
     * `marketing` -> `"/solutions/marketing"`
     * `content` -> `"/solutions/content"`
     * `finance` -> `"/solutions/finance"`
     * `legal` -> `"/solutions/legal"`
     * `individual` -> `"/solutions/personal"`
     * `saas` -> `"/solutions/saas"`
     * `services` -> `"/solutions/service"`
     * `professional-services` -> `"/solutions/professional-services"`
     * `manufacturing` -> `"/solutions/manufacturing"`
     * `retail` -> `"/solutions/retail"`
3. Verify both repositories:
   - In `spinemarketing-magic-ui`: run `npm run check`, `npm run build:cloudflare`, and `node scripts/test-e2e.mjs`.
   - In `spineworkspace-live/apps/marketing`: run `./node_modules/.bin/tsc --noEmit`, `./node_modules/.bin/vitest run`, and `./node_modules/.bin/next build --webpack`.
   - Test adversarial path `//attacker.com` against `worker/index.ts` and verify it produces `https://spineinnovtech.com/attacker.com` (no open redirect!).
4. Write handoff report to:
   `/Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_remediation/handoff.md`.
## 2026-10-21T16:00:18Z
You are the Remediation Worker. Read your dispatch instructions at /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_remediation/DISPATCH.md, PROJECT.md, and ORIGINAL_REQUEST.md.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
Implement the two critical gate fixes:
1. Prevent protocol-relative open redirect in worker/index.ts (maybeCanonicalRedirect) and lib/workspace-entry.ts (appEntryUrl).
2. Fix DOMAIN_TO_SOLUTION_PATH in spineworkspace-live/apps/marketing/components/workbench/workbench-view-explorer.tsx to map to canonical SOLUTION_DOCS slugs.
Run verification commands across both repositories (npm run check, npm run build:cloudflare, test-e2e.mjs, target tsc/vitest/next build).
Write your handoff report to /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_remediation/handoff.md.
Send a completion message when done.
