# Nx MFE

A sample repo of a micro frontend architecture using an Nx monorepo.

## Getting Started

Run `npm start` to fire up the apps.

## Recreate This Repo

1. Run `npx create-nx-workspace@latest nxmfe` to create the repo.
2. Add the React schematic to the workspace: `npm i -DE @nrwl/react`.
   Generate a container app: `npx nx g @nrwl/react:app container`.
   Make sure you add React Router to the container.
3. Install more dependencies: `npm i @mui/material @emotion/react @emotion/styled`.
   Create `bootstrap.tsx`, update `main.tsx` and move app-specific code to `App.tsx`.
   Build the Header component and add some dummy routes.
4. Generate the marketing app: `npx nx g @nrwl/react:app marketing`.
   Make sure you add React Router to the marketing app.
   Create `bootstrap.tsx`, update `main.tsx` and move app-specific code to `App.tsx`.
   Update the `root` id in `index.html` to `_marketing-app`.
5. Setup `bootstrap.tsx` with a `mount` function. Render the app using the `mount`
   function if in a development environment.
   Add some special routing logic so the container and marketing apps stay in sync.
   Install the Material Icons: `npm i @mui/icons-material`.
   Build out the Copyright, Landing and Pricing components.
6. Create `webpack.config.js` in both the container and marketing apps.
   Point each app's `webpackConfig` in its respective `project.json` to the appropriate configuration file.
   Make sure to explictly set a unique port for each app.
   Add `decl.d.ts` to container and declare the marketing module.
   Create the MarketingApp component which loads up the MFE. Lazily load the component for the base route.
7. Add the Angular schematic to the workspace: `npm i -DE @nrwl/angular`.
   Generate an auth app: `npx nx g @nrwl/angular:app auth`.
   Make sure you add routing to the auth app.
