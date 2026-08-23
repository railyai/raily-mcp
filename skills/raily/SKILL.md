---
name: raily
description: Read-only Raily personal-agent MCP. Use when the user asks about their Raily status, brief, matches, intros, memory, analysis, or billing status. Never write or change user data. If tools are missing, add https://railyai.com/mcp from Grok Bot Settings → Plugins.
version: 0.1.2
homepage: https://railyai.com
metadata:
  openclaw:
    emoji: "🚃"
    homepage: https://railyai.com
---

# Raily (read-only)

Connect my Raily personal agent. It is read-only.

1. Open Settings → Plugins → Add.
2. Add a custom MCP server named Raily with URL https://railyai.com/mcp — no headers, no API key.
3. Authenticate in the browser. Sign in to Raily if needed, then Approve.
4. Come back, type @ and attach Raily.
5. Then tell me my Raily status, brief, matches, intros, memory, analysis, and billing.

Never write or change my data. Never ask me to paste tokens. If auth fails, send me to https://railyai.com/integrations
