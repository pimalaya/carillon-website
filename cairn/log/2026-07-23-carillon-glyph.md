---
cairn: log
change: carillon-glyph
landed: 2026-07-23
---

# Adopt a single carillon-bell glyph across the brand

Replaced the three hand-drawn bell paths with one shared carillon glyph (a ringing
bell with sound waves, Material-Symbols style, viewBox `0 -960 960 960`) so the mark
is identical everywhere it appears:

- `public/favicon.svg` — flat terracotta accent (`#b64d2c`) rounded square, no
  gradient, bell filled in warm paper (`#fdfaf1`), scaled down for padding.
- `src/components/ui/Logo.tsx` — wordmark bell, inheriting `--accent` (and `--brass`
  on dark). Dropped the now-unused `logo__clapper` element and its CSS rules.
- `src/components/SignalFlow.tsx` — the flow-diagram bell node, inheriting
  `currentColor`.

Capability moved: **styling** — ADDED the "Single carillon glyph" requirement.

The background is a raw palette color rather than a gradient, per the brief, keeping
the letterpress identity.
