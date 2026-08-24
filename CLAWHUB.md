# ClawHub publish (org `railyai` only)

Do **not** publish as personal `nttylock`. Slug must be `@railyai/raily`.

User install:

```bash
openclaw plugins install clawhub:@railyai/raily
```

```bash
# from this repo root, after clawhub login
clawhub whoami
clawhub package validate .
clawhub package publish . --family bundle-plugin --owner railyai --dry-run --json
# abort unless JSON owner/scope is railyai and name is @railyai/raily
clawhub package publish . --family bundle-plugin --owner railyai --wait
```

Family is **bundle-plugin** (Agent Plugins pack). Not a Code plugin (no JS
runtime). Not skill-only upload.
