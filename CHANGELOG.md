# Changelog

## Unreleased

- Connect path: native Streamable HTTP to `https://railyai.com/mcp`; stdio-only
  clients use `npx -y mcp-remote https://railyai.com/mcp`. No first-party
  `npx railyai` runtime. npm remains optional metadata, not a connector.

## 0.2.0 — 2026-09-21

- Describe the current 47-tool server catalog, including scoped actions, instead
  of presenting the entire integration as read-only.
- Teach agents to honor per-operation scopes, approvals, revisions, idempotency,
  explicit messaging intent and persisted-effect read-back.
- Add a generated catalog and release parity checks against the canonical site.
- Update direct official-client setup, credential handling and evidence limits.
- Add the official MCP Registry remote-server manifest and distinguish registry,
  ClawHub bundle, npm artifact and client marketplace publication.

## 0.1.3

Previous read-only Agent Plugins / ClawHub bundle.
