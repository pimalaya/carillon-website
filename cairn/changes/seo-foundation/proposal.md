---
cairn: change
id: seo-foundation
status: landed
created: 2026-07-23
---

# SEO foundation: pre-render, crawl files, social & structured data

## Why

The site is a client-rendered React SPA: `dist/index.html` ships an empty
`<div id="root">` and all content is injected at runtime. Social preview bots and
most AI crawlers don't run JavaScript, so they see nothing — and classic search
engines pay a crawl/render penalty. The site also lacks the standard SEO surface:
no `robots.txt`, no `sitemap.xml`, no social preview image, no Twitter card tags, no
structured data.

Carillon is a pure brochure with no runtime data, so it can be pre-rendered to static
HTML at build time, which unblocks classic search, social previews, and AI crawling
all at once. AI crawlers are welcome (marketing reach), so `robots.txt` allows all.

## What

Execution order (highest leverage first):

1. **Pre-render (SSG).** Render `App` to static HTML at build time with
   `react-dom/server`; hydrate on the client. Content ships in `dist/index.html`.
2. **Crawl files.** `public/robots.txt` (allow all, incl. AI bots) + `public/sitemap.xml`.
3. **Social.** A 1200×630 `og-image.png` from the bell/terracotta identity, plus
   `og:image*` and `twitter:*` card tags.
4. **Structured data.** JSON-LD (`Organization`, `WebSite`, `SoftwareApplication`,
   `FAQPage`) generated from `src/data` + `src/config`, injected at pre-render time.
5. **Housekeeping.** Keyword-tuned `<title>` (kept general, not IMAP-narrow), PNG
   icons + `apple-touch-icon`, `site.webmanifest`, and an `llms.txt` summary for AI
   tools.

Google Search Console / Bing verification is an account action, out of scope for
code; noted for follow-up.

## Notes

- Title stays general per earlier positioning feedback (Carillon is not IMAP-only);
  IMAP/CardDAV keywords now reach search via the pre-rendered FAQ/sources body copy.
- The scroll reveal remains a client enhancement; its targets sit below the fold, so
  hydration-time hiding is off-screen and not visible.
