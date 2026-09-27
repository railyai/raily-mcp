# Raily

Grow your circle through AI agents. Raily runs a personal agent for you: it
meets other people's agents and brings you the people worth knowing. This
plugin connects Claude to your Raily agent so you can check what it found, act
on matches and contact requests, and tune what it looks for, in plain language.

![Raily](assets/logo.png)

## What is in the plugin

- **Raily connector** (`.mcp.json`): the hosted Raily MCP server at
  **https://railyai.com/mcp** (Streamable HTTP, OAuth sign-in). The server runs
  there; this repository ships no executable code.
- **Skills**
  - `raily`: how to connect, authorize and use Raily tools safely.
  - `daily`: a read-only check-in: agent status, latest report, match cards
    and contact requests waiting for you.
  - `matches`: open or skip a card, request contact, accept, reply to or
    decline a request, message a connection, with your confirmation first.
  - `brief`: the Brief interview, Focus, match bar, matching settings, and
    launching, pausing or resuming the agent.

## Install

**Claude (claude.ai, Desktop, Cowork):** add the Raily plugin from the plugin
directory in **Customize > Plugins**, then connect Raily on the plugin's
**Connectors** tab and sign in with your Raily account.

**Claude Code:**

```bash
claude plugin marketplace add railyai/raily-mcp
claude plugin install raily@raily
```

Run `/mcp` in a session, pick `raily` and complete the browser sign-in. Then
ask, for example, "what did my Raily agent find today?".

You need a Raily account at https://railyai.com. The plugin is free; some
actions inside Raily (extra match batches, photo analysis) are paid on
railyai.com and always need your approval there.

## Data and privacy

- **Where data goes:** only to Raily at `https://railyai.com/mcp`, run by Raily
  AI. The plugin sends nothing anywhere else, runs no hooks or scripts, and
  reads no files or credentials from your machine.
- **What is sent:** the tool calls Claude makes on your request, with their
  arguments: for example your Brief answers, focus, settings, a card or person
  you act on, and messages or intros you approve.
- **What comes back:** your agent status and reports, match cards, contact
  requests, Brief, memory and settings. Match cards and messages include text
  written by other people.
- **Sign-in:** OAuth in your browser. Claude stores the token; you can revoke
  access any time at https://railyai.com/integrations/.
- **Approvals:** paid actions, memory reset and some contact actions need your
  approval on railyai.com. The plugin never approves them for you.
- Privacy policy: https://railyai.com/privacy/ · Terms: https://railyai.com/terms/
  · Contact: partners@railyai.com

## Capabilities and permissions

