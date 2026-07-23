---
cairn: log
change: scroll-reveal-firefox-fallback
landed: 2026-07-23
---

# Make the scroll reveal work in Firefox

The scroll reveal had shipped as a pure-CSS `view()` timeline, which only runs in
Chromium and Safari 26+. Firefox has no scroll-timeline support (flagged off), so the
`@supports` guard disabled it there and the effect did nothing — reported in testing.

Added a feature-detected fallback that keeps the CSS path where it works:

- `src/hooks/useScrollReveal.ts` — a `useLayoutEffect` hook that returns early under
  `prefers-reduced-motion` or when `CSS.supports('animation-timeline', 'view()')`.
  Otherwise it tags the same content blocks with `.reveal-io` (before paint, so no
  flash) and runs one `IntersectionObserver` (rootMargin `-10%`) that toggles
  `.in-view` on enter/leave for appear + disappear.
- `App` calls the hook once.
- `global.css` gained `.reveal-io` / `.reveal-io.in-view` transition rules (the
  fade/rise is a CSS transition; JS only flips the class).

The hidden state is applied only by the fallback script, so with JS disabled — or
under reduced motion — every block stays fully visible; nothing can get stuck hidden.

Capability moved: **styling** — MODIFIED the motion requirement from "CSS-only, no
JS" to "works in all major browsers; motion stays in CSS, with a minimal
IntersectionObserver fallback where scroll timelines are absent".
