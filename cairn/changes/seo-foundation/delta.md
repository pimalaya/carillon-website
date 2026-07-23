---
cairn: delta
id: seo-foundation
---

## ADDED Requirements

### Requirement: Pre-rendered static HTML
The site SHALL be pre-rendered to static HTML at build time: `dist/index.html` SHALL contain the full page markup (not an empty root), so search engines, social preview bots, and AI crawlers see the content without executing JavaScript. The client SHALL hydrate the pre-rendered markup.

### Requirement: Crawl directives
The site SHALL ship a `robots.txt` that allows all crawlers — including AI crawlers — and references the sitemap, and a `sitemap.xml` listing the canonical URL.

### Requirement: Social preview metadata
The `<head>` SHALL provide a social preview image (1200×630) via `og:image` (with width, height, alt) and the Twitter card tags (`twitter:card=summary_large_image`, title, description, image), in addition to the existing Open Graph tags.

### Requirement: Structured data
The `<head>` SHALL include JSON-LD structured data (`Organization`, `WebSite`, `SoftwareApplication`, and a `FAQPage` built from the FAQ data) reflecting the site content, emitted into the pre-rendered HTML.

### Requirement: Icons and manifest
The site SHALL provide raster icons (`apple-touch-icon.png`, and PNG app icons referenced by a `site.webmanifest`) alongside the SVG favicon.

### Requirement: AI-readable summary
The site SHALL ship an `llms.txt` at the root: a short plain-text/Markdown summary of what Carillon is, its key facts, and links, for AI tools that read it.

## MODIFIED Requirements

## REMOVED Requirements
