# Publishing Raily MCP

The bundle owner is **railyai**, package **@railyai/raily**. Never silently publish
under a personal account or a different namespace. GitHub releases, ClawHub,
npm and the official MCP Registry have separate identities and publication state.
Publishing a remote metadata record does not deploy the server or change grants.

## Release checks

From a clean checkout of the reviewed release commit:

```bash
npm run check
npm run catalog:check
mcp-publisher validate server.json
npx --yes clawhub@0.23.3 package validate .
npm pack --dry-run
```

Inspect the pack file list: no credentials, private profiles or operator artifacts.
The version must match `package.json`, all three plugin manifests, `server.json`
and `skills/raily/SKILL.md`. Update CHANGELOG.md and tag that exact commit.

## ClawHub bundle

Use the package commands in ClawHub **0.23.3**, not the older skill-only CLI.
`clawhub inspect` searches skills; it does not establish whether a bundle exists.
The actor may be a person, but the target owner must remain `railyai`.

```bash
npx --yes clawhub@0.23.3 whoami
npx --yes clawhub@0.23.3 package inspect @railyai/raily --json
npx --yes clawhub@0.23.3 package publish . --family bundle-plugin --owner railyai --dry-run --json
```

Check the dry-run name, owner, family, version, endpoint and archive file list.
After the reviewed commit is tagged and pushed, publish from that exact checkout:

```bash
npx --yes clawhub@0.23.3 package publish . --family bundle-plugin --owner railyai --source-repo railyai/raily-mcp --source-commit "$(git rev-parse HEAD)" --source-ref v0.2.0 --wait --json
npx --yes clawhub@0.23.3 package inspect @railyai/raily --json
```

Require the intended version, owner, source commit and completed clean scan.
A submitted, pending or failed security scan is not a completed release. Do not
mislabel the community package as an official vendor listing.

## Official MCP Registry

`server.json` declares `io.github.railyai/raily` with a remote Streamable HTTP
endpoint. It deliberately has no npm/stdio package entry: this bundle has no
server executable. The registry supports remote-only entries without npm.

```bash
mcp-publisher validate server.json
mcp-publisher login github
mcp-publisher publish server.json
curl --fail --silent --show-error 'https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.railyai/raily'
```

Use GitHub authentication authorized for the `railyai` organization. Complete any
owner login in the browser; never paste tokens into chat or commit publisher auth
files. Verify the exact name/version/remote URL in the returned registry record.

## npm artifact (optional distribution)

Clients connect to **https://railyai.com/mcp**. Native Streamable HTTP clients
use the URL. Stdio-only clients use `npx -y mcp-remote https://railyai.com/mcp`.
Do not add a first-party `bin` or a branded `npx railyai` wrapper: it would
re-export that same bridge.

The `package.json` name `@railyai/raily` is the ClawHub / Agent Plugins identity.
It does not prove an npm publication and is not a connect path. Unscoped npm name
`raily` collides with a different product (`@raily/sdk` / raily.ai). Unscoped
`railyai` is unused; publishing it still needs the `citedy` account OTP (granular
tokens cannot bypass 2FA). An npm tarball would be metadata only.

```bash
npm whoami
npm pack --dry-run
# npm publish --access public   # optional metadata; requires OTP
```

## Client marketplaces

The portable `plugin.json` and `.cursor-plugin/plugin.json` describe the bundle;
`mcp.json` describes the direct remote connection. Submit the reviewed repository
and endpoint using the target marketplace's current official submission process.
Marketplace approval is external; do not claim acceptance without its receipt.

References: [MCP remote servers](https://modelcontextprotocol.io/registry/remote-servers),
[MCP authentication](https://modelcontextprotocol.io/registry/authentication),
[Agent Plugins](https://agent-plugins.org),
[ClawHub CLI](https://docs.openclaw.ai/clawhub/cli).
