# Spine Network continuity — website claims and source alignment

Reviewed: 2026-10-21
Source repository: `SpineInnovTech/spineworkspace-live` (`main`).
Source: `services/mcp-connector/src/continuity-bridge.ts`, `services/mcp-connector/src/index.ts`.
This is a marketing claim-boundary review, **not** a certification of deployed cross-host behavior.

## Verified source-code facts

- `PUBLIC_CONTINUITY_BRIDGE_TOOL_DEFINITIONS` currently defines **29** public semantic tools, including `get_my_continuity`, `get_active_context`, `get_my_focus`, `get_decisions`, `get_commitments`, `get_permitted_memory`, `store_in_spine`, `prepare_action`, `get_action_plan`, `approve_action`, and domain retrieval tools.
- The comments around the same array are stale/inconsistent: a header still says “24 semantic tools,” and a backwards-compatible export comment says “19-tool contract.” The website must not repeat either outdated number.
- `get_my_continuity` resolves an actor's active context and memory assembly. `get_active_context` resolves active context, not arbitrary hidden host-chat memory.
- `store_in_spine` has two distinct behaviors: host observations with provider provenance enter a queue for Loader/normalization; ordinary decisions and insights enter governed memory promotion. Submission does **not** prove immediate canonical materialization or acceptance.
- `listCrossHostTools` distinguishes a tenant-known connection (`connected`) from availability and execution route for the calling host. Host-private credentials may remain executable only by the owning host; separately managed/delegated routes may be available via Govern/Hermes.
- `prepare_action` can return `owner_executes`, `not_executable`, or `unavailable` depending on connection location, delegation, workspace authority and Govern readiness.
- `approve_action` verifies approval authority and returns an approval result; it does **not** execute the provider operation. Separate execution, readback and reconciliation evidence are necessary.
- `services/mcp-connector/src/index.ts` defines OAuth resource-server logic. Public external OAuth is gated by `MCP_EXTERNAL_OAUTH_ENABLED` and may remain private-alpha until tenant membership and consent are confirmed.
- The MCP service has continuity bridge routes and an MCP protocol entrypoint. We have **not** confirmed the publicly reachable hostname/path, a deployed OAuth handshake or independent successful Cursor/Claude/ChatGPT continuation in this marketing update.

## Publication guardrails

- Describe Spine Network as a **governed cross-host continuity capability**. Illustrate Cursor → Claude → ChatGPT as the intended workflow, not a measured customer journey.
- Do not claim private host connectors, host secrets, chat transcripts or hidden context are transferable to another host.
- Preserve tenant, workspace, subject and source-access authorization on every continuation and execution.
- Distinguish **connected / discovered / authorized / executable / invoked / reconciled / retrievable**. No simulated connection statuses may appear as live evidence.
- Retain the **Live Workbench Views** heading for real application UI captures. Existing recording uses controlled QA fixture data; capture provenance remains on the separate video and screenshot evidence manifests.
- Product pillars remain primary: governed business truth and context; one Fabric projected into 13 domains; day-one-ready supported work. Spine Network demonstrates portability and continuity, not an additional required product pillar.

## Minimum future cross-host proof

1. Host A and Host B independently authenticate to Spine Network, with distinct verified bindings.
2. Host A submits source-linked state; approval/promotion completes and becomes canonically retrievable.
3. Host B retrieves the same authorized context/work reference and resumes from the correct version/checkpoint.
4. Host B fails to retrieve out-of-scope or other-tenant context and cannot borrow Host A's source connector.
5. A consequential action stays separate from approval and is proved only through provider readback, reconciliation and a Workbench evidence entry.

No production deployment, credential changes, or live provider actions are authorized by this marketing update.
