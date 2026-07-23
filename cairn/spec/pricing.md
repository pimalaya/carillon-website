---
cairn: spec
capability: pricing
status: current
---

# Pricing

The pricing section mirrors the live billing model in `carillon-backend` rather than restating it, so the site and the product never drift. The client and self-hosting are free and unmetered, and a user pays per standing watch through prepaid credits.

### Requirement: Mirror the billing model
The pricing section SHALL mirror the live billing model in `carillon-backend` (`cairn/spec/billing.md`) rather than restate it.

### Requirement: Free client and self-hosting
The client and self-hosting SHALL be presented as free and unmetered.

### Requirement: Pay per watch through credits
Users SHALL pay per standing watch through prepaid credits: one credit for one watch for one month, sold in packs of five. It SHALL NOT be a subscription, and credits SHALL never expire.

### Requirement: Indicative beta pricing
The numbers SHALL be indicative for the private beta, set on value rather than infrastructure cost.

### Requirement: Claims match implemented behaviour
The pricing copy SHALL reflect the implemented billing behaviour and SHALL NOT overstate it. The metered pay-as-you-go tier SHALL NOT be described as "unlimited". The free grant SHALL be described as it is implemented: the first watch (service) registered on a Carillon account runs free for 7 days.
