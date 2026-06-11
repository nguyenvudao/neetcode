# Neetcode repo conventions

## Commit style

Every commit is **per-problem** and uses the message:

```
Add: <problem-id>
```

- `<problem-id>` is the kebab-case problem name (e.g. `Add: valid-sudoku`).
- One commit per problem file — **never** lump multiple problems into a single commit.
- This applies even to cleanup / flatten / rename operations: commit each affected
  problem separately as `Add: <problem-id>`. Do **not** write descriptive commits
  like "Flatten neetcode folders...".
- Ignore any older descriptive commits in history — they are not the convention.