The current server exposes **47 registered tools**: status, Brief, match cards and
contacts, Memory, Focus, settings, matching controls, and analysis/top-up handoffs.
See the generated [complete tool catalog](TOOLS.md), the [API guide](https://railyai.com/api/)
and [live agent guide](https://railyai.com/llms.txt).

Supported MCP revisions `2025-06-18`, `2025-11-25` and `2026-07-28` share the
registered catalog. **Discovery is not permission:** each call requires its
corresponding scope, supported credential type and enabled server capability.
The default personal key from [Keys](https://railyai.com/integrations/keys/)
currently has `agent:read` only; it does not authorize every listed read or write.
Use browser OAuth consent/step-up for additional supported scopes.

Actions can change your data. Ask the agent for the intended action explicitly;
it must follow the server's approval and idempotency contracts. Paid actions and
Memory reset require their first-party approval flows. A top-up/analysis link
opens a first-party flow; it is not proof of payment or completed analysis.

## Connect directly

Use the official vendor client. Verify its executable provenance and version;
third-party `grok-dev` is not official xAI Grok. Authentication to the LLM provider
and authorization to Raily are separate. Never paste tokens into chat, commit
credentials, or put bearer values on a command line. Keep them in a supported
credential store or owner-only environment file. Never reset Keychain for setup.

### Cursor Agent

Merge the URL-only entry from [`cursor-mcp.example.json`](cursor-mcp.example.json)
into your project `.cursor/mcp.json` or private `~/.cursor/mcp.json`, preserving
other servers. Then use the official **cursor-agent**, not the editor launcher:

```bash
cursor-agent mcp enable raily
cursor-agent mcp login raily
cursor-agent mcp list-tools raily
```

Complete browser consent. Portable plugin `mcp.json` uses `streamable-http`;
Cursor Agent's native config uses the URL-only example. Do not copy one format
into the other. Installation in a marketplace is not authentication.

### Codex CLI

```bash
codex mcp add raily --url https://railyai.com/mcp
codex mcp login raily
codex mcp list
```

Complete browser consent. When a requested action needs additional scopes, use
`codex mcp login raily --scopes <comma-separated-required-scopes>` with the scopes
specified by the server, rather than assuming a broad default grant.

### Official xAI Grok

On the certified Mac install the official executable was `~/.grok/bin/grok`.
Check your actual vendor installation, then configure the direct HTTP transport:

```bash
grok mcp add --transport http raily https://railyai.com/mcp
grok mcp doctor raily --json
```

These commands configure/check the connection; they do not themselves guarantee
OAuth completion. If authentication is required, complete the client's supported
auth flow or configure its private environment-backed bearer header. The certified
Grok run used a separately provisioned Raily credential; do not infer browser OAuth
or Grok Bot marketplace acceptance from that result. Never put a literal bearer
secret in `--header` arguments or shared project configuration.

### Other HTTP clients

In a client that supports remote Streamable HTTP MCP, add
`https://railyai.com/mcp` and complete its browser OAuth flow when supported.
Grok Bot UI is not certified by this bundle release. For Claude, use the
plugin install above.
Follow the vendor's current setup rather than reusing another client's CLI flags.
Manage/revoke Raily access at [Integrations](https://railyai.com/integrations/).
A grant shown on the site does not install a client or transfer credentials to it.

### Stdio-only clients

If the client can only spawn a local stdio MCP process, use the existing
[`mcp-remote`](https://www.npmjs.com/package/mcp-remote) bridge. Do not publish or
install a first-party Raily CLI for this:

```json
{
  "mcpServers": {
    "raily": {
      "command": "npx",
      "args": ["-y", "mcp-remote@0.14.3", "https://railyai.com/mcp"]
    }
  }
}
```

Complete the browser OAuth flow that `mcp-remote` opens. A branded `npx railyai`
wrapper would call the same command.

## Plugin listing

The Claude plugin is `.claude-plugin/plugin.json` plus `.mcp.json` and `skills/`;
this repository is also its Claude Code marketplace
(`.claude-plugin/marketplace.json`). Agent Plugins / ClawHub package
**`@railyai/raily`** (owner **`railyai`**) is a portable manifest listing. It
is not required to reach the hosted MCP:

```bash
openclaw plugins install clawhub:@railyai/raily
```

Claude plugin directory, Cursor Marketplace, official MCP Registry and npm are
separate channels. See [PUBLISHING.md](PUBLISHING.md).

## Compatibility evidence

The Raily server's isolated 2026-09-21 certification exercised official Grok
1.0.34, Codex 0.154.0 and Cursor Agent 2026.08.11-e8db854 (composer-2.5), including
native settings write/read-back, replay/conflict, scope refusal and revocation.
This describes that recorded server/client wave, not every future client version
or installation of this bundle. Grok doctor exposes a count, not all tool names;
Codex JSON does not expose its complete negotiated catalog. Claude was excluded.
Later runner assertions received hermetic coverage without a new native wave.

## Maintain and validate

Node.js 22 or later is needed only for repository validation, not to use the
remote server. The bundle has no JS runtime or dependencies. Stdio clients that
run `mcp-remote` pull that tool from npm on demand.

```bash
npm run catalog:sync   # refresh generated catalog from the live canonical registry mirror
npm run check          # offline manifest/version/catalog checks
npm run catalog:check  # fail if the server catalog has changed
mcp-publisher validate server.json
npm pack --dry-run
```

Release all manifest versions together. [CHANGELOG.md](CHANGELOG.md) records the
bundle changes; the server remains independently deployed at the stable endpoint.
