---
cairn: log
change: one-shot-staggered-reveal
landed: 2026-07-23
---

# One-shot, staggered scroll reveal

Turned the reveal into a one-shot and added a left-to-right cascade for row-mates.

**One-shot.** The `IntersectionObserver` now adds `.in-view` on first intersect and
immediately `unobserve`s the block, so it reveals once on the way down and never
reverses or replays. The pure-CSS `view()` timeline path (and its keyframes) was
removed — a continuously-scrubbed scroll timeline can't be one-shot, it always
reverses — so the observer now drives the reveal in every browser. The motion is
still a CSS transition; JS only flips the class.

**Stagger.** `useScrollReveal` groups the target blocks by parent, then by visual
row (shared `offsetTop`, which transforms don't affect), orders each row by
`offsetLeft`, and sets `--reveal-delay: column × 100ms`. `global.css` applies it via
`transition-delay: var(--reveal-delay, 0ms)`, so a grid row's cards fade in
left-to-right at 0 / 100 / 200 ms. Standalone blocks (section headings, stacked list
items) stay at 0ms.

Guarantees unchanged: skipped under `prefers-reduced-motion`, and the hidden
`.reveal-io` state is added only by the script, so content stays visible with JS off.

Capability moved: **styling** — MODIFIED the motion requirement to one-shot +
staggered + all-browser (dropping the CSS-timeline-where-supported wording).
