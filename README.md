# Carillon — website

Marketing landing page for **Carillon**, the content-free push service for your
PIM (see `../CARILLON_PLAN.md` and `../CARILLON_WEBSITE_PLAN.md`).

This is a static, single-page React + TypeScript prototype built with Vite. It has
no backend and no dependencies beyond React — the dashboard / signup app is a
separate product surface and lives elsewhere.

## Run it

```sh
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build
```

Node 18+ is recommended.

## How it's organised

```
src/
├── main.tsx              # React entry point
├── App.tsx               # composes the page — section order lives here
├── config.ts             # outward links + repeated copy (edit these first)
├── styles/
│   ├── theme.css         # design tokens: colours, fonts, radii, shadows
│   └── global.css        # resets, base typography, shared layout helpers
├── data/                 # page content, kept out of the components
│   ├── steps.ts          #   "How it works" steps
│   ├── features.ts       #   feature grid
│   ├── sources.ts        #   source-protocol grid + statuses
│   ├── plans.ts          #   pricing plans
│   └── faqs.ts           #   FAQ entries
└── components/
    ├── ui/               # small reusable primitives
    │   ├── Button.tsx    #   link styled as a button (variants + sizes)
    │   ├── Container.tsx #   max-width wrapper
    │   ├── Icon.tsx      #   inline-SVG icon set
    │   ├── Logo.tsx      #   bell + wordmark
    │   └── SectionHeading.tsx
    └── *.tsx / *.css     # one file pair per page section (Nav, Hero, …)
```

Each component keeps its styles in a co-located `.css` file, imported at the top of
the component. There is no CSS framework — just plain CSS with the tokens from
`theme.css`. To restyle, start there.

## Editing content

- **Links & shared copy** — `src/config.ts`. The call-to-action links are
  placeholders (`mailto:` and the Pimalaya GitHub org) for the design/beta stage;
  point them at the real dashboard and repository when they exist.
- **Section content** — the `src/data/*.ts` files. Add a plan, a source, or an FAQ
  by appending to the relevant array; the components render whatever's there.
- **Section order / which sections show** — `src/App.tsx`.

## Notes / decisions

- **Plain CSS over Tailwind or a UI kit** — keeps the code readable and free of
  build-time magic, so it's easy to hand off. The Pimalaya "letterpress" palette
  (warm paper, brown ink, terracotta accent) is carried over from `pimalaya.org`.
- **The FAQ** uses native `<details>`/`<summary>` — accessible, no JS state.
- **The pricing** mirrors the live billing model in `carillon-server`
  (`docs/BILLING_MODEL.md`) and `carillon-admin`: free client + self-host, pay only
  for the standing watch via prepaid credits — 1 credit = one watch for one month,
  sold in packs of 4 (€2.50 each). Not a subscription; credits never expire. Numbers
  are indicative for the private beta.
- **Fonts** use system stacks (serif for display, system sans for UI) so there are
  no webfont downloads. Swap to bespoke fonts in `theme.css` if desired.
