---
cairn: spec
capability: styling
status: current
---

# Styling

The site is styled with plain CSS and no framework. Design tokens live in `src/styles/theme.css`, and each component keeps its rules in a co-located CSS file. The look is the letterpress palette carried over from pimalaya.org, set in system fonts with no webfont downloads.

### Requirement: Plain CSS
Styling SHALL be plain CSS with no CSS framework or UI kit. Tokens SHALL live in `src/styles/theme.css`, and each component SHALL keep its rules in a co-located CSS file.

### Requirement: Letterpress palette
The palette (warm paper, brown ink, terracotta accent) SHALL come from the tokens in `src/styles/theme.css`, carried over from pimalaya.org.

### Requirement: System fonts
The site SHALL use system font stacks, serif for display and system sans for UI, and SHALL NOT download webfonts. Bespoke fonts, if ever wanted, are swapped in `src/styles/theme.css`.

### Requirement: JavaScript-free FAQ
The FAQ accordion SHALL use native `details` and `summary` elements, with no JavaScript state to manage.

### Requirement: Calls to action are anchors
Every call to action SHALL render as an anchor rather than a button. The shared `Button` renders an anchor.

### Requirement: Single carillon glyph
The brand SHALL use one carillon-bell glyph (a ringing bell with sound waves, viewBox `0 -960 960 960`) everywhere it appears: the favicon (`public/favicon.svg`), the wordmark (`src/components/ui/Logo.tsx`), and the signal-flow diagram (`src/components/SignalFlow.tsx`). The favicon SHALL sit on a flat terracotta accent background with no gradient, the bell filled in warm paper; in-page instances SHALL inherit palette tokens.

### Requirement: Motion works in all major browsers, motion stays in CSS
Scroll-driven reveal/hide animation SHALL work in all major browsers. Where a browser supports scroll timelines (`animation-timeline: view()`), the animation SHALL run purely in CSS. Where it does not (Firefox today), a minimal `IntersectionObserver` MAY toggle a state class, but the motion itself SHALL remain a CSS transition — no animation is scripted in JavaScript. The reveal SHALL be disabled under `prefers-reduced-motion`, and the hidden state SHALL be applied only by the fallback script, so content stays fully visible when neither path runs (no JS, or reduced motion).
