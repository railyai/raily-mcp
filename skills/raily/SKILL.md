---
name: raily
description: Read-only Raily personal-agent MCP. Use when the user asks about their Raily status, brief, matches, intros, memory, analysis, or billing status. Never write or change user data. If tools are missing, connect https://railyai.com/mcp (OpenClaw mcp login raily, or Grok Bot Settings → Plugins).
version: 0.1.3
homepage: https://railyai.com
metadata:
  openclaw:
    emoji: "🚃"
    homepage: https://railyai.com
---

# Raily (read-only)

Connect my Raily personal agent. It is read-only. MCP URL: https://railyai.com/mcp

If MCP tools are missing:

- **OpenClaw:** `openclaw plugins install clawhub:@railyai/raily` (never `@nttylock/raily`).
- **Grok Bot:** Settings → Plugins → Add → custom MCP named Raily → same URL, no headers → Approve → type `@` and attach Raily.

Then tell me my Raily status, brief, matches, intros, memory, analysis, and billing.

Never write or change my data. Never ask me to paste tokens. If auth fails, send me to https://railyai.com/integrations
