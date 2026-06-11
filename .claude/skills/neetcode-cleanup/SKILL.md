---
name: neetcode-cleanup
description: Flatten NeetCode problem folders by keeping only the latest submission. For each problem folder under "Data Structures & Algorithms" (or a given target dir), keep the submission-N.js with the highest N, rename it to <YYYYMMDD>-<folder-name>.js (date = problem's creation date from git history), move it up one level, and delete the folder. Use when asked to clean up / flatten neetcode submissions.
---

# neetcode-cleanup

> **ALWAYS `git pull` master before running this skill.** Fast-forward the local
> `master` first so the cleanup operates on the latest submissions and the complete
> commit history (the date prefix is read from git). Do not skip this step.

Flattens the NeetCode solution tree. Each problem lives in its own folder containing
multiple attempts named `submission-0.js`, `submission-1.js`, ... The "latest" submission
is the one with the **highest numeric suffix**.

For every problem folder under the target directory (default `Data Structures & Algorithms`):

1. Find the latest submission (`submission-N.js` with the largest `N`).
2. Resolve the problem's creation date as `YYYYMMDD` — the earliest commit that
   added a submission for that problem (from git history), falling back to the
   kept file's filesystem mtime when git has no record.
3. Move it out to `<target>/<YYYYMMDD>-<folder-name>.js`.
4. Delete the original folder (removing all other submissions).

## Example

`duplicate-integer/` containing `submission-0.js` … `submission-5.js`, first
submitted on 28 May 2026
→ becomes `20260528-duplicate-integer.js` (the contents of `submission-5.js`),
folder removed.

## Usage

Run the bundled script from the repo root:

```bash
# 0. ALWAYS pull master first
git pull

# Preview without changing anything
bash .claude/skills/neetcode-cleanup/cleanup.sh --dry-run

# Apply (default target: "Data Structures & Algorithms")
bash .claude/skills/neetcode-cleanup/cleanup.sh

# Custom target directory
bash .claude/skills/neetcode-cleanup/cleanup.sh "Some Other Folder"
```

## Notes

- This is destructive (deletes non-latest submissions and the folders). The repo is
  under git, so changes are recoverable. Run with `--dry-run` first if unsure.
- "Latest" is defined by the numeric suffix, not by git/file timestamps.
- The date prefix (`YYYYMMDD`) reflects when the problem was first submitted, read
  from git history (earliest add commit for the folder); run inside the git repo so
  this resolves correctly. Without git, it falls back to the kept file's mtime.
