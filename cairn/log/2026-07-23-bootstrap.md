---
cairn: log
change: bootstrap
landed: 2026-07-23
---

# Adopt Cairn and seed the spec from the design doc

Adopted the Cairn convention for this repository. Created the `cairn/` root, added the activation surface (`AGENTS.md` with `CLAUDE.md`, Cursor and Copilot pointers), and removed the old `docs/` folder after migrating its content.

Seeded the spec from the former `docs/design.md` as three capabilities, all ADDED: `structure` (single-page composition, data-driven sections, pure brochure, handoff to the app), `styling` (plain CSS, letterpress palette, system fonts, JavaScript-free FAQ, calls to action as anchors), and `pricing` (mirror the billing model, free client and self-hosting, pay per watch through credits, indicative beta pricing).

The design doc's rejected alternatives are recorded here rather than in the spec, which holds current truth only:

- **Plain CSS over Tailwind or a UI kit.** The code stays readable and free of build-time magic, so the site is easy to hand off.
- **Native `details` and `summary` over a scripted accordion.** Accessible and keyboard-friendly with no JavaScript state to manage.
- **System fonts over webfonts.** No font downloads; bespoke fonts can still be swapped in `src/styles/theme.css`.
- **Anchors over buttons for calls to action.** Every action on a static site is a navigation, so the shared `Button` renders an anchor.

This log entry and the `bootstrap` change are the first stones.
