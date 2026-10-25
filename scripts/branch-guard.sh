#!/usr/bin/env bash
# Branch guard — enforces the spinemarketing branching discipline.
#
#   Lanes (merge-UP only):  feature/* → dev → test → main
#
# Promotions use MERGE commits, so "contains" is checked with
#   git log --no-merges <upper>..<lower>  being EMPTY
# (every non-merge commit on the upper lane is also on the lower one), NOT with
# merge-base ancestry — a merge-commit promotion makes the upper branch a
# non-ancestor of the lower one even when all its real work is present.
#
# Usage:
#   scripts/branch-guard.sh pre-branch         # run BEFORE creating any feature branch
#   scripts/branch-guard.sh check-pr BASE [HEAD]  # validate a PR's target lane (before gh pr create)
#   scripts/branch-guard.sh status             # sync overview of main / test / dev
#
# Escape hatch (use only with an explicit human decision): BRANCH_GUARD_FORCE=1

set -euo pipefail
cd "$(git rev-parse --show-toplevel)"

RED=$'\033[31m'; GRN=$'\033[32m'; YLW=$'\033[33m'; NC=$'\033[0m'
ok()  { echo "${GRN}✓${NC} $*"; }
warn(){ echo "${YLW}!${NC} $*"; }
fail(){
  echo "${RED}✗${NC} $*" >&2
  if [ "${BRANCH_GUARD_FORCE:-0}" = "1" ]; then
    echo "${YLW}BRANCH_GUARD_FORCE=1 set — continuing anyway${NC}" >&2
    return 0
  fi
  exit 1
}

ref() { git rev-parse -q --verify "$1" || true; }

# True (empty output) when every NON-MERGE commit on $1 (the upper lane) is also
# present on $2 (the lower lane) — i.e. the lower lane "contains" the upper one
# through merge-commit promotions.
nonmerge_commits_missing() {
  git log --no-merges --oneline "$2..$1" 2>/dev/null || true
}

contains_check() {
  # contains_check <upper-ref> <lower-ref> <label>
  local upper="$1" lower="$2" label="$3" missing
  [ -n "$upper" ] && [ -n "$lower" ] || return 0
  missing=$(nonmerge_commits_missing "$upper" "$lower")
  if [ -z "$missing" ]; then
    ok "$label (no unmerged non-merge commits)"
  else
    fail "$label FAILED — these non-merge commits are on ${upper#origin/} but not ${lower#origin/}:
$missing
Finish the promotion before branching/PRing."
  fi
}

sync_lanes() {
  git fetch origin --quiet 2>/dev/null || true
  local main_ref test_ref dev_ref
  main_ref=$(ref origin/main || ref main)
  test_ref=$(ref origin/test || ref test)
  dev_ref=$(ref origin/dev || ref dev)
  [ -n "$main_ref" ] || fail "main branch not found"
  [ -n "$test_ref" ] || fail "test branch not found"
  [ -n "$dev_ref" ]  || fail "dev branch not found"
  # Merge UP only: test must contain main, dev must contain test.
  contains_check "$main_ref" "$test_ref" "test contains main"
  contains_check "$test_ref" "$dev_ref" "dev contains test"
}

clean_tree() {
  if [ -n "$(git status --porcelain)" ]; then
    fail "working tree is not clean — commit, stash or discard changes before branching:
$(git status --short)"
  fi
  ok "working tree clean"
}

no_open_prs() {
  command -v gh >/dev/null 2>&1 || { warn "gh CLI not found — skipping open-PR check"; return 0; }
  local open
  if ! open=$(gh pr list --state open --limit 100 --json number,headRefName,baseRefName \
           --jq '.[] | "    #\(.number) \(.headRefName) → \(.baseRefName)"' 2>/dev/null); then
    warn "gh pr list failed — open-PR check skipped"
    return 0
  fi
  [ -n "$open" ] || { ok "no open PRs"; return 0; }
  warn "open PRs in flight:
$open"
}

pre_branch() {
  echo "— pre-branch checks —"
  clean_tree
  sync_lanes
  no_open_prs
  ok "ready — create feature branches FROM dev:  git checkout -b <type>/<name> origin/dev"
}

check_pr() {
  local base="${1:-}" head="${2:-}"
  [ -n "$head" ] || head=$(git symbolic-ref --quiet --short HEAD 2>/dev/null || echo "")
  [ -n "$base" ] || fail "usage: branch-guard.sh check-pr <base-branch> [head-branch]"
  [ -n "$head" ]  || fail "detached HEAD — check out the branch you are about to PR, or pass HEAD explicitly"
  # Normalise refs like refs/heads/foo or origin/foo to a bare branch name.
  head="${head#refs/heads/}"; head="${head#origin/}"
  base="${base#refs/heads/}"; base="${base#origin/}"
  echo "— PR lane check: $head → $base —"
  case "$base" in
    dev)
      case "$head" in
        test|main) fail "dev takes any branch EXCEPT test and main (got: $head)" ;;
        *) ok "lane valid: $head → dev" ;;
      esac
      ;;
    test)
      [ "$head" = "dev" ] || fail "test takes ONLY dev (got: $head)"
      ok "lane valid: dev → test"
      ;;
    main)
      [ "$head" = "test" ] || fail "main takes ONLY test (got: $head)"
      ok "lane valid: test → main"
      ;;
    *)
      fail "unknown PR base '$base' — allowed bases: dev, test, main"
      ;;
  esac
}

status() {
  git fetch origin --quiet 2>/dev/null || true
  local m t d
  m=$(ref origin/main || ref main); t=$(ref origin/test || ref test); d=$(ref origin/dev || ref dev)
  echo "— branch status (lanes: feature/* → dev → test → main) —"
  echo "  main: $( [ -n "$m" ] && git rev-parse --short "$m" || echo MISSING )"
  echo "  test: $( [ -n "$t" ] && git rev-parse --short "$t" || echo MISSING )"
  echo "  dev:  $( [ -n "$d" ] && git rev-parse --short "$d" || echo MISSING )"
  if [ -n "$m" ] && [ -n "$t" ]; then
    local miss; miss=$(nonmerge_commits_missing "$m" "$t")
    [ -z "$miss" ] && ok "test contains main" || warn "test is MISSING main commits:
$miss"
  fi
  if [ -n "$t" ] && [ -n "$d" ]; then
    local miss; miss=$(nonmerge_commits_missing "$t" "$d")
    [ -z "$miss" ] && ok "dev contains test" || warn "dev is MISSING test commits:
$miss"
  fi
  no_open_prs
}

case "${1:-}" in
  pre-branch) pre_branch ;;
  check-pr)   shift; check_pr "${1:-}" "${2:-}" ;;
  status)     status ;;
  *)
    sed -n '2,19p' "$0" | sed 's/^# \{0,1\}//'
    exit 1
    ;;
esac
