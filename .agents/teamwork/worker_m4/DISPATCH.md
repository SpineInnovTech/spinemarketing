# DISPATCH: Worker M4 (Cross-Domain Routing & Solution Entry Alignment)

You are Worker M4.
Working directory: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m4
Authoritative User Request: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/ORIGINAL_REQUEST.md
Master Project Plan: /Users/nirmal/Github/spinemarketing-magic-ui/PROJECT.md
Survey Input Report: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/explorer_survey_1/handoff.md

## Write Ownership (Exclusively Owned Files)
You exclusively own and may edit or create these files:
- `/Users/nirmal/Github/spinemarketing-magic-ui/lib/workspace-entry.ts`
- `/Users/nirmal/Github/spinemarketing-magic-ui/lib/navigation.ts`
- `/Users/nirmal/Github/spinemarketing-magic-ui/components/final-cta.tsx`
- `/Users/nirmal/Github/spinemarketing-magic-ui/components/header.tsx`
- `/Users/nirmal/Github/spinemarketing-magic-ui/components/marketing/workspace-auth-actions.tsx`
- `/Users/nirmal/Github/spinemarketing-magic-ui/components/marketing/workspace-projection-cta.tsx`
- `/Users/nirmal/Github/spinemarketing-magic-ui/app/pricing/page.tsx`
DO NOT write to any other files.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Tasks & Acceptance Criteria
1. `lib/workspace-entry.ts`:
   - Import `AUTH_ORIGIN` and `SPINE_WORKSPACE_APP` from `./site-urls`.
   - In `solutionLensSlugs`, add `memoryandknowledge: "knowledge-records"` (and alias `"memoryandknowledge"`), and ensure other missing solutions (`saas`, `services`, `professional-services`, `manufacturing`, `retail`) have explicit mappings so `productSiteUrl` never leaks or falls back to an unmapped slug.
   - Update `workspaceEntryLinks(pathname)`:
     * `signup` URL must target `AUTH_ORIGIN` (`https://auth.spineworkspace.com/signup`) with `next` and `entry_domain` query parameters.
     * `login` URL must target `AUTH_ORIGIN` (`https://auth.spineworkspace.com/login`) with `next` and `entry_domain` query parameters.
     * Export `appEntryUrl(pathname)` pointing to `SPINE_WORKSPACE_APP` (`https://app.spineworkspace.com`).
2. `lib/navigation.ts`:
   - Header navigation `featured` SpineWorkspace item (line 31): set `href: "https://spineworkspace.com"`, `external: true`.
   - Footer columns SpineWorkspace link (line 76): set `href: "https://spineworkspace.com"`, `external: true`.
3. `components/final-cta.tsx`:
   - Standardize `Explore SpineWorkspace` link (line 27) to point directly to `https://spineworkspace.com`.
4. `components/header.tsx`:
   - Verify all auth buttons and SpineWorkspace links resolve to `https://auth.spineworkspace.com` (for login/signup) and `https://spineworkspace.com` (for product marketing).
5. `app/pricing/page.tsx`:
   - Ensure `app/pricing/page.tsx` retains a clear link to `/product` (e.g. "Review full architectural capabilities on the [product details page](/product)") so that `scripts/audit-corporate-site.mjs` line 97 check passes cleanly.

## Output
Run verification checks on the modified files and write your handoff report to `/Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m4/handoff.md`. Send a completion message when done.


## 2026-10-21T15:11:11Z
You are Worker M4. Read your dispatch instructions at /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m4/DISPATCH.md, PROJECT.md, and ORIGINAL_REQUEST.md.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
Implement Milestone 4 (Cross-Site Routing & Solution Entry Alignment):
- lib/workspace-entry.ts: map memoryandknowledge -> knowledge-records in solutionLensSlugs, add missing domains, use AUTH_ORIGIN for signup/login, add appEntryUrl targeting SPINE_WORKSPACE_APP.
- lib/navigation.ts: set featured SpineWorkspace and footer SpineWorkspace to https://spineworkspace.com (external).
- components/final-cta.tsx: set Explore SpineWorkspace link to https://spineworkspace.com.
- components/header.tsx: ensure auth and product marketing destinations are aligned.
- app/pricing/page.tsx: ensure explicit link to /product is retained so scripts/audit-corporate-site.mjs line 97 passes.
Verify your changes and write your handoff report to /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m4/handoff.md.
Send a completion message when done.
