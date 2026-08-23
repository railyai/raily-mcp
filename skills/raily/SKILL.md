---
name: raily
description: Read-only Raily personal-agent MCP. Use when the user asks about their Raily status, brief, matches, intros, memory, analysis, or billing status. Never write or change user data.
---

# Raily (read-only)

This plugin connects to the user's Raily personal agent over MCP. The surface is **read-only**.

## What you may read

- Agent **status**
- Current **brief**
- **Matches**
- **Intros** / connection requests
- **Memory** timeline and bar state
- **Analysis** status (and analysis handoff links the server already exposes)
- **Billing status** / subscription

## Hard rules

- Never write, update, delete, confirm, accept, decline, or otherwise change user data.
- Never invent or store secrets, tokens, or bearer headers. OAuth is handled by the client in the browser.
- If a tool would mutate state, refuse and tell the user to use https://railyai.com instead.
- If auth fails, send the user to https://railyai.com/integrations to connect or revoke. Cursor CLI: `cursor-agent mcp login raily` (url-only `mcp.json`, no `type`). Fallback: `npx -y mcp-remote https://railyai.com/mcp`. Then retry.
