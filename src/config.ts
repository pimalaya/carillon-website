/*
 * Central place for outward-facing links and copy that repeats across sections.
 * Swap these once the real dashboard / repo / social accounts exist.
 */

export const site = {
  name: 'Carillon',
  domain: 'carillon.pimalaya.org',
  tagline: 'It watches your remotes and chimes — it never syncs.',

  // These are placeholders during the design/beta stage. Point them at the real
  // dashboard and repository when they exist.
  links: {
    app: 'https://carillon.pimalaya.org/app', // the future dashboard
    getStarted: 'mailto:carillon@pimalaya.org?subject=Carillon%20early%20access',
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
