---
cairn: delta
id: one-shot-staggered-reveal
---

## ADDED Requirements

## MODIFIED Requirements

### Requirement: Scroll reveal is one-shot, staggered, and works in all major browsers
Content blocks SHALL reveal (fade + rise) the first time they scroll into view and then remain — a one-shot reveal with no reverse or re-animation. It SHALL work in all major browsers via an `IntersectionObserver` that flips a state class once and then stops watching that block; the motion itself SHALL be a CSS transition, not scripted in JavaScript. Blocks sharing a visual row (e.g. cards in a grid row) SHALL cascade left-to-right with a fixed per-column delay. The reveal SHALL be disabled under `prefers-reduced-motion`, and the hidden state SHALL be applied only by the reveal script, so content stays fully visible when it does not run (no JS, or reduced motion).

## REMOVED Requirements
