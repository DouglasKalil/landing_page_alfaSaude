# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Dev server on http://localhost:3000
pnpm build      # Build client (Vite) + server (esbuild) → dist/
pnpm start      # Run production build (NODE_ENV=production)
pnpm check      # TypeScript type-check (no emit)
pnpm format     # Prettier
```

Package manager is **pnpm**. There are no automated tests configured (vitest is installed but unused).

## Architecture

Single-page landing page for Alfa Saúde healthcare company. No client-side routing — all sections are assembled in `client/src/App.tsx` as a vertical scroll narrative.

**Path aliases** (defined in `vite.config.ts` and `tsconfig.json`):
- `@/` → `client/src/`
- `@shared/` → `shared/`

**Key directories:**
- `client/src/components/alfasaude/` — All editable page sections (Hero, Services, FAQ, Footer, etc.). This is where almost all content changes happen.
- `client/src/components/ui/` — shadcn/ui primitives (Radix UI wrappers). Avoid editing these.
- `client/public/assets/` — Static images (logos, institutional photos, partner logos).
- `shared/` — Constants shared between client and server (`COOKIE_NAME`, `ONE_YEAR_MS`).
- `server/` — Minimal Express server that serves the built static files in production.

**Tech stack:** React 19, TypeScript, Vite 7, Tailwind CSS v4 (`@tailwindcss/vite`), Framer Motion for animations, wouter for routing, shadcn/ui components.

## Brand / Design tokens

Colors used throughout inline styles and Tailwind classes:
- Primary green: `#258D83`
- Dark teal / headings: `#183F46`
- Body text: `#48656B`
- Accent red: `#C92045`
- Background: `#F9FCFB`

Sections use `framer-motion` with a consistent `fadeUp` pattern — see `HeroSection.tsx` for the canonical implementation.

## Content / links

WhatsApp and Instagram URLs are hardcoded at the top of the section files that use them (e.g., `HeroSection.tsx`, `FloatingWhatsApp.tsx`). Update them there directly.
