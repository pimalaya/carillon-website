---
cairn: change
id: phone-as-use-case
status: landed
created: 2026-07-23
---

# Frame phones as a use case, not the design target

## Why

Several lines implied Carillon exists *because* phones can't hold a connection
("the connection your phone can't", "your phone was never built to keep", "so your
phone holds none"). That's backwards: Carillon is a general watcher that holds a
standing connection and emits content-free webhooks to any URL — phones just happen
to be a great use case for it.

## What

Reword the "designed-for-phone" lines to be about holding a standing connection
generally, and let phones appear as a use case (a happy fit for push), not the
motivation:

- Hero lead, closing CTA title, how-it-works step 2, the IMAP source blurb, the
  trust-cue chip, and the `<meta name="description">`.
- Leave the genuine use-case mentions (the "Webhook or phone push" feature, the ntfy
  FAQ, the plan feature line) as they are — those already read as use cases.
