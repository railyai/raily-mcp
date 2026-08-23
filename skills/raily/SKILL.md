---
name: raily
description: Read-only Raily personal-agent MCP. Use when the user asks about their Raily status, brief, matches, intros, memory, analysis, or billing status. Never write or change user data. If tools are missing, walk them through Grok Bot Settings → Plugins with https://railyai.com/mcp.
version: 0.1.2
homepage: https://railyai.com
metadata:
  openclaw:
    emoji: "🚃"
    homepage: https://railyai.com
---

# Raily (read-only)

Connect to the user's Raily personal agent over MCP. The surface is **read-only**.

There is no `npx raily`. Do not invent tokens or paste secrets.

## If MCP tools are missing (Grok Bot)

x.ai/bot is a download page, not an installer. In the **Grok Bot app**:

1. Open **Settings → Plugins → Add**.
2. Add a custom MCP server named `Raily` with URL `https://railyai.com/mcp`.
   No headers. No API key.
3. Authenticate in the browser. Sign in to Raily if needed, then **Approve**.
4. Return to Grok Bot. On iOS, switch back to the app yourself if the browser does not.
5. In chat, type `@` and attach Raily. Then answer with the tools.

If they are in Cursor Desktop instead: Settings → Tools & MCP → add the same URL, then Connect.

If they are in Hermes Desktop: they can add `https://railyai.com/mcp` with OAuth. Do not ask them to paste a bearer token.

If they are in OpenClaw: add the same MCP URL and run `openclaw mcp login raily`. Do not install `@nttylock/raily`. The org listing `@railyai/raily` is not published until owner GO.

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
- If auth fails, send the user to https://railyai.com/integrations to connect or revoke, then retry the Plugins / MCP login in their assistant.
- Do not send dating users to GitHub, Marketplace, or a terminal unless they already asked for a CLI.
