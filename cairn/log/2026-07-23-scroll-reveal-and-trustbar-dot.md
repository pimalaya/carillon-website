---
cairn: log
change: scroll-reveal-and-trustbar-dot
landed: 2026-07-23
---

# CSS-only scroll reveal + trust-bar middot

**Trust bar.** Replaced the drawn `.trustbar__sep` bar with a `·` middot glyph
(muted `--ink-faint`, bold, non-selectable) and gave `.trustbar` a small `0.5rem`
vertical padding for a touch more breathing room.

**Scroll reveal.** Added a pure-CSS scroll-driven animation in `global.css`: a
`reveal-on-scroll` keyframe (rise + fade in, hold, fade + rise out) bound to an
`animation-timeline: view()` so each content block appears as it enters the viewport
and disappears as it leaves — no JavaScript. Applied to the section headings and the
repeated content blocks (`.how__card`, `.privacy__item`, `.features__card`,
`.sources__card`, `.pricing__card`, `.faq__item`, `.cta__panel`). Double-gated: it
only runs under `prefers-reduced-motion: no-preference` and inside
`@supports (animation-timeline: view())`, so reduced-motion users and browsers
without scroll timelines (Firefox today) see fully-visible, un-animated content.

Capability moved: **styling** — ADDED "Motion is CSS-only and optional". The
trust-bar tweak stays within existing requirements.
