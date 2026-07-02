# Site personnel — Nicolas Samier

Site vitrine de [Nicolas Samier](https://nicolas-samier.fr), développeur web fullstack : portfolio, prestations freelance et point de contact (CDI & freelance).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + [React 19](https://react.dev)
- TypeScript 5 strict
- Tailwind CSS v4
- Vitest 4 + React Testing Library
- ESLint 9 + Prettier 3 + Husky (pre-commit lint-staged)
- GitHub Actions (lint, typecheck, format, tests, build sur chaque push/PR)

## Démarrer en local

```bash
pnpm install
pnpm dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Commandes

```bash
pnpm dev              # serveur de dev (Turbopack)
pnpm build             # build de production
pnpm start             # serveur de production (après build)

pnpm verify            # lint + typecheck + format:check + test + build
pnpm verify:quick      # verify sans le build

pnpm lint              # ESLint
pnpm typecheck         # tsc --noEmit
pnpm format             # Prettier --write
pnpm test               # Vitest (run unique)
```

## Structure

```
src/
├── app/                # Routes (App Router) : accueil, services, à-propos, réalisations, contact, pages légales
├── components/
│   ├── ui/              # Composants primitifs (Button, Pill, Highlight...)
│   ├── layout/           # Header, Footer, navigation mobile
│   └── sections/         # Sections de page (Hero, Services, Stack, FAQ...)
├── data/                # Données statiques (projets)
└── lib/                 # Config SEO partagée (metadata, JSON-LD)
public/
└── stickers/            # Illustrations SVG/PNG custom
```

Design néo-brutalisme soft pastel — détails dans [AGENTS.md](./AGENTS.md).
