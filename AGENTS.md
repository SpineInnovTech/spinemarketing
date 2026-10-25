# AGENTS.md — spinemarketing

The **Spine InnovTech corporate marketing site** (https://spineinnovtech.com).
Next.js, exported static, served from Cloudflare Workers. Content comes from
Sanity. This repo is **not** the product app (that is spineworkspace-live).

## Lanes

Merge **UP only**: `feature/* → dev → test → main`.

- Branch feature work **from `origin/dev`**: `git checkout -b <type>/<name> origin/dev`.
- `dev` → `dev.spineinnovtech.com`, `test` → `test.spineinnovtech.com` (CI deploys on push).
- **main is the release source**; prod is deployed manually and guarded.
- Promotions use **merge commits**.
- Run `npm run guard:branch pre-branch` before branching and
  `npm run guard:pr <base> <head>` before opening a PR. Lane rules:
  dev takes any branch except test/main; test takes only dev; main takes only test.

## Hard rules

- **PRs only.** No direct pushes to `test` or `main`.
- **Never** force-push, delete branches, amend pushed commits, or `rm -rf`
  (use `mv … ~/.Trash/…`).
- **Prod only on an explicit human OK**, through `scripts/prod-deploy-guard.mjs`
  (`npm run deploy:prod` / `npm run deploy:cloudflare`). It refuses unless the
  tree is clean, HEAD == `origin/main`, and
  `CONFIRM_PROD_DEPLOY=spineinnovtech.com` is set. There is no prod job in CI.
- **Do not change GitHub settings** (branch protection, rulesets, security)
  without the owner's OK.
- **Evidence and secrets stay out of git**: `.kiro/evidence/`, `.env*`,
  `.dev.vars`, wrangler secret files are git-ignored.

## Gates before a PR

```sh
npm run check            # lint, audit:site, check:cloudflare, typecheck
npm run build:cloudflare # full build
npm run verify:artifact  # static-artifact + corporate-coverage + copy guard
```

The copy guard (`scripts/verify-copy-guard.mjs`) blocks banned copy and jargon
and requires the locked homepage copy.

## Copy and brand

The locked copy and content rules are pinned in
[`.kiro/steering/spinemarketing-locked-canon.md`](.kiro/steering/spinemarketing-locked-canon.md)
— follow them word for word. Brand: **"Spine InnovTech"** and the one-word
**"SpineWorkspace"**. Plain language for a business reader; remove or label
unproven numbers and claims; `/docs`, `/developers`, `/privacy`, `/terms` keep
their content.

See [`.github/REPO_GUARDIAN.md`](.github/REPO_GUARDIAN.md) for the full guardian
policy and deploy paths.
