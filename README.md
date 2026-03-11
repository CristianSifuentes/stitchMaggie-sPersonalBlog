# Stitch Maggie Personal Blog (React 2026-Style Architecture)

A modern React personal-blog storefront inspired by Maggie Appleton's digital-garden style, designed with **enterprise-scalable feature boundaries** and aligned with practical React 2026 patterns:

- Concurrent-first UI behavior
- Route-level code splitting by default
- Server-state orchestration with TanStack Query
- Explicit layering (`view -> hook -> manager -> repository`)
- Feature-first architecture for team ownership

## Table of Contents

- [Tech Stack](#tech-stack)
- [Architecture (Scalable Team Structure)](#architecture-scalable-team-structure)
- [Feature Boundaries](#feature-boundaries)
- [Routing Map](#routing-map)
- [Data and State Flow](#data-and-state-flow)
- [Implemented React 2026 Paradigms](#implemented-react-2026-paradigms)
- [React 2026 Migration Snapshot](#react-2026-migration-snapshot)
- [Security Notes](#security-notes)
- [AI-Powered CLI / MCP Readiness](#ai-powered-cli--mcp-readiness)
- [Getting Started](#getting-started)
- [Build and Quality Commands](#build-and-quality-commands)
- [Current Status](#current-status)
- [Disclaimer](#disclaimer)

## Tech Stack

- React 19 + React DOM 19
- TypeScript (strict mode)
- React Router DOM 7 (`createBrowserRouter`, `RouterProvider`)
- TanStack React Query v5
- Zustand (global UI state)
- Vite 6 + `@vitejs/plugin-react`
- ESLint 9 + `typescript-eslint`
- CSS variables + handcrafted responsive design system

## Architecture (Scalable Team Structure)

```text
src/
  app/
    config/          # central route constants
    guards/          # cross-cutting route/feature guards
    layout/          # application shell
    providers/       # top-level runtime providers (Query, bootstrap)
    routes/          # router composition + lazy route registration
    App.tsx          # provider + suspense composition root
  features/          # isolated business verticals
    home/
    garden/
    writing/
    notes/
    patterns/
    talks/
    podcasts/
    antilibrary/
    now/
    about/
    library/
    smidgeons/
  shared/
    components/      # reusable UI building blocks
    hooks/           # cross-feature hooks
    services/        # infra services (http client, zustand store)
    styles/          # global design system CSS
    types/           # cross-feature domain contracts
  main.tsx           # strict-mode app bootstrap
```

### Feature Module Shape

Most verticals follow the same contract for predictability and future scaling:

```text
features/<feature>/
  hooks/      # feature view-model hooks (react-query + concurrency helpers)
  services/   # repository + manager orchestration
  types/      # feature-local contracts (when needed)
  views/      # route-level UI
```

## Feature Boundaries

- `features/home` - hero + featured content composition
- `features/garden` - unified garden index with typed filters
- `features/writing` - essays collection + essay detail + hover/focus prefetch
- `features/notes` - notes listing
- `features/patterns` - searchable/filterable pattern language
- `features/talks` - talks catalog with stage and kind filters
- `features/podcasts` - podcasts catalog with curated filters
- `features/antilibrary` - research shelf with collection segmentation
- `features/library` - curated books grid
- `features/now` - timeline-style status updates
- `features/smidgeons` - short-form stream content
- `features/about` - static profile section

## Routing Map

- `/` -> Home
- `/garden` -> Garden index
- `/garden/essays` -> Writing collection
- `/garden/essays/:slug` -> Essay detail
- `/garden/notes` -> Notes
- `/garden/patterns` -> Patterns
- `/garden/talks` -> Talks
- `/garden/podcasts` -> Podcasts
- `/garden/antilibrary` -> Antilibrary
- `/library` -> Library
- `/smidgeons` -> Smidgeons
- `/now` -> Now
- `/about` -> About

All route pages are lazily imported and rendered behind a shared Suspense boundary.

## Data and State Flow

Primary runtime flow:

```text
View Component
  -> Feature Hook (React Query + UI state/concurrency)
    -> Manager (business rules / filtering / orchestration)
      -> Repository (endpoint access)
        -> shared/services/httpClient (typed data source abstraction)
```

State model:

- Server state: TanStack Query (`useQuery`, cache, stale/gc tuning)
- UI global state: Zustand (`themeStore`)
- View-local transition state: `useState` + `useTransition`
- Search smoothing: `useDeferredValue` (patterns search)

## Implemented React 2026 Paradigms

- [x] React 19 strict bootstrap (`StrictMode` in `main.tsx`)
- [x] Concurrent UI primitives (`useTransition`, `useDeferredValue`)
- [x] Route-level code splitting (`lazy` + `Suspense`)
- [x] Intent-driven prefetching (`prefetchQuery` on card hover/focus)
- [x] Feature-first architecture with clear ownership boundaries
- [x] Layered domain orchestration (hook/manager/repository)
- [x] Typed server-state integration with TanStack Query v5
- [x] Centralized route contract (`APP_ROUTES`)
- [x] Shared app shell with layout composition (`RootLayout`)
- [x] Accessibility baseline (`aria-label`, `aria-live`, semantic landmarks)
- [x] Theme state via lightweight store + DOM theme sync
- [x] Strict TypeScript + path alias imports (`@/*`)

### Not Yet Implemented (Roadmap Alignment)

- [ ] SSR/streaming/hydration pipeline
- [ ] React Server Components architecture
- [ ] Test runner setup (Vitest + React Testing Library)
- [ ] Tailwind CSS utility layer (currently custom CSS system)
- [ ] CSP + hardened runtime headers in deployment entry

## React 2026 Migration Snapshot

| Legacy Approach | React 2026 Recommended | This Project |
| --- | --- | --- |
| Monolithic folder-by-type app | Feature-first ownership | Implemented |
| Fetching directly in components | Query hooks + domain manager/repository layers | Implemented |
| Synchronous heavy filter updates | Concurrent UI (`useTransition`, `useDeferredValue`) | Implemented |
| Eager route bundle | Route-level lazy loading + Suspense | Implemented |
| Ad hoc global state | Minimal dedicated store (Zustand) for cross-cutting UI state | Implemented |
| No query caching strategy | TanStack Query cache/stale tuning | Implemented |
| Pure CSR forever | SSR/RSC-ready architecture direction | Planned |
| No automated test harness | Vitest + RTL | Planned |

In short: this repository is already **concurrent-ready, feature-oriented, and cache-aware**. The next architectural jump is SSR/RSC plus test infrastructure.

## Security Notes

- No `dangerouslySetInnerHTML` usage in the current app surface.
- Data is rendered through typed React bindings and domain contracts.
- Route access can be constrained through feature guards (`FeatureFlagGuard`).
- Security headers/CSP are not yet configured in this repository and should be added at deployment/runtime boundary.

## AI-Powered CLI / MCP Readiness

This repository is organized for AI-assisted development workflows (including MCP-style tooling) through:

- strict feature directory conventions,
- predictable service and hook layering,
- reusable shared contracts/components,
- centralized route definitions,
- explicit module boundaries that reduce ambiguous edits.

## Getting Started

```bash
npm install
npm run dev
```

## Build and Quality Commands

```bash
npm run build
npm run preview
npm run lint
npm run typecheck
```

## Current Status

- `npm install` succeeded
- `npm run build` succeeded
- Vite development build target is functioning

## Disclaimer

This project is an educational architecture demonstration inspired by Maggie Appleton's digital-garden domain and UI style.

Original inspiration:
- https://maggieappleton.com/
