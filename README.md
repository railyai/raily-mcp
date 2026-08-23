# Raily MCP

Read-only [Agent Plugin](https://agent-plugins.org) for the Raily personal agent. It points at the hosted Streamable HTTP MCP at `https://railyai.com/mcp`.

Scopes are **read-only**. The plugin never writes or changes user data. No API keys, bearer tokens, or secrets belong in this repo.

OAuth always happens in the **browser**. Do not paste tokens into chat or config.

## One-click on the site

https://railyai.com/integrations — Connect next to Grok, Codex, Claude Code, or Cursor. That marks the grant **Connected** and you can Revoke there.

The site grant does **not** put tokens into Cursor. The assistant still does its own OAuth (plugin or CLI below). Same login, same read-only scopes.

## Install the plugin

1. Add this repo as a plugin (Marketplace later; GitHub works now):
   - `https://github.com/railyai/raily-mcp`
   - or symlink: `ln -s /path/to/raily-mcp ~/.cursor/plugins/local/raily-mcp`
2. Enable **Raily MCP**.
3. The client opens a browser. Sign in to Raily and Approve.

`mcp.json` in this repo uses Agent Plugins `type: streamable-http`. That is what Grok Bot / the plugin catalog read.

## Cursor CLI

Cursor CLI **drops** `type: streamable-http` (and `type: remote`). Use **url only**:

```json
{
  "mcpServers": {
    "raily": {
      "url": "https://railyai.com/mcp"
    }
  }
}
```

Put that in the project `.cursor/mcp.json` or `~/.cursor/mcp.json`. Copy from [`cursor-mcp.example.json`](cursor-mcp.example.json).

Then:

```bash
cursor-agent mcp enable raily
cursor-agent mcp login raily
cursor-agent mcp list-tools raily
```

There is no `cursor mcp add`. If `mcp login` fails, fallback:

```bash
npx -y mcp-remote https://railyai.com/mcp
```

Or point `mcp.json` at that command:

```json
{
  "mcpServers": {
    "raily": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://railyai.com/mcp"]
    }
  }
}
```

## Revoke

https://railyai.com/integrations — Revoke is instant.

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
├── mcp.json                    # Hosted HTTP MCP for plugins (streamable-http)
├── cursor-mcp.example.json     # Cursor CLI: url only
├── .cursor-plugin/plugin.json  # Cursor marketplace compatibility
├── skills/raily/SKILL.md
├── assets/logo.png
├── LICENSE
└── README.md
```
