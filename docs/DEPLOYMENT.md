# Spine InnovTech — direct Cloudflare Workers Builds deployment

## Hosting ownership

| Concern | Owner |
| --- | --- |
| Corporate marketing Git source | `SpineInnovLabs/spinemarketing` → `main` |
| CI/CD (production) | **Cloudflare Workers Builds**, connected to the above GitHub repository |
| Worker name | `spineinnovlabs-marketing` |
| Cloudflare account | The account ID in `wrangler.jsonc` |
| Live corporate hostname (prod) | `spineinnovtech.com` (apex; `www.spineinnovtech.com` 301s to it) |
| Dev environment | `dev.spineinnovtech.com` → Worker `spineinnovlabs-marketing-dev` |
| Test environment | `test.spineinnovtech.com` → Worker `spineinnovlabs-marketing-test` |
| Legacy corporate hosts (301 → apex) | `spineinnovtech.spineworkspace.com`, `spineinnovlabs.spineworkspace.com`, `www.spineinnovlabs.com`, `spineinnovlabs.com` |
| Product public website | **Separate** `spineworkspace-live/apps/marketing`, `spineworkspace.com` |
| Authenticated workspace | **Separate** `app.spineworkspace.com` — never linked from the corporate site |
| Sign-in / sign-up | **Separate** `auth.spineworkspace.com` — never linked from the corporate site |

**Funnel:** `spineinnovtech.com` → (**Explore SpineWorkspace**) → `spineworkspace.com` → `auth.spineworkspace.com` → `app.spineworkspace.com`. The corporate Worker 302s `/login`, `/signup`, `/onboarding`, `/workspace` and `/request-access` to `https://spineworkspace.com/`.

**CircleCI is retired from this repository.** Cloudflare Workers Builds is the only automated deployment authority for the corporate Worker. Do not re-enable `.circleci/config.yml`, introduce another deployment provider, or point the product apex to this company Worker.

## Cloudflare Workers Builds — one-time dashboard connection

Existing Worker: **Workers & Pages** → `spineinnovlabs-marketing` → **Settings** → **Builds** → **Connect**.

1. Authorize Cloudflare's GitHub App for **SpineInnovLabs/spinemarketing**, if not already authorized.
2. Connect **the existing Worker** `spineinnovlabs-marketing` rather than creating a second production Worker. Git-linked Worker names must match the `name` in the Wrangler configuration.
3. Set production branch to `main`, root directory to `.` (repo root), and **enable production builds**.
4. Set **Build command** to `npm run build:cloudflare`.
5. Set **Deploy command** to `npm run deploy:cloudflare`.
6. Keep non-production preview builds disabled during initial migration. Later, use an isolated non-production Worker/preview command only after review; never bind previews to the production custom domain.
7. Set build variables (public, used during build): `NODE_VERSION=22`, `NEXT_PUBLIC_SITE_URL=https://spineinnovtech.com`, `CONTENT_PROVIDER=sanity`, `SANITY_DATASET=production`.
8. Set build secrets through Cloudflare settings (never commit): `SANITY_PROJECT_ID`; `SANITY_API_READ_TOKEN` if required for the configured dataset. The actual Sanity connection must be verified before accepting blog freshness. Inspect `docs/CONTENT.md` for fallback behavior.
9. Cloudflare Workers Builds manages a deployment token; you **do not need a CircleCI token or personal Wrangler OAuth credentials**. If overriding the token, use appropriately scoped Cloudflare credentials **inside Cloudflare**, not source code.
10. Review `wrangler.jsonc`: production worker is `spineinnovlabs-marketing`, binds `./out`, and owns `spineinnovtech.com`, `www.spineinnovtech.com` plus the legacy hosts (`spineinnovtech.spineworkspace.com`, `spineinnovlabs.spineworkspace.com`). `CANONICAL_REDIRECTS_ENABLED=true` with `CANONICAL_SITE_URL=https://spineinnovtech.com` 301s www and every legacy host to the apex. Dev/test workers serve `dev.spineinnovtech.com` / `test.spineinnovtech.com` and must **not** enable canonical redirects. The `spineinnovtech.com` zone must be active in the same Cloudflare account before the first deploy so custom domains attach.

Configuration reference: [`config/cloudflare-builds.json`](../config/cloudflare-builds.json). **This file documents dashboard settings; it does not automatically connect GitHub or provision Cloudflare account resources.**

### Required run order

