# Design

The settled design of the Carillon marketing site and the alternatives rejected along the way.

## Shape

One single-page, vertical-scroll landing page. Each section is a self-contained component under src/components with its own co-located CSS file, composed in order by src/App.tsx: hero, trust cues, how-it-works, the signal-never-sync principle, features, source protocols, pricing, FAQ, closing call to action, footer. Section content is data, not markup: the src/data files hold editable arrays that the components render, so adding a plan, a source or an FAQ is an array append.

The site is a pure brochure. It has no backend, no runtime configuration and no client state beyond native browser behaviour. Every call to action links to the dashboard on the app subdomain; this site owns the apex and hands off to the app, whose welcome page handles magic-link sign-in.

## Decisions

Plain CSS over Tailwind or a UI kit: the code stays readable and free of build-time magic, so the site is easy to hand off. The letterpress palette (warm paper, brown ink, terracotta accent) carries over from pimalaya.org, with tokens in src/styles/theme.css.

Native details and summary for the FAQ accordion: accessible and keyboard-friendly with no JavaScript state to manage.

System font stacks (serif for display, system sans for UI): no webfont downloads. Swap to bespoke fonts in src/styles/theme.css if ever wanted.

All calls to action render as anchors, not buttons: every action on a static site is a navigation, so the shared Button renders an anchor.

Pricing mirrors the live billing model in carillon-backend (docs/BILLING_MODEL.md) rather than restating it: the client and self-hosting are free and unmetered, and you pay per standing watch through prepaid credits, one credit for one watch for one month, sold in packs of five. Not a subscription; credits never expire. The numbers are indicative for the private beta and set on value, not infrastructure cost.
