---
cairn: delta
id: scroll-reveal-firefox-fallback
---

## ADDED Requirements

## MODIFIED Requirements

### Requirement: Motion works in all major browsers, motion stays in CSS
Scroll-driven reveal/hide animation SHALL work in all major browsers. Where a browser
supports scroll timelines (`animation-timeline: view()`), the animation SHALL run
purely in CSS. Where it does not (Firefox today), a minimal `IntersectionObserver`
MAY toggle a state class, but the motion itself SHALL remain a CSS transition — no
animation is scripted in JavaScript. The reveal SHALL be disabled under
`prefers-reduced-motion`, and the hidden state SHALL be applied only by the fallback
script, so content stays fully visible when neither path runs (no JS, or reduced
motion).

## REMOVED Requirements
