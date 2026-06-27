# Shree Reva MSW College Website

A premium university-level website for Shree Reva MSW College, Palanpur, Gujarat, India — built with React + Vite frontend and Express backend.

## Run & Operate

- `pnpm --filter @workspace/reva-msw run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS + Framer Motion + shadcn/ui
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Fonts: Poppins (headings) + Inter (body) via Google Fonts in index.html

## Where things live

- `artifacts/reva-msw/` — Frontend React app (college website)
- `artifacts/api-server/` — Express API server
- `lib/api-spec/openapi.yaml` — OpenAPI contract (source of truth)
- `lib/db/src/schema/` — Drizzle DB schema (notices.ts, contact.ts)
- `lib/api-client-react/src/generated/` — Generated React Query hooks
- `lib/api-zod/src/generated/` — Generated Zod validation schemas

## Architecture decisions

- Frontend-only pages wrap with `<Layout>` component (Navbar + Footer)
- Google Fonts loaded via `<link>` in `index.html`, NOT `@import` in CSS (causes PostCSS error)
- Contact form uses `useSubmitContact` mutation hook with React Hook Form + zod validation
- Notices from DB are shown in the navbar ticker AND on the homepage + /notices page
- Instagram images are linked via official @revamswcollege embed (direct URL loading not possible without auth)

## Product

**Shree Reva MSW College Website** — full-featured premium university website with:
- Homepage with hero, animated stats, about, why-choose-us, course highlights, facilities, activities, Instagram section, live notices, testimonials, Google Maps embed, contact form
- Pages: Home, About, Courses, Faculty, Admissions, Gallery, Notices, Events, Contact
- Live notice board fetched from PostgreSQL via REST API
- Contact/inquiry form that persists submissions to DB
- Scrolling announcement ticker in navbar with real notices

## Color Palette

- Primary: Deep Forest Green `#1B5E20` (HSL 125 67% 24%)
- Accent: Golden Yellow `#F9A825` (HSL 45 96% 56%)
- Background: Off-white `#F8F9FA`
- Dark Footer: `#1a1a2e`

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts `@import` must NOT go inside the Tailwind CSS file — it causes a PostCSS error. Use `<link>` tags in `index.html` instead.
- After schema changes in `lib/db/`, run `pnpm run typecheck:libs` before `pnpm --filter @workspace/api-server run typecheck` or you'll get stale type errors.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
