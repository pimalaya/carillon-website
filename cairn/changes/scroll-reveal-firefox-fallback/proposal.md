---
cairn: change
id: scroll-reveal-firefox-fallback
status: landed
created: 2026-07-23
---

# Make the scroll reveal work in Firefox

## Why

The scroll reveal landed as a pure-CSS `view()` timeline, which only runs in
Chromium and Safari 26+. Firefox has no scroll-timeline support (it sits behind an
`about:config` flag), so the `@supports` guard correctly disabled it there — and the
effect did nothing in Firefox. The requirement is now that the reveal works in all
major browsers.

## What

- Keep the pure-CSS `view()` path where it's supported (best quality, no JS work).
- Add a minimal `IntersectionObserver` fallback (`useScrollReveal`) used only when
  `animation-timeline: view()` is unsupported. It tags blocks with `.reveal-io` and
  toggles `.in-view`; the fade/rise itself stays a CSS transition.
- Preserve the guarantees: disabled under `prefers-reduced-motion`, and — because
  the hidden state is added by JS — content stays fully visible if JS never runs.
