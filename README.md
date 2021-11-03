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
