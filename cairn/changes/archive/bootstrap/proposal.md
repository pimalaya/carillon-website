---
cairn: change
id: bootstrap
status: landed
created: 2026-07-23
---

# Adopt Cairn and seed the spec from the design doc

## Why
The site's architecture and settled decisions lived in a `docs/` folder whose `design.md` mixed current truth with the alternatives rejected along the way. Cairn keeps those apart: a living spec for current truth, reviewable change proposals, and a dated log for history and rationale.

## What
Create a `cairn/` root at the repository root. Seed the spec from the existing design as three capabilities, `structure`, `styling`, and `pricing`, keeping only current truth and moving the rejected alternatives into the log. Add the Cairn activation files so agents follow the convention here. Remove the old `docs/` folder and update the README and CONTRIBUTING references.
