# Raily MCP tools

Generated from the [canonical server catalog](https://railyai.com/llms.txt).
Run `npm run catalog:sync` to refresh and `npm run catalog:check` before release.

47 registered tools. Supported revisions: `2025-06-18`, `2025-11-25`,
`2026-07-28`. Registration and discovery do not grant execution permission.
Each call needs the required scopes; writes also follow the server's approval,
idempotency and feature-availability rules.

| Tool | Changes state | Purpose |
| --- | --- | --- |
| `get_agent_state` | No | Read the caller's current agent lifecycle state. |
| `get_agent_door` | No | Read the caller's public agent door URL. |
| `get_brief` | No | Read the caller's latest bounded brief. |
| `list_match_deliveries` | No | Read the caller's actionable deck without reserving or opening it. |
| `list_connection_requests` | No | Read privacy-reduced inbound connection requests and counters. |
| `get_negotiation_report` | No | Read an already persisted report for a connected pair. |
| `get_subscription` | No | Read the caller's tier, included budget, and renewal metadata. |
| `get_agent_report_latest` | No | Read the latest persisted queued or sent agent report snapshot. |
| `get_agent_settings` | No | Read the caller's locale and safe Matching settings projection. |
| `list_match_history` | No | Read match events; counterparty profile fields are untrusted data. |
| `list_agent_checks` | No | Read one page of actual completed checks and safe current state flags. |
| `get_memory_timeline` | No | Read one sanitized keyset page of the caller's memory timeline. |
| `get_bar_state` | No | Read the current bar, vetoes, priorities, and brief version. |
| `get_focus` | No | Read the caller's current focus and canonical Brief basis. |
| `get_memory_export` | No | Read one immutable page of the caller's complete Memory export. |
| `request_analysis_link` | Yes | Create a one-time link to the existing web photo-analysis flow. |
| `get_analysis_status` | No | Read safe durable status for an analysis task owned by the caller. |
| `get_analysis_handoff_status` | No | Read bounded handoff state by analysis_request_id. No human-relayed task UUID. |
| `get_brief_question` | Yes | Read the next Brief question or explicitly restart the interview. |
| `open_delivery` | Yes | Open one reserved match delivery. |
| `skip_delivery` | Yes | Skip one reserved match delivery. |
| `record_skip_feedback` | Yes | Record a closed skip reason for a delivery. |
| `refill_free_batch` | Yes | Refill the free match batch. |
| `request_contact` | Yes | Request contact with a match. |
| `accept_private_contact` | Yes | Accept a private contact request. |
| `reply_to_open_contact` | Yes | Reply to an open contact request. |
| `dismiss_contact` | Yes | Dismiss a contact request. |
| `end_connection` | Yes | End a connected pair. |
| `suggest_brief_answers` | Yes | Suggest grounded brief answers. |
| `answer_brief_question` | Yes | Answer the exact question bound by get_brief_question's token. |
| `answer_debrief` | Yes | Answer a pending debrief. |
| `edit_brief_instruction` | Yes | Correct one instruction with a required question revision; optionally retain focus. |
| `set_focus` | Yes | Confirm an owner focus against the current Brief basis. |
| `revoke_focus` | Yes | Withdraw focus even while the parent presentation flag is disabled. |
| `reset_memory` | Yes | Reset learned ranking rules after first-party owner approval. |
| `launch_agent` | Yes | Launch the matching agent. |
| `knock_agent_door` | Yes | Knock a public agent door. Zero Credit. |
| `buy_paid_batch` | Yes | Buy a paid match batch after first-party confirm. |
| `reserve_agent_budget_batch` | Yes | Reserve the included agent budget batch. |
| `request_balance_topup_link` | Yes | Mint a provider-free first-party credit top-up URL. Never charges. |
| `modern_request_analysis_link` | Yes | Mint a durable analysis handoff URL. |
| `act_on_negotiation_report` | Yes | Act on a persisted negotiation report. |
| `send_match_message` | Yes | Send a message on an accepted pair. |
| `update_self_settings` | Yes | Update locale and self settings. |
| `update_matching_settings` | Yes | Update closed Matching settings, with an explicit canonical city anchor. |
| `pause_matching` | Yes | Pause Matching without changing Focus. |
| `resume_matching` | Yes | Resume a paused Matching profile without changing Focus. |
