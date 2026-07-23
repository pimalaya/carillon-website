---
cairn: log
change: copy-and-pricing-accuracy
landed: 2026-07-23
---

# De-IMAP the copy and make pricing honest

Broadened the page away from inbox/IMAP-only wording and corrected pricing claims that
did not match the implemented billing behaviour, plus a round of requested visual polish.

**Copy (structure/content).** Hero headline "Real-time push for your inbox" → "…for your
remotes"; lead dropped the "IMAP IDLE" / "reads your mail" specifics for "the live
connection" / "a watched account" / "your data". Free-tier feature line "IMAP IDLE,
real-time" → "Real-time push".

**Pricing.** Removed the false "Unlimited watches" from the metered pay-as-you-go tier
(billing is per watch, self-metering) → "Add as many watches as you fund"; clarified the
pack line to "Prepaid credits, €10 packs of 5". Corrected the free grant to the real
behaviour — the first watch (service) per account runs free for **7 days** (an earlier
pass had wrongly written "one free month"). Hero note now reads "First watch free for 7
days".

**Visual.** Whiter sticky header (`rgba(255,255,255,0.86)`); stripped the `ol` marker and
indent from both the hero flow diagram (now centred) and the how-it-works grid (numbering
stays in the `.how__index` badges); replaced the trust-bar dots with short horizontal-bar
separators between items and added padding.

**Footer.** Contact now `pimalaya.org@posteo.net`; copyright is the real author,
"© 2026 Clément Douin", not "Carillon".

Capability moved: **pricing** — ADDED "Claims match implemented behaviour". The styling
and structure changes stay within existing requirements.
