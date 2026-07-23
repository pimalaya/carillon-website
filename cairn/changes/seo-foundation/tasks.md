---
cairn: tasks
id: seo-foundation
---

# Tasks

## 1. Pre-render (SSG)
- [x] `src/entry-server.tsx` renders `App` + JSON-LD head string
- [x] `src/main.tsx` switches to `hydrateRoot`
- [x] `useScrollReveal` uses an isomorphic layout effect (no SSR warning)
- [x] `index.html` gains `<!--app-head-->` and `<!--app-html-->` placeholders
- [x] `prerender.js` injects rendered HTML + head into `dist/index.html`
- [x] `package.json` build runs client → ssr → prerender

## 2. Crawl files
- [x] `public/robots.txt` (allow all incl. AI bots) + sitemap ref
- [x] `public/sitemap.xml`

## 3. Social
- [x] `public/og-image.png` (1200×630) from the bell/terracotta identity
- [x] `og:image*`, `og:locale`, `twitter:*` tags in `index.html`

## 4. Structured data
- [x] `src/seo/structuredData.ts` builds Organization / WebSite / SoftwareApplication / FAQPage
- [x] Injected as JSON-LD at pre-render time

## 5. Housekeeping
- [x] Keyword-tuned `<title>` / `og:title` / `twitter:title` (kept general)
- [x] PNG icons: `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `favicon-32x32.png`
- [x] `public/site.webmanifest`
- [x] `public/llms.txt`

## Close
- [x] Build green, content present in `dist/index.html`
- [x] Fold spec, write log entry

## Follow-up (out of scope, account actions)
- [ ] Verify domain in Google Search Console + Bing Webmaster Tools, submit sitemap
