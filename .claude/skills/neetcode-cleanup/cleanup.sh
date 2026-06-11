#!/usr/bin/env bash
#
# neetcode-cleanup
#
# For each problem folder inside the target directory:
#   - find the latest submission (the submission-N.js with the highest N)
#   - resolve the problem's creation date (YYYYMMDD) from git history
#     (earliest commit that added a submission for the problem; falls back
#     to the kept file's filesystem mtime when git has no record)
#   - move it out to "<target>/<YYYYMMDD>-<folder-name>.js"
#   - delete the now-empty problem folder (and any other submissions)
#
# Usage:
#   cleanup.sh [target-dir] [--dry-run]
#
# Defaults to "Data Structures & Algorithms" relative to the current dir.

set -euo pipefail

TARGET="Data Structures & Algorithms"
DRY_RUN=0

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    *) TARGET="$arg" ;;
  esac
done

if [[ ! -d "$TARGET" ]]; then
  echo "Error: target directory not found: $TARGET" >&2
  exit 1
fi

run() {
  if [[ "$DRY_RUN" -eq 1 ]]; then
    echo "[dry-run] $*"
  else
    eval "$@"
  fi
}

# Resolve a problem's creation date as YYYYMMDD.
# Prefers the earliest commit that ADDED a file under the problem folder;
# falls back to the kept submission file's filesystem mtime.
created_date() {
  local dir="$1" latest="$2" d=""
  d="$(git log --diff-filter=A --date=format:'%Y%m%d' --format='%ad' -- "$dir" 2>/dev/null | tail -n 1)"
  if [[ -z "$d" ]]; then
    d="$(date -r "$latest" +%Y%m%d 2>/dev/null || true)"
  fi
  echo "$d"
}

shopt -s nullglob

for dir in "$TARGET"/*/; do
  dir="${dir%/}"
  name="$(basename "$dir")"

  # Find the submission with the highest numeric suffix.
  latest=""
  latest_num=-1
  for f in "$dir"/submission-*.js; do
    base="$(basename "$f" .js)"
    num="${base#submission-}"
    [[ "$num" =~ ^[0-9]+$ ]] || continue
    if (( num > latest_num )); then
      latest_num="$num"
      latest="$f"
    fi
  done

  if [[ -z "$latest" ]]; then
    echo "Skipping '$name': no submission-N.js files found" >&2
    continue
  fi

  date_prefix="$(created_date "$dir" "$latest")"
  if [[ -z "$date_prefix" ]]; then
    echo "Skipping '$name': could not resolve creation date" >&2
    continue
  fi

  dest_name="$date_prefix-$name.js"
  dest="$TARGET/$dest_name"
  echo "$name: keeping $(basename "$latest") -> $dest_name"
  run "mv \"$latest\" \"$dest\""
  run "rm -rf \"$dir\""
done

echo "Done."
