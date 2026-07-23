---
cairn: log
change: seo-foundation
landed: 2026-07-23
---

# SEO foundation: pre-render, crawl files, social & structured data

Turned the client-only SPA into a pre-rendered static page and added the full SEO
surface, so classic search, social preview bots, and AI crawlers all see the content.

## Pre-render (the unlock)

`dist/index.html` shipped an empty `<div id="root">`; bots that don't run JS saw
nothing. Now the page is rendered to static HTML at build time and hydrated on the
client:

- `src/entry-server.tsx` — `renderToString(<App/>)` plus a JSON-LD head string.
- `src/main.tsx` — `createRoot().render` → `hydrateRoot`.
- `src/hooks/useScrollReveal.ts` — isomorphic layout effect so the pre-render doesn't
  warn (reveal targets sit below the fold, so hydration-time hiding is off-screen).
- `index.html` — `<!--app-head-->` / `<!--app-html-->` placeholders.
- `prerender.js` — injects the rendered markup + head into `dist/index.html` and
  drops the `dist/server` build artefact.
- `package.json` build — `tsc → vite build → vite build --ssr → node prerender.js`.

Result: `dist/index.html` is ~42 kB of real markup (hero, features, pricing, all 10
FAQs), with the seven JSON-LD `@type`s inline.

## Crawl, social, structured data, housekeeping

- `public/robots.txt` (allow all, incl. AI crawlers) + `public/sitemap.xml`.
- `assets/og-image.svg` → `public/og-image.png` (1200×630, letterpress identity);
  `og:image*`, `og:locale`, and `twitter:*` card tags added to `index.html`.
- `src/seo/structuredData.ts` builds `Organization` / `WebSite` /
  `SoftwareApplication` / `FAQPage` from `src/data` + `src/config`, injected as
  JSON-LD at pre-render time (stays in sync with the page).
- `<title>`/`og:title`/`twitter:title` tuned to "content-free push notifications &
  webhooks" — kept general (not IMAP-narrow); IMAP/CardDAV keywords now reach search
  via the pre-rendered FAQ/sources body copy.
- Raster icons (`apple-touch-icon.png`, `icon-192/512.png`, `favicon-32x32.png`) +
  `public/site.webmanifest`; `public/llms.txt` summary for AI tools.

Follow-up left for the owner (account actions, not code): verify the domain in Google
Search Console + Bing Webmaster Tools and submit the sitemap.

Capability moved: **seo** — new capability, all requirements ADDED (pre-rendered HTML,
crawl directives, social preview metadata, structured data, icons/manifest,
AI-readable summary).
