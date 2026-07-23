{
  description = "Carillon website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            typescript-language-server
          ];
        };

        # The built marketing site (a static `dist/`), served by Caddy
        # file_server at the apex (carillon.pimalaya.org). `nix build` ->
        # ./result = the dist root (index.html at its top level).
        packages.default = pkgs.buildNpmPackage {
          pname = "carillon-website";
          version = "0.1.0";
          src = ./.;
          npmDepsHash = "sha256-VD1Y5IY2FLVVcVRZPShqA6W9L5txF3M9Y/6d5pNuev4=";

          # Static brochure: no runtime API. Outward links are baked into the
          # source (src/config.ts), so there is no build-time env to set.

          # `npm run build` == `tsc --noEmit && vite build` => ./dist.
          installPhase = ''
            runHook preInstall
            cp -r dist $out
            runHook postInstall
          '';

          meta.description = "Marketing site for the Carillon watch server";
        };
      });
}
