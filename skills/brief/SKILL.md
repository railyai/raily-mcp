---
name: brief
description: Set up and tune what the user's Raily agent looks for — the Brief interview, edits to saved answers, a short-term Focus, the match bar, matching settings, pause/resume and launching the agent. Use when the user wants to change who Raily finds for them or how the agent runs.
---

# Raily Brief, Focus and settings

The Brief is who the user is looking for, what they offer and their
deal-breakers. Focus is a short-term priority on top of it.

## Read first

`get_brief`, `get_bar_state`, `get_focus` and `get_agent_settings` show the
current state. Always read before changing: several writes need the versions,
`basis_token` or revision the reads return, so an outdated edit is refused.

## Change

- New or continued interview: `get_brief_question`, then
  `answer_brief_question` with that question's token and the user's own answer.
  `suggest_brief_answers` can propose options; the user picks, you do not.
- One saved answer: `edit_brief_instruction` with the current value and versions.
- Focus: `set_focus` (a week or until removed) or `revoke_focus`.
- Settings: `update_matching_settings` (privacy, area, intent, home city as a
  GeoNames id) and `update_self_settings` (language: en, ru, es, pt-BR, ar).
- Agent: `launch_agent` in a home city, `pause_matching`, `resume_matching`.
- `reset_memory` returns the match bar to its default and clears vetoed and
  prioritized intents; Brief answers are kept. Pass `expected_state` from
  `get_bar_state`. It always needs the owner's approval on railyai.com.

Change only the fields the user asked for, with their words. If the request is
ambiguous, ask. When a write returns an approval link, hand it to the user and
wait. Read back with the matching get tool and report the confirmed result.
