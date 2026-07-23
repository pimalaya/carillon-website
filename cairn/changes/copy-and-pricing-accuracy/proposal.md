---
cairn: change
id: copy-and-pricing-accuracy
status: landed
created: 2026-07-23
---

# De-IMAP the copy and make pricing honest

## Why

Two problems surfaced on review:

1. **The page reads as IMAP-only.** Carillon watches any remote (mail today, contacts,
   more as protocols ship) and turns a change into a real-time, content-free
   notification/webhook. The hero and several feature lines pinned it to "your inbox"
   and "IMAP IDLE", narrowing the product.
2. **The pricing overstated the product.** The pay-as-you-go tier claimed "Unlimited
   watches", which is false — billing is per watch, self-metering, one credit per
   watch-month. The free tier described a trial that does not match the implemented
   behaviour (the first service registered per account runs free for **7 days**).

## What

- Generalise the hero headline and lead away from inbox/IMAP wording.
- Correct the plan copy: drop "Unlimited watches" on the metered tier, state the real
  7-day first-watch grant, and de-IMAP the free-tier feature line.
- Visual polish requested alongside: whiter sticky header; centre the hero flow
  diagram (strip the `ol` indent/marker); swap the trust-bar dots for horizontal-bar
  separators with more padding; strip the `ol` marker from the how-it-works grid.
- Footer: point contact at `pimalaya.org@posteo.net` and set copyright to the real
  author (Clément Douin), not "Carillon".
