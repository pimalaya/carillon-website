---
cairn: delta
id: scroll-reveal-and-trustbar-dot
---

## ADDED Requirements

### Requirement: Motion is CSS-only and optional
Scroll-driven reveal/hide animation SHALL be pure CSS (a `view()` animation
timeline) with no JavaScript. It SHALL be disabled under `prefers-reduced-motion`
and SHALL degrade to fully-visible content where scroll timelines are unsupported,
so content is never hidden when the animation cannot run.

## MODIFIED Requirements

## REMOVED Requirements
