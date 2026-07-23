---
cairn: delta
change: bootstrap
---

## ADDED Requirements

### Requirement: Single-page composition
`src/App.tsx` composes the site from ordered, self-contained section components with co-located CSS.

### Requirement: Data-driven sections
Section content lives as editable arrays in `src/data`, rendered by the components.

### Requirement: Pure brochure
The site has no backend, no runtime configuration and no client state, and builds to one static bundle.

### Requirement: Handoff to the app
Every call to action links to the dashboard on the app subdomain.

### Requirement: Plain CSS
Styling is plain CSS with tokens in `src/styles/theme.css` and co-located component rules, no framework.

### Requirement: Letterpress palette
The palette comes from the tokens in `src/styles/theme.css`, carried over from pimalaya.org.

### Requirement: System fonts
The site uses system font stacks and downloads no webfonts.

### Requirement: JavaScript-free FAQ
The FAQ accordion uses native `details` and `summary` elements.

### Requirement: Calls to action are anchors
Every call to action renders as an anchor, not a button.

### Requirement: Mirror the billing model
The pricing section mirrors the live `carillon-backend` billing model rather than restating it.

### Requirement: Free client and self-hosting
The client and self-hosting are free and unmetered.

### Requirement: Pay per watch through credits
Payment is per standing watch through prepaid credits: one credit per watch per month, packs of five, never expiring, not a subscription.

### Requirement: Indicative beta pricing
The numbers are indicative for the private beta, set on value not infrastructure cost.
