---
cairn: log
change: phone-as-use-case
landed: 2026-07-23
---

# Frame phones as a use case, not the design target

Reworded the copy that implied Carillon exists *because* phones can't hold a
connection. Carillon is a general watcher that holds a standing connection and emits
content-free webhooks to any URL; phones are simply a great use case.

Changed lines:

- **Hero lead** — "holds the live connection your phone can't" → "holds a live
  connection to your accounts around the clock".
- **Closing CTA** — "a connection your phone was never built to keep" → "a connection
  you were never meant to keep".
- **How-it-works step 2** — now "the kind of standing connection that's impractical to
  hold yourself, and a battery-killer on a phone" (phone as an example, not the
  reason).
- **IMAP source blurb** — "so your phone holds none" → "so nothing on your side has
  to".
- **Trust chip** — "Battery-free push" → "No background app" (device-agnostic).
- **`<meta name="description">`** — dropped "the IMAP IDLE connection your phone
  can't"; now "holds a live connection to your accounts".

Left the genuine use-case mentions untouched — the "Webhook or phone push" feature,
the ntfy FAQ, and the plan feature line already read as use cases, not design intent.

Capability moved: **structure** — ADDED "Positioning — general watcher, phone as a
use case".
