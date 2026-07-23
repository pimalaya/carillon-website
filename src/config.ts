/* Outward links and repeated copy; edit these first when they move. */

export const site = {
  name: 'Carillon',
  domain: 'carillon.pimalaya.org',
  tagline: 'It watches your remotes and chimes — it never syncs.',

  links: {
    // App subdomain holds the dashboard; this site owns the apex. Every CTA
    // sends the visitor to the app, which handles magic-link sign-in.
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
