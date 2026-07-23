# Contributing guide

Thank you for investing your time in contributing to Carillon.

Whether you are a human or an AI agent, read these in order before touching the code:

1. the [Pimalaya README](https://github.com/pimalaya) for what the project is and how its repositories stack;
2. the [Pimalaya CONTRIBUTING](https://github.com/pimalaya/.github/blob/master/CONTRIBUTING.md) guide, which chains to the shared architecture and guidelines;
3. the [cairn/](./cairn) folder, which follows the [Cairn](https://github.com/pimalaya/cairn) convention: `spec/` is the current design of this site, `changes/` holds in-flight proposals, and `log/` the dated history. `AGENTS.md` at the root is the activation stanza.

Everything below documents only what differs from the Pimalaya standards.

## A static marketing site, not a Rust crate

This repository is a Vite, React and TypeScript static site, not a Rust crate: it publishes no rustdoc, ships no Cargo.toml or deny.toml, and the crate-oriented rules (lib.rs header, no-std, public-item naming) do not apply. It has no backend, no runtime configuration and no tests; it builds to one static bundle in dist/, served by Caddy at the apex.

## Node toolchain

Development runs through npm: `npm install` once, then `npm run dev` for the dev server, `npm run build` for the production bundle (type-check plus Vite build), and `npm run preview` to serve that bundle. The Nix flake provides a devshell with the pinned Node, and its packages.default builds the static bundle reproducibly.

## Where to edit what

The outward links and repeated copy live in src/config.ts, edited first when the dashboard, repository or social accounts move. Section content lives in src/data, one file per section, rendered from arrays. Section order and which sections show live in src/App.tsx. Styling is plain CSS with the tokens in src/styles/theme.css, each component keeping its rules in a co-located CSS file; there is no CSS framework and no webfonts.
