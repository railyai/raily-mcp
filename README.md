# Raily MCP

Read-only [Agent Plugin](https://agent-plugins.org) for the Raily personal agent. It points at the hosted Streamable HTTP MCP at `https://railyai.com/mcp`.

Scopes are **read-only**. The plugin never writes or changes user data. No API keys, bearer tokens, or secrets belong in this repo.

## Install

1. Add this plugin from GitHub (once public) or as a local folder:
   - `https://github.com/railyai/raily-mcp`
   - or symlink a checkout: `ln -s /path/to/raily-mcp ~/.cursor/plugins/local/raily-mcp`
2. Enable **Raily MCP**.
3. When the client connects, **OAuth happens in the browser**. Sign in to Raily and approve the read-only grant. Do not paste tokens into chat or config.

CLI fallback (still opens a browser for OAuth):

```bash
cursor mcp add --transport http raily https://railyai.com/mcp
```

## Revoke

Disconnect or revoke the grant any time at [https://railyai.com/integrations](https://railyai.com/integrations).

## What it can read

- Agent status
- Brief
- Matches
- Intros
- Memory
- Analysis status
- Billing status

It cannot update the brief, accept or decline intros, change billing, or otherwise mutate account data.

## Layout

```text
raily-mcp/
├── plugin.json                 # Agent Plugins 1.0.0 manifest
├── mcp.json                    # Hosted HTTP MCP (no secrets)
├── .cursor-plugin/plugin.json  # Cursor marketplace compatibility
├── skills/raily/SKILL.md
├── assets/logo.png
├── LICENSE
└── README.md
```
