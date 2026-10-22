# Marketing authentication entry

The approved change adds real app Sign up / Sign in actions in the shared header and on Product, Solutions, and all twenty solution pages. Public product details, company content, and domain-specific features remain accessible.

The handoff uses `app.spineworkspace.com/signup` and `/login`, carrying an explicit app-local `next`. Fourteen distinct registered domain projections are requested; the five industry pages without their own projection enter My Work. Founder Operations enters `company-overview`; its manifest does not have a dashboard. Entry hints do not grant access: the app's Descope/One Access and Gateway remain authoritative.

Reference: `SpineInnovTech/spineworkspace-live@f5dffed1bc2607a6b282856cbf59e6f007020af5`, login/signup pages, catchall Work route, workbench-config domain estate, and complete projection manifests.

Validation:

- `bash /workspace/.onboarding/build-marketing.sh`: full Cloudflare build and required lint, corporate audit, configuration, TypeScript, and export checks passed.
- `npm run verify:artifact`: all 80 pre-recovery HTML routes retained; twenty solutions retain eighty distinct feature descriptions, source lists, and workflows; 88 contextual links checked.
- Browser checks: Product, solution hub, and twenty solution pages at 390, 1024, 1280, and 1440px (88 route/viewports) passed header/body link consistency, visible actions, mobile menu Escape behavior, no overflow, and no rendering errors. The Founder Operations destination correction is also checked by the rebuilt artifact and a focused browser rerun.
- Reviewer validated fourteen unique projection manifests; the invalid Founder Operations dashboard path was corrected before publication. A regression check reproduced that wrong destination before the corrected rebuild passed.
- Public app protected workspace requests without a session redirect to `/login` with `next` retained; the host-discovery API returns 401 without a session.

Scope and limits:

The app's existing signup-to-login cross-link can lose `next`. Its production onboarding-cookie gate can delay direct workspace entry. These are recorded in the proposed app/Pages design; this marketing change does not fix apps/web or prove a successful authenticated session, federated provider availability, ingestion/readback, or a Pages migration.

Publication follows the marketing repository's native Cloudflare preview and main build. Live checks compare deployed contextual links against the tested artifact and request the actual app authentication URLs. Record deployment commit and results separately; a preview, merge, or HTTP 200 alone does not establish the full authenticated journey.

Continuity: complete the written design review in `docs/superpowers/specs/2026-10-10-workspace-entry-pages-design.md` before the architectural implementation. The next slice preserves return context through Descope, verifies membership/direct entry, and exercises one real connected source before extending providers and domain journeys.
