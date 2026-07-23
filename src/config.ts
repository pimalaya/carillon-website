/*
 * Central place for outward-facing links and copy that repeats across sections.
 * Swap these once the real dashboard / repo / social accounts exist.
 */

export const site = {
  name: 'Carillon',
  domain: 'carillon.pimalaya.org',
  tagline: 'It watches your remotes and chimes — it never syncs.',

  links: {
    // The dashboard (carillon-frontend + API) is live on the app subdomain; this
    // marketing site owns the apex (carillon.pimalaya.org). Every "Start free" /
    // "Get early access" / "Open dashboard" CTA sends the visitor to the app,
    // whose welcome page handles magic-link sign-in.
    app: 'https://app.carillon.pimalaya.org',
    getStarted: 'https://app.carillon.pimalaya.org',
    github: 'https://github.com/pimalaya',
    selfHostGuide: 'https://github.com/pimalaya',
    docs: 'https://github.com/pimalaya',
    architecture:
      'https://github.com/pimalaya/.github/blob/master/ARCHITECTURE.md',
    pimalaya: 'https://pimalaya.org',
    mastodon: 'https://fosstodon.org/@pimalaya',
    matrix: 'https://matrix.to/#/#pimalaya:matrix.org',
    email: 'mailto:carillon@pimalaya.org',
  },
} as const
