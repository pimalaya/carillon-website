---
cairn: spec
capability: structure
status: current
---

# Structure

The Carillon marketing site is one single-page, vertical-scroll landing page. Each section is a self-contained component under `src/components` with its own co-located CSS file, and `src/App.tsx` composes them in order. Section content is data rather than markup: the files under `src/data` hold editable arrays that the components render. The site is a pure brochure that hands every call to action off to the dashboard on the app subdomain.

### Requirement: Single-page composition
The site SHALL be a single vertical-scroll page that `src/App.tsx` composes from self-contained section components, each living under `src/components` with a co-located CSS file.

#### Scenario: Section order
- GIVEN the landing page
- WHEN `src/App.tsx` renders
- THEN the sections appear in order: hero, trust cues, how-it-works, the signal-never-sync principle, features, source protocols, pricing, FAQ, closing call to action, footer

### Requirement: Data-driven sections
Section content SHALL live as editable arrays in `src/data`, one file per section, rendered by the components.

#### Scenario: Adding an item
- GIVEN a plan, source or FAQ to add
- WHEN the matching array in `src/data` gains an entry
- THEN the section renders the new item with no markup change

### Requirement: Pure brochure
The site SHALL have no backend, no runtime configuration and no client state beyond native browser behaviour, and SHALL build to one static bundle in `dist/`.

### Requirement: Handoff to the app
Every call to action SHALL link to the dashboard on the app subdomain. This site owns the apex, and the app's welcome page handles magic-link sign-in.

### Requirement: Positioning — general watcher, phone as a use case
Copy SHALL present Carillon as a general watcher that holds a standing connection and emits signed, content-free webhooks to any URL. Phone push (e.g. via ntfy) MAY be highlighted as a use case that fits well, but copy SHALL NOT frame phones as the product's design target, nor imply Carillon exists because phones cannot hold a connection.
