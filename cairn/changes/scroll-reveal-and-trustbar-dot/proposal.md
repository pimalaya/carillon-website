---
cairn: change
id: scroll-reveal-and-trustbar-dot
status: landed
created: 2026-07-23
---

# CSS-only scroll reveal + trust-bar middot

## Why

Two polish requests:

1. The trust-bar separators (short horizontal bars) should be middot characters
   instead, and the band wants a little more internal breathing room.
2. Content blocks should appear as they scroll into view and disappear as they
   leave — but without JavaScript, keeping the site's no-JS ethos intact.

## What

- Swap `.trustbar__sep` from a drawn bar to a `·` glyph; add small vertical padding
  to `.trustbar`.
- Add a pure-CSS scroll-driven reveal (a `view()` animation timeline) that fades and
  rises each content block in on entry and back out on exit. Gated on
  `prefers-reduced-motion` and `@supports (animation-timeline: view())`, so
  reduced-motion users and unsupported browsers (Firefox today) just see everything.