```text
GitHub (main)
  → Cloudflare Workers Builds
      → npm install from package-lock.json (Cloudflare managed)
      → npm run build:cloudflare
          → npm run lint
          → npm run audit:site
          → npm run check:cloudflare
          → npm run typecheck
          → npm run build (Next.js static export)
          → npm run verify:artifact
      → npm run deploy:cloudflare
          → npm run verify:artifact
          → wrangler deploy --env prod
          → npm run verify:live (public corporate hero smoke test)
```

If dependency installation is not performed automatically in your selected Workers Builds builder, configure the build command to `npm ci --no-audit --no-fund && npm run build:cloudflare` instead. Do not use `npm install` with an unlocked dependency tree. **Cloudflare's build log, Worker deployment history, and live hostname validation are the release evidence.** A merged PR alone is not.

### Build and deploy manually (without any CI)

With Cloudflare credentials supplied to Wrangler in the local environment:

```bash
npm ci --no-audit --no-fund
export NEXT_PUBLIC_SITE_URL=https://spineinnovtech.com
export CONTENT_PROVIDER=sanity
export SANITY_DATASET=production
# Set SANITY_PROJECT_ID and SANITY_API_READ_TOKEN securely if applicable.
npm run build:cloudflare
npm run deploy:cloudflare
```

`CLOUDFLARE_API_TOKEN` may be supplied to Wrangler locally, or use local `wrangler login`; don't commit any secrets. No CircleCI account or credits are required.

### CMS / Sanity rebuilds

Prefer **Sanity Publish webhook → Cloudflare Workers Builds Deploy Hook**:

1. In Cloudflare Worker → Settings → Builds → **Deploy Hooks**, create a hook for `main`.
2. Store the full secret URL in Sanity's webhook configuration; call it using HTTP POST on relevant publish, update and unpublish events.
3. If keeping the former Sanity → GitHub `repository_dispatch: sanity-publish` workflow, configure **`CLOUDFLARE_WORKERS_DEPLOY_HOOK`** as a GitHub Actions repository secret. `.github/workflows/cms-rebuild.yml` now POSTs that hook instead of triggering CircleCI.
4. A Deploy Hook URL is effectively a password: never expose it in the client bundle, public webhook log, or git.

### DNS and production safety

Do **not** change the `spineworkspace.com` / `www.spineworkspace.com` product host, `auth.spineworkspace.com`, or `app.spineworkspace.com` during corporate migration. Those are separate applications. Fix their ownership via the `spineworkspace-live` repository and the Cloudflare account.

The apex `spineinnovtech.com` is the canonical corporate origin; `www.spineinnovtech.com` and legacy hosts 301 to it via `CANONICAL_REDIRECTS_ENABLED=true`. Before the first production deploy, verify the `spineinnovtech.com` zone is active in this Cloudflare account and certificates for the apex, `www`, `dev`, and `test` hostnames issue correctly.

### Acceptance and troubleshooting

- If **no Cloudflare build starts**, check that the Git integration is connected to the **existing** Worker and the latest `main` push is visible in Settings → Builds. This cannot be resolved by committing a Wrangler file alone.
- If **build fails**, inspect the Cloudflare build log. The site must pass route/brand checks, TypeScript, static export, and HTML/sitemap validation.
- If **deploy fails**, check Cloudflare Builds' deploy token permissions, correct Worker name, account, and custom-domain ownership. No CircleCI credentials are involved.
- If **site still serves old content**, check which Worker/custom domain owns `spineinnovtech.com`. A successful Wrangler upload to a different Worker is **not** a release. `verify:live` fails when the corporate hero is absent or the final hostname redirects away (set `SPINE_LIVE_ORIGIN` to check dev/test hosts).
- If **Sanity posts are stale**, verify configured build secrets and rerun a Deploy Hook after a content publication.
- **Only declare production success** once the Cloudflare build and deployment complete and the live page contains `Move business` and `Spine InnovTech`.

References: [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), [Build settings](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/), and [Deploy Hooks](https://developers.cloudflare.com/workers/ci-cd/builds/deploy-hooks/).

### Feature-branch Preview failure (9 October 2026)

Cloudflare successfully built commit `711cb8a`, then its feature-branch trigger ran `npx wrangler preview`. Deployment failed because the Wrangler configuration had no `previews` block. The configuration now includes an empty top-level `previews` object, as required by Wrangler's Preview command. This is distinct from production deployment, which uses `wrangler deploy --env prod` and verifies the production hostname.

A Codex environment secret is not evidence of runtime authentication: verify the binding status and `wrangler whoami` in the actual process. The token supplied for this deployment authenticated successfully to the configured account. Keep token values out of source files, reports, and logs.
