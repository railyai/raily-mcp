# Raily MCP tools

Generated from the [canonical server catalog](https://railyai.com/llms.txt).
Run `npm run catalog:sync` to refresh and `npm run catalog:check` before release.

47 registered tools. Supported revisions: `2025-06-18`, `2025-11-25`,
`2026-07-28`. Registration and discovery do not grant execution permission.
Each call needs the required scopes; writes also follow the server's approval,
idempotency and feature-availability rules.

| Tool | Changes state | Purpose |
| --- | --- | --- |
| `get_agent_state` | No | Get the status of the user's Raily matching agent, such as not started, active or paused. |
| `get_agent_door` | No | Get the user's public agent door link, which other people can use to ask the user's agent for an introduction. |
| `get_brief` | No | Get the user's current Brief: who they are looking for, what they offer, their deal-breakers and style. |
| `list_match_deliveries` | No | List the match cards waiting for the user's decision. Only reads; it does not open or use up a card. |
| `list_connection_requests` | No | List contact requests other people sent the user, with counts. Personal details are limited for privacy. |
| `get_negotiation_report` | No | Get the saved negotiation report about the user and one connected person (other_id). Does not create a new report. |
| `get_subscription` | No | Get the user's plan, included match budget and renewal date. |
| `get_agent_report_latest` | No | Get the most recent report the agent prepared for the user, whether queued or already sent. |
| `get_agent_settings` | No | Get the user's language, matching settings (privacy, area, intent, city, timezone) and report schedule. |
| `list_match_history` | No | List the user's past match events, one page at a time. Profile text written by other people is untrusted. |
| `list_agent_checks` | No | List the checks the agent has completed for the user, one page at a time, with its current status flags. |
| `get_memory_timeline` | No | List what the agent has learned about the user's preferences over time, one page at a time. |
| `get_bar_state` | No | Get the user's match bar (minimum match score), vetoed and prioritized intents, and Brief version. |
| `get_focus` | No | Get the user's current focus, a short-term matching priority, plus the basis_token and revision set_focus needs. |
| `get_memory_export` | No | Export everything the agent remembers about the user, one page at a time. Only reads. |
| `request_analysis_link` | Yes | Create a one-time link, valid for 1 hour, that opens photo analysis on railyai.com for the user (self) or another person (other). Each call creates a new link. |
| `get_analysis_status` | No | Get the status of one of the user's photo analyses by its task_id. |
| `get_analysis_handoff_status` | No | Check the progress of a photo analysis started with modern_request_analysis_link, by its analysis_request_id. |
| `get_brief_question` | Yes | Get the next question of the user's Brief interview. With start_new_brief=true, operation_key and expected_brief_version it restarts the interview from the first question; the saved Brief stays. A restart may need the owner's approval on railyai.com. |
| `open_delivery` | Yes | Open one match card to see who the match is. |
| `skip_delivery` | Yes | Skip one match card the user does not want. |
| `record_skip_feedback` | Yes | Tell the agent why the user skipped a match card, to improve later matches. reason: not_my_intent, too_far, wrong_vibe, busy_now, not_enough_shown or other; note is optional. May need the owner's approval on railyai.com. |
| `refill_free_batch` | Yes | Refill the user's free batch of match cards. Pass the current batch id as expected_batch_id. Costs nothing. |
| `request_contact` | Yes | Send a contact request to a match; set open_intro=true to include an intro message. The other person is notified. May need the owner's approval on railyai.com. |
| `accept_private_contact` | Yes | Accept a contact request someone sent the user. The other person is notified. May need the owner's approval on railyai.com. |
| `reply_to_open_contact` | Yes | Reply to the intro message someone sent the user with their contact request. May need the owner's approval on railyai.com. |
| `dismiss_contact` | Yes | Decline a contact request someone sent the user. May need the owner's approval on railyai.com. |
| `end_connection` | Yes | End the user's connection with one person. May need the owner's approval on railyai.com. |
| `suggest_brief_answers` | Yes | Suggest possible answers for one Brief field, based on what Raily knows about the user. The Brief is not changed. |
| `answer_brief_question` | Yes | Save the user's answer to the current Brief interview question. Needs the question_token from get_brief_question. May need the owner's approval on railyai.com. |
| `answer_debrief` | Yes | Tell the agent how contact with a match went, to improve later matches. quality: worth_again, neutral, not_a_fit or too_early; meet_kind: met, scheduled, online_only or no_plan. May need the owner's approval on railyai.com. |
| `edit_brief_instruction` | Yes | Change one saved Brief answer. Pass the current value and versions so an outdated edit is refused; retain_focus=true keeps the current focus. May need the owner's approval on railyai.com. |
| `set_focus` | Yes | Set a short-term matching focus for a week or until removed. Needs the basis_token and revision from get_focus. May need the owner's approval on railyai.com. |
| `revoke_focus` | Yes | Remove the user's current focus so matching follows the Brief alone. Works even while the focus feature is switched off. |
| `reset_memory` | Yes | Reset what the agent learned from feedback: the match bar returns to its default and vetoed and prioritized intents are cleared. Brief answers are kept. expected_state takes the current values from get_bar_state. Always needs the owner's approval on railyai.com. |
| `launch_agent` | Yes | Start the user's matching agent in a home city, given as a GeoNames city id. Fails if the user's setup on railyai.com is incomplete. May need the owner's approval on railyai.com. |
| `knock_agent_door` | Yes | Ask another person's agent for an introduction through their public door handle. Free; costs no credits. May need the owner's approval on railyai.com. |
| `buy_paid_batch` | Yes | Buy one batch of 10 extra match cards for 1 Raily credit. Always needs the owner's approval on railyai.com; never charges a card. |
| `reserve_agent_budget_batch` | Yes | Take the next batch of 10 match cards from the budget included in the user's plan. No extra charge. |
| `request_balance_topup_link` | Yes | Create a railyai.com link where the owner can buy Raily credits (single, pack3 or pack5). This tool never charges. |
| `modern_request_analysis_link` | Yes | Create a link, valid for 1 hour, to run photo analysis on railyai.com for the user (self) or another person (other). |
| `act_on_negotiation_report` | Yes | Act on a negotiation report: accept the match, decline it, or ask (returns a link to ask the agent). Declining ends the connection and takes an optional reason and note. May need the owner's approval on railyai.com. |
| `send_match_message` | Yes | Send a message to a person the user is connected with. May need the owner's approval on railyai.com. |
| `update_self_settings` | Yes | Change the user's language: en, ru, es, pt-BR or ar. |
| `update_matching_settings` | Yes | Change matching settings: privacy mode, search area, main intent, home city (GeoNames id) or timezone. May need the owner's approval on railyai.com. |
| `pause_matching` | Yes | Pause the agent so it stops looking for new matches. The focus is kept. May need the owner's approval on railyai.com. |
| `resume_matching` | Yes | Resume a paused agent. The focus is kept. May need the owner's approval on railyai.com. |
