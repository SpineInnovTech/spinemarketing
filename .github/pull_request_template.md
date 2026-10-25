# Pull Request

## Lane

<!-- One box. Merge UP only: feature/* → dev → test → main. -->

- [ ] feature/\* → **dev**
- [ ] dev → **test**
- [ ] test → **main**

## What changed

<!-- Describe the change in plain language. -->

## Gates run

- [ ] `npm run check` (lint, audit:site, check:cloudflare, typecheck)
- [ ] `npm run build:cloudflare`
- [ ] `npm run verify:artifact` (includes the copy guard)
- [ ] `npm run guard:pr <base> <head>` (lane valid)

## Live impact

- [ ] None — content/dev/test only
- [ ] Needs the owner's OK — touches production or the prod deploy path

## Screenshots

<!-- Desktop + mobile for any visible change. -->

---

**Never force-push, delete branches, or `rm -rf`. Prod deploys only on an explicit human OK, through `scripts/prod-deploy-guard.mjs`.**
