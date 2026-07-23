---
cairn: change
id: carillon-glyph
status: landed
created: 2026-07-23
---

# Single carillon-bell glyph across the brand

## Why

The brand used three different hand-drawn bell paths (favicon, wordmark, signal-flow
diagram), and the favicon sat on a gradient. The ask: one consistent carillon-bell
glyph everywhere — including the favicon — on a flat, raw palette colour, keeping the
solarized/letterpress identity.

## What

- Adopt one carillon-bell glyph (a ringing bell with sound waves, viewBox
  `0 -960 960 960`) for the favicon (`public/favicon.svg`), the wordmark
  (`src/components/ui/Logo.tsx`), and the signal-flow diagram
  (`src/components/SignalFlow.tsx`).
- Favicon on a flat terracotta accent background (no gradient), bell in warm paper;
  in-page instances inherit palette tokens. Drop the now-unused clapper element.
