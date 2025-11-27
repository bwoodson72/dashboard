<!-- .github/copilot-instructions.md -->
# Copilot / AI Agent Instructions — dashboard-demo

Short, actionable notes to make AI coding agents productive in this repository.

- Context: This is a Next.js (App Router) demo dashboard using React 19, Next 16, Redux Toolkit (RTK), RTK Query, MUI, TanStack React Query (optional), and Prisma. The project mixes server and client components under `src/app`.

Quick commands
- Install: `npm install`
- Dev server: `npm run dev` (Next.js app)
- Build: `npm run build` then `npm run start`
- Tests: `npm test` (vitest), or `npm run test:run` for CI
- Storybook: `npm run storybook` (dev) and `npm run build-storybook`
- Prisma: `npm run postinstall` invokes `prisma generate`. To seed, use the configured prisma seed (check `prisma/seed.ts`) or run `npx prisma db seed`.

High-level architecture (what to know)
- App Router: Application pages and API routes live under `src/app`. Top-level layout is `src/app/layout.tsx` which composes theme + providers.
- State management: The Redux store is defined in `src/app/store.ts` and provided via `src/components/reduxProvider.tsx`. Slices live under `src/features/*` (e.g. `darkMode`, `sidePanel`).
- API layer(s): RTK Query service `dashApi` is at `src/features/api/apiSlice.ts` and uses a base URL of `/api/` (so client calls go to Next.js API routes under `src/app/api/*`). Example: `useGetCustomerSummaryQuery` queries `customers/search?search=${name}`.
- React Query: There is a `QueryProvider` at `src/components/queryProvider.tsx` (uses `@tanstack/react-query`); it's available for use but not automatically wired into `layout.tsx`. Verify whether to wrap pages with it when adding react-query usage.
- Prisma and DB: Prisma schema at `prisma/schema.prisma`. Generated client output is `src/generated/prisma` (generator configured). Environment variables `DATABASE_URL` and `DIRECT_URL` are expected for the datasource—check CI/dev envs.

Project-specific patterns & conventions
- 'use client' marker: Files that interact with browser-only APIs or React hooks include `'use client'` at the top (see `src/app/store.ts`, many component files). Respect server vs client boundaries when moving code into the App Router.
- Providers placed in root layout: `src/app/layout.tsx` composes `ReduxProvider` + `ClientTheme` + MUI `CssBaseline`. When adding global providers, prefer adding them here.
- API naming: RTK Query endpoints and hooks live in `src/features/api/apiSlice.ts`. New endpoints should be added to this service where appropriate.
- Generated code: `prisma generate` writes to `src/generated/prisma` — do not edit generated files directly.
- Mock data: Customer mock data and small fixtures live under `src/app/customers/mockCustomers.ts`. Use these for unit tests and storybook stories when appropriate.

Testing and Storybook notes
- Vitest is configured in `vitest.config.ts` with `jsdom` environment and Storybook integration; tests live under `src/**/*.{test,spec}.{ts,tsx}`. Run `npm test` locally.
- Storybook is configured (see `.storybook/` if present). Storybook tests are wired into Vitest via `@storybook/addon-vitest` (see `vitest.config.ts`).

Where agents should double-check before changing things
- When modifying API routes under `src/app/api/*`, remember RTK Query `baseQuery` is `/api/`. Ensure both server route and client hook signatures match.
- When touching Redux slices, update `src/app/store.ts` to register reducers and middleware (RTK Query's `dashApi.middleware` must be concatenated).
- When changing the DB schema, run `npx prisma generate` and check generated client imports (`src/generated/prisma`). Also run any seed scripts and migrations locally.
- If adding React Query usage, either add `QueryProvider` to `layout.tsx` or wrap the specific component tree that needs it.

Examples (copy/paste)
- Call the customer search hook (RTK Query):
  - `const { data } = useGetCustomerSummaryQuery('alice');` (service: `src/features/api/apiSlice.ts`)
- Add a slice to the store:
  - Add `import { mySlice } from '@/features/myFeature/mySlice';` and include in `reducer:{ myFeature: mySlice.reducer }` inside `src/app/store.ts`.

Files to inspect first (important entrypoints)
- `src/app/layout.tsx` — root layout and providers
- `src/app/store.ts` — redux store configuration
- `src/features/api/apiSlice.ts` — RTK Query service
- `src/components/queryProvider.tsx` and `src/components/reduxProvider.tsx` — provider helpers
- `prisma/schema.prisma` — database schema
- `package.json` — scripts and dependencies

If something's unclear
- Ask the human: clarify which environment (local, CI, staging), DB connection string (DATABASE_URL), or intended runtime (Edge vs Node serverless). When unsure about wiring providers, prefer leaving layout changes as a minimal opt-in and request confirmation.

––––
Please review and tell me if you'd like examples expanded (tests, storybook stories, or prisma seed instructions). I can iterate this file based on additional project-specific workflows or CI details.
