# 🔔 Carillon website [![Matrix](https://img.shields.io/badge/chat-%23pimalaya-blue?style=flat&logo=matrix&logoColor=white)](https://matrix.to/#/#pimalaya:matrix.org) [![Mastodon](https://img.shields.io/badge/news-%40pimalaya-blue?style=flat&logo=mastodon&logoColor=white)](https://fosstodon.org/@pimalaya)

Marketing site for the Carillon watch server

Carillon signals; it never syncs. This is the static landing page served at the apex carillon.pimalaya.org: it presents the product and sends every call to action to the dashboard on the app subdomain. It is a pure brochure with no backend and no runtime configuration.

## Table of contents

- [Installation](#installation)
  - [Nix](#nix)
  - [Sources](#sources)
- [Usage](#usage)
- [License](#license)
- [AI disclosure](#ai-disclosure)
- [Contributing](CONTRIBUTING.md)
- [Social](#social)
- [Sponsoring](#sponsoring)

## Installation

The site is a static bundle any host can serve; Caddy serves it at the apex in production. Build it only to develop it or host your own copy.

### Nix

With the [Flakes](https://nixos.wiki/wiki/Flakes) feature enabled, build the static bundle:

```sh
nix build github:pimalaya/carillon-website
```

The result is a dist/ directory any static host can serve.

### Sources

```sh
git clone https://github.com/pimalaya/carillon-website
cd carillon-website
npm install
npm run build
```

## Usage

Run `npm run dev` for a hot-reloading dev server, `npm run build` for the production bundle, and `npm run preview` to serve that bundle locally. The outward links live in src/config.ts, the section content in src/data, and the design tokens in src/styles/theme.css; CONTRIBUTING.md and the [docs](./docs) folder cover where to edit what.

## License

This project is licensed under either of:

- [MIT license](LICENSE-MIT)
- [Apache License, Version 2.0](LICENSE-APACHE)

at your option.

## AI disclosure

This project is developed with AI assistance. This section documents how, so users and downstream packagers can make informed decisions.

- **Tools**: Claude Code (Anthropic), Opus 4.8, invoked locally with a persistent project-scoped memory and a small set of repo-specific rules.
- **Used for**: Refactors, mechanical multi-file edits, boilerplate (component scaffolding, section data, inline SVGs), copy polish, exploratory design conversations.
- **Not used for**: Engineering, critical code, git manipulation (commit, merge, rebase…), real-world tests.
- **Verification**: Every AI-assisted change is read, type-checked, and built before commit (`npm run build`). Claims made in the copy are checked against the product design, not assumed from the model output.
- **Limitations**: AI models occasionally produce plausible but wrong copy or markup. The verification workflow catches most of this; it does not catch all of it. Bug reports are welcome and taken seriously.
- **Last reviewed**: 23/07/2026

## Social

- Chat on [Matrix](https://matrix.to/#/#pimalaya:matrix.org)
- News on [Mastodon](https://fosstodon.org/@pimalaya) or [RSS](https://fosstodon.org/@pimalaya.rss)
- Mail at [pimalaya.org@posteo.net](mailto:pimalaya.org@posteo.net)

## Sponsoring

[![nlnet](https://nlnet.nl/logo/banner-160x60.png)](https://nlnet.nl/)

Special thanks to the [NLnet foundation](https://nlnet.nl/) and the [European Commission](https://www.ngi.eu/) that have been financially supporting the project for years:

- 2022 → 2023: [NGI Assure](https://nlnet.nl/project/Himalaya/)
- 2023 → 2024: [NGI Zero Entrust](https://nlnet.nl/project/Pimalaya/)
- 2024 → 2026: [NGI Zero Core](https://nlnet.nl/project/Pimalaya-PIM/)
- *2027 in preparation…*

If you appreciate the project, feel free to donate using one of the following providers:

[![GitHub](https://img.shields.io/badge/-GitHub%20Sponsors-fafbfc?logo=GitHub%20Sponsors)](https://github.com/sponsors/soywod)
[![Ko-fi](https://img.shields.io/badge/-Ko--fi-ff5e5a?logo=Ko-fi&logoColor=ffffff)](https://ko-fi.com/soywod)
[![Buy Me a Coffee](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ffdd00?logo=Buy%20Me%20A%20Coffee&logoColor=000000)](https://www.buymeacoffee.com/soywod)
[![Liberapay](https://img.shields.io/badge/-Liberapay-f6c915?logo=Liberapay&logoColor=222222)](https://liberapay.com/soywod)
[![PayPal](https://img.shields.io/badge/-PayPal-0079c1?logo=PayPal&logoColor=ffffff)](https://www.paypal.com/paypalme/soywod)
