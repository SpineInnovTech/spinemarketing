# Repo Guardian Policy

**Repository:** spinemarketing (Spine InnovTech corporate site — https://spineinnovtech.com)
**Owner:** @NirmalPrinceJ
**Effective:** October 2026

---

## Role

The guardrails in this repo are the first line of defense for copy, brand, and
release safety. They augment the owner's review; they do not replace it.

## Lanes

Merge **UP only**: `feature/* → dev → test → main`.

| Branch | Deploys to                   | How it changes                                             |
| ------ | ---------------------------- | ---------------------------------------------------------- |
| dev    | dev.spineinnovtech.com       | PR from a `feature/*` branch; CI deploys on push           |
| test   | test.spineinnovtech.com      | PR from `dev` only; CI deploys on push                     |
| main   | (release source)             | PR from `test` only                                        |
| prod   | spineinnovtech.com + www     | **Manual, guarded** — never from CI (see below)            |

Promotions use **merge commits**. `scripts/branch-guard.sh` checks "contains"
with `git log --no-merges <upper>..<lower>` being empty, not ancestry.

## Guardian checks (run in CI on every PR to a lane branch — `.github/workflows/pr-guard.yml`)

- **`lane`** — `scripts/branch-guard.sh check-pr <base> <head>` rejects an
  out-of-lane PR (feature→test, feature→main, dev→main all fail).
- **`verify`** — lint, `audit:site`, `check:cloudflare`, `typecheck`, `build`,
  `verify:artifact`. These job names are stable so they can be made required
  status checks.

### Copy guard (inside `verify:artifact`, `scripts/verify-copy-guard.mjs`)

Reads the built HTML with a real tokenizer that skips script/style/noscript/
template, and:

- **FAILS** on banned copy ("Hermes", "Governed execution", the old H1/footer
  line, "What is shown here, and what to check.") and a jargon blocklist (MCP,
  OAuth, PKCE, ABAC, RBAC, SHA-256, runtime, schema, LLM, "in seconds",
  "45 minutes", etc.).
- **ALLOWS** "Meeting with GlobalTech in 45 minutes" on /solutions/customer-success,
  the /docs and /developers reference pages, and /privacy and /terms.
- **REQUIRES** the locked homepage copy (H1, lead, the SpineWorkspace H2/line,
  "Agentic Governance", "Controlled execution", "Approved and traceable",
  "Human-approved", "See the workflow", "Explore SpineWorkspace").

The locked copy is pinned word-for-word in
`.kiro/steering/spinemarketing-locked-canon.md`.

## Deploy paths

- **dev / test** — automatic, by CI, on push to the branch
  (`.github/workflows/deploy-environments.yml`).
- **prod** — manual only, through `scripts/prod-deploy-guard.mjs`. It refuses
  unless the tree is clean, HEAD equals `origin/main`, and
  `CONFIRM_PROD_DEPLOY=spineinnovtech.com` is set. `npm run deploy:prod` and
  `npm run deploy:cloudflare` both route through it. There is deliberately no
  prod job in CI.
- **CMS** — a Sanity publish triggers a Cloudflare Workers Build through a
  deploy hook (`.github/workflows/cms-rebuild.yml`).

## What the guardian does NOT do

- Change GitHub settings (branch protection, rulesets, security) — that is a
  separate step needing the owner's explicit OK.
- Force-push, delete branches, amend pushed commits, or `rm -rf`.
- Deploy to prod without the explicit human OK (`CONFIRM_PROD_DEPLOY`).
- Commit evidence or secrets (`.kiro/evidence/`, `.env*`, `.dev.vars` are
  git-ignored).

## Escalation

- **Leaked secret staged** → block, recommend rotation.
- **Banned copy / jargon on a page** → block (copy guard fails the PR).
- **Out-of-lane PR** → block (`lane` job fails).
- **Prod deploy attempted from a non-main or dirty tree, or without the human
  OK** → refused by the guard.

---

_The guard serves the copy and the release. The owner serves the product._
