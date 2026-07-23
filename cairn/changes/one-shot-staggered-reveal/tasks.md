---
cairn: tasks
id: one-shot-staggered-reveal
---

# Tasks

- [x] Make reveal one-shot (add `.in-view`, then `unobserve`)
- [x] Remove the `view()` timeline path and keyframes; observer drives all browsers
- [x] Compute row/column stagger and set `--reveal-delay` (column × 100ms)
- [x] Apply `transition-delay: var(--reveal-delay)` in CSS
- [x] Keep reduced-motion opt-out and no-JS visibility
- [x] Fold styling spec (MODIFY the motion requirement), write log entry
