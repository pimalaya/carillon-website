---
cairn: change
id: one-shot-staggered-reveal
status: landed
created: 2026-07-23
---

# One-shot, staggered scroll reveal

## Why

The reveal replayed every time a block crossed the viewport (it faded back out on
the way past and re-ran on return). Requested behaviour: reveal once on the way
down and then leave it — no reversing. And row-mate cards currently pop in all at
once; they should cascade left-to-right for a livelier entrance.

## What

- Make the reveal one-shot: the observer adds `.in-view` and then `unobserve`s the
  block, so it never reverses or re-animates.
- Drop the pure-CSS `view()` timeline path entirely — a continuously-scrubbed scroll
  timeline can't be one-shot (it always reverses). Drive the reveal through the
  `IntersectionObserver` in every browser; the motion stays a CSS transition.
- Stagger row-mates: measure each block's row (shared `offsetTop`) and column
  (`offsetLeft` order) and set a `--reveal-delay` of `column × 100ms`, so the
  leftmost is 0ms, next 100ms, next 200ms, etc.
- Keep the guarantees: disabled under `prefers-reduced-motion`; hidden state added
  only by the script, so content stays visible with JS off.
