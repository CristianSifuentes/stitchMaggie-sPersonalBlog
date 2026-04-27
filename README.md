# Maggie Appleton Portfolio Replica (Educational)

A high-fidelity **educational replica** of [maggieappleton.com](https://maggieappleton.com/), implemented with a modern **React + TypeScript + Vite** stack and a feature-first architecture.

> **Important Notice**
>
> This repository is a **non-commercial educational project** created to study and demonstrate advanced Front-End architecture patterns (and data-layer/back-end design concepts in a mock setup).  
> It is **not affiliated with Maggie Appleton**, and it is **not intended for profit or impersonation**.

---

## Table of Contents

- [Overview](#overview)
- [Original Website](#original-website)
- [Educational Intent & Disclaimer](#educational-intent--disclaimer)
- [Current Project Scope](#current-project-scope)
- [Architecture](#architecture)
  - [Top-Level Structure](#top-level-structure)
  - [Feature Module Pattern](#feature-module-pattern)
  - [Layer Responsibilities](#layer-responsibilities)
- [Tech Stack](#tech-stack)
- [Implemented Pages](#implemented-pages)
- [Data Layer & Mock Backend](#data-layer--mock-backend)
- [Routing Map](#routing-map)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Design System Notes](#design-system-notes)
- [Roadmap](#roadmap)
- [Credits](#credits)
- [License](#license)

---

## Overview

This project replicates the feel, structure, and content model of Maggie Appleton’s website as an architectural exercise in:

- scalable React application design,
- feature-first modularization,
- layered UI/data boundaries,
- reusable composition patterns,
- mock backend/domain modeling for content-driven experiences.

The goal is to showcase **how to build and organize a complex content platform** (portfolio + garden + essays + notes + now log + library + smidgeons stream) with production-minded conventions.

---

## Original Website

- **Original project:** https://maggieappleton.com/

This replica exists to learn from and honor the structure/design philosophy of the original while practicing advanced engineering architecture.

---

## Educational Intent & Disclaimer

- ✅ Educational only.
- ✅ No monetization intent.
- ✅ Demonstrates React and architecture concepts.
- ❌ Not an official Maggie Appleton product.
- ❌ Not intended for commercial usage or brand confusion.

If you are looking for the authentic experience, please visit: **https://maggieappleton.com/**.

---

## Current Project Scope

Implemented as a multi-page content application with unified shell/navigation and route-level modules:

- Home
- Garden index
- Essays collection
- Individual essay reading view
- Notes collection
- Now log
- About page
- Library / Antilibrary
- Smidgeons stream

---

## Architecture

### Top-Level Structure

```txt
src/
├── app/                 # App bootstrap, providers, routes, guards, layout
├── features/            # Domain-focused modules (home, garden, writing, notes, ...)
└── shared/              # Cross-feature primitives (components, hooks, services, types, styles)
```

### Feature Module Pattern

Each feature follows a layered, scalable pattern (as needed per domain):

```txt
features/<feature>/
├── hooks/               # View-facing orchestration hooks
├── services/            # Manager + Repository (use-case + data access)
├── types/               # Feature contracts/types
└── views/               # Route/page and feature UI components
```

### Layer Responsibilities

- **View Layer (`views`, `hooks`)**  
  UI rendering, interaction state, view-level orchestration.

- **Application/Data Use-Case Layer (`services/*Manager`)**  
  Data shaping, feature-level logic, filtering/transformations.

- **Data Access Layer (`services/*Repository`)**  
  Boundary to data source (`httpClient`), API-like contracts.

- **Shared Layer (`shared/*`)**  
  Global shell components, utility hooks, theme store, base types, global styles.

---

## Tech Stack

- **React** (SPA)
- **TypeScript** (strict typing)
- **Vite** (build/dev tooling)
- **React Router** (routing)
- **TanStack Query** (server-state/data fetching patterns)
- **Zustand** (lightweight global theme state)
- **ESLint** (code quality)

---

## Implemented Pages

- `/` → Home
- `/garden` → Garden index (filterable content cards)
- `/garden/essays` → Essays collection
- `/garden/essays/:slug` → Essay detail
- `/garden/notes` → Notes collection
- `/now` → Now timeline/log
- `/about` → About profile page
- `/library` → Library / Antilibrary
- `/smidgeons` → Smidgeons stream

---

## Data Layer & Mock Backend

The project includes a local in-memory mock backend in:

- `src/shared/services/httpClient.ts`

Available endpoints include:

- `/posts`
- `/garden`
- `/essays`
- `/essays/:slug`
- `/notes`
- `/now`
- `/library`
- `/smidgeons`

This provides backend-like contracts while keeping the project self-contained for educational development.

---

## Routing Map

`src/app/config/routes.ts` centralizes route constants for consistency and maintainability.

`src/app/routes/AppRouter.tsx` handles:

- lazy route loading,
- guarded feature routes,
- fallback navigation.

---

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

---

## Scripts

- `npm run dev` → start Vite dev server
- `npm run build` → type-check and build
- `npm run preview` → preview built app
- `npm run lint` → run ESLint
- `npm run typecheck` → run TypeScript checks

---

## Design System Notes

The app uses a shared global styling system in:

- `src/shared/styles/global.css`

It includes:

- theme tokens (light/dark),
- typography scales for editorial layouts,
- reusable section/card/timeline patterns,
- responsive behavior for content-first pages.

---

## Roadmap

Potential next steps:

- richer route-level loading/error boundaries,
- SSR-compatible adaptation path,
- real CMS/API integration,
- accessibility audit pass (landmarks, keyboard nav, contrast tuning),
- test suite (unit + integration + visual regression).

---

## Credits

- Original creative work and website inspiration: **Maggie Appleton**  
  https://maggieappleton.com/

- This codebase: educational architecture + implementation exercise.

---

## License

MIT (for the code in this repository).

> Please respect third-party intellectual property and brand identity when creating replicas.
