# DISPATCH: Worker M1 (Domain Cutover & Cloudflare Worker)

You are Worker M1.
Working directory: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m1
Authoritative User Request: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/ORIGINAL_REQUEST.md
Master Project Plan: /Users/nirmal/Github/spinemarketing-magic-ui/PROJECT.md
Survey Input Report: /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/explorer_survey_1/handoff.md

## Write Ownership (Exclusively Owned Files)
You exclusively own and may edit or create these files:
- `/Users/nirmal/Github/spinemarketing-magic-ui/wrangler.jsonc`
- `/Users/nirmal/Github/spinemarketing-magic-ui/config.yaml`
- `/Users/nirmal/Github/spinemarketing-magic-ui/config/cloudflare-builds.json`
- `/Users/nirmal/Github/spinemarketing-magic-ui/worker/index.ts`
- `/Users/nirmal/Github/spinemarketing-magic-ui/lib/site-url.ts`
- `/Users/nirmal/Github/spinemarketing-magic-ui/docs/CLOUDFLARE_DNS_SETUP.md`
DO NOT write to any other files.

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Tasks & Acceptance Criteria
1. `wrangler.jsonc`:
   - Under `env.prod.routes`, add `spineinnovtech.com` (`custom_domain: true`) and `www.spineinnovtech.com` (`custom_domain: true`), retaining legacy routes `spineinnovlabs.spineworkspace.com` and `spineinnovtech.spineworkspace.com`.
   - Under `env.prod.vars`, update `CANONICAL_SITE_URL` to `"https://spineinnovtech.com"`, and `LEGACY_REDIRECT_HOSTS` to include `spineinnovtech.spineworkspace.com,spineinnovlabs.spineworkspace.com,spineinnovlabs.com,www.spineinnovlabs.com,www.spineinnovtech.com`.
2. `config.yaml` & `config/cloudflare-builds.json`:
   - Set `prod.spine_innovlabs.public_url` and `canonical_url` to `https://spineinnovtech.com`.
   - Update `legacy_redirect_hosts` to include all legacy domains.
   - Set `build.prod_site_url` to `https://spineinnovtech.com`.
   - Set `NEXT_PUBLIC_SITE_URL` in `cloudflare-builds.json` to `https://spineinnovtech.com`.
3. `worker/index.ts`:
   - Ensure `maybeCanonicalRedirect` performs HTTP 301 redirects to `CANONICAL_SITE_URL` preserving `pathname` and `search` query parameters.
   - Update `maybeProductEntryRedirect` to send `/login` and `/signup` to `https://auth.spineworkspace.com` (302) and `/workspace` to `https://app.spineworkspace.com` (302).
4. `lib/site-url.ts`:
   - Update `DEFAULT_PRODUCTION_ORIGIN` to `"https://spineinnovtech.com"`.
5. `docs/CLOUDFLARE_DNS_SETUP.md`:
   - Document exact DNS records (CNAME / apex flattening / ALIAS) required in Cloudflare dashboard for `spineinnovtech.com` and `www.spineinnovtech.com`, SSL/TLS mode Full (Strict), Universal SSL, and Always Use HTTPS.

## Output
Run verification checks (e.g. static checks or node script checks on your modified files) and write your handoff report to `/Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m1/handoff.md`. Send a completion message when done.


## 2026-10-21T15:01:01Z
[Message] timestamp=2026-10-21T15:01:01Z sender=1e02cfeb-c443-486c-80e9-e7607795e889 priority=MESSAGE_PRIORITY_HIGH content=You are Worker M1. Read your dispatch instructions at /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m1/DISPATCH.md, PROJECT.md, and ORIGINAL_REQUEST.md.
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
Implement Milestone 1 (Domain Cutover & Cloudflare Worker):
- wrangler.jsonc (env.prod.routes & vars for spineinnovtech.com and www.spineinnovtech.com)
- config.yaml & config/cloudflare-builds.json
- worker/index.ts (canonical 301 redirects & auth/app 302 redirects)
- lib/site-url.ts
- docs/CLOUDFLARE_DNS_SETUP.md (full Cloudflare DNS specification)
Verify your changes and write your handoff report to /Users/nirmal/Github/spinemarketing-magic-ui/.agents/teamwork/worker_m1/handoff.md.
Send a completion message when done.
