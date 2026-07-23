# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0]

### Added

- Added the static Carillon marketing site: a single vertical-scroll landing page with hero, trust cues, how-it-works, the signal-never-sync principle, features, source protocols, pricing, FAQ and closing call to action.
- Added the content data layer in src/data so sections render from editable arrays, and the outward links in src/config.ts.
- Added the hand-written CSS design system in src/styles with letterpress tokens, no framework and no webfonts.
- Added the Nix flake building the bundle to a static dist/ served by Caddy at the apex.
