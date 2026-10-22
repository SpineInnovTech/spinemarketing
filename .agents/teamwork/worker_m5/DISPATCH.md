# DISPATCH: Worker M5 (Verification & Quality Assurance Alignment)

You are Worker M5.
Working directory: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m5
Authoritative User Request: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/ORIGINAL_REQUEST.md
Master Project Plan: /Users/nirmal/Github/spinemarketing-magic-ui/PROJECT.md
E2E Test Suite Path: /Users/nirmal/Github/spinemarketing-magic-ui/scripts/test-e2e.mjs

## Write Ownership (Exclusively Owned Files)
You exclusively own and may edit or create these files:
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/check-cloudflare-config.mjs`
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/check-release-preflight.mjs`
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/verify-auth-entry.mjs`
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/verify-static-artifact.mjs`
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/verify-corporate-coverage.mjs`
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/verify-live-site.mjs`
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/verify-workbench-artifact.mjs`
- `/Users/nirmal/Github/spinemarketing-magic-ui/scripts/audit-corporate-site.mjs`

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Tasks & Acceptance Criteria
1. Synchronize QA Scripts for Domain Cutover & Cross-Domain Targets (Feature 20):
   - `scripts/check-cloudflare-config.mjs`:
     * Assert `wrangler.env?.prod?.routes` includes `spineinnovtech.com` and `www.spineinnovtech.com` (`custom_domain === true`).
     * Assert `CANONICAL_SITE_URL === "https://spineinnovtech.com"`.
     * Assert `LEGACY_REDIRECT_HOSTS` includes `spineinnovtech.spineworkspace.com`.
   - `scripts/check-release-preflight.mjs`:
     * Assert `wrangler.env?.prod?.routes` includes `spineinnovtech.com`.
   - `scripts/verify-auth-entry.mjs`:
     * Assert auth URLs target `https://auth.spineworkspace.com` (allow or verify `app.spineworkspace.com` for application links).
   - `scripts/verify-static-artifact.mjs`:
     * Assert sitemap and llms.txt reference `https://spineinnovtech.com`.
   - `scripts/verify-corporate-coverage.mjs` & `scripts/verify-live-site.mjs`:
     * Update `origin` constant to `https://spineinnovtech.com`.
   - `scripts/verify-workbench-artifact.mjs`:
     * Ensure assertions match the new diagrammatic architecture storyboard.
2. Run Full Corporate Site Verification (Feature 21):
   - Run `npm run check` (runs lint, audit:site, check:cloudflare, typecheck) -> MUST PASS 100% with exit code 0.
   - Run `npm run build:cloudflare` (runs build, verify:artifact, verify:coverage, verify:workbench) -> MUST PASS 100% with exit code 0.
3. Run Full Target Product Site Verification (Feature 22):
   - In `/Users/nirmal/Github/spineworkspace-live/apps/marketing`:
     * Run `./node_modules/.bin/tsc --noEmit` -> MUST PASS with exit code 0.
     * Run `./node_modules/.bin/vitest run` -> MUST PASS with exit code 0.
     * Run `./node_modules/.bin/next build --webpack` -> MUST PASS with exit code 0.
4. Run E2E Test Suite (Feature 23):
   - Run `node scripts/test-e2e.mjs` -> ALL 146 TESTS MUST PASS with exit code 0.

## Output
Document all commands executed, test outputs, exit codes, and verification artifacts in your handoff report at `/Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m5/handoff.md`. Send a completion message when done.


## 2026-10-21T15:24:41Z
You are Worker M5. Read your dispatch instructions at /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m5/DISPATCH.md, PROJECT.md, and ORIGINAL_REQUEST.md.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
Implement Milestone 5 (Verification & Quality Assurance Alignment):
1. Synchronize QA scripts (check-cloudflare-config, check-release-preflight, verify-auth-entry, verify-static-artifact, verify-corporate-coverage, verify-live-site, audit-corporate-site, verify-workbench-artifact) for spineinnovtech.com and auth.spineworkspace.com.
2. Run npm run check and npm run build:cloudflare in spinemarketing-magic-ui.
3. Run tsc --noEmit, vitest, and next build in spineworkspace-live/apps/marketing.
4. Run node scripts/test-e2e.mjs — ensure all 146 tests pass.
Document all commands and verification results in /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m5/handoff.md.
Send a completion message when done.
