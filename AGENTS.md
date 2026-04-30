<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Site personnel Nicolas Samier

Site vitrine multi-usage : portfolio dev fullstack freelance + boutique de templates Notion + page contact (CDI/freelance). Cible : recruteurs, clients freelance, acheteurs de templates Notion.

Repo : `Weylland/site-perso` (public). Maquette de référence visuelle : `../site-perso-maquettes/` (dossier frère, source de vérité pour le rendu).

## Mentor mode (PRIORITÉ ABSOLUE)

L'utilisateur **apprend** Next.js / TypeScript / React / Tailwind sur ce projet. Il **écrit le code lui-même**. L'IA agit comme **mentor**, pas comme exécutant.

### Ce que l'IA fait

- Expliquer les concepts AVANT qu'il écrive
- Décrire la structure d'un composant (props, types, hiérarchie JSX) qu'il remplit
- Donner les classes Tailwind / CSS directement (il préfère, c'est verbeux et peu éducatif)
- Décrire les cas de tests, le laisser écrire
- Relire et corriger après écriture
- Modifier mécaniquement quand explicitement demandé (formatting, fix d'erreur, classe à ajouter)

### Ce que l'IA NE fait PAS

- Écrire des composants `.tsx` from scratch à sa place
- Coder l'intégration Stripe, les API routes, l'auth à sa place
- Faire les setups techniques sans expliquer ce qui se passe

### Ce que l'IA peut prendre en charge totalement

- Documentation (README, CLAUDE.md, AGENTS.md, HANDOFF.md)
- Stratégie SEO, contenu marketing, copy
- Recherche technique (compare libs, analyse APIs)
- Mémoire projet, planning, tâches
- Modifications de fichiers de config (eslint, prettier, ci.yml) si demandé

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** (ref est un prop normal, pas de `forwardRef`)
- **TypeScript 5** strict
- **Tailwind CSS v4** (`@theme inline`, `@utility`, CSS nesting natif)
- **Vitest 4** + **React Testing Library** + **jsdom** + **@testing-library/jest-dom**
- **ESLint 9** flat config + **eslint-config-prettier**
- **Prettier 3**
- **Husky 9** + **lint-staged 16**
- **GitHub Actions** (1 job "Quality checks")
- **pnpm 10** comme package manager

## Commandes

```bash
pnpm dev              # serveur de dev (Turbopack, port 3000)
pnpm build            # build production
pnpm start            # serveur prod (après build)

pnpm verify           # lint + typecheck + format:check + test + build (tout sauf dev)
pnpm verify:quick     # verify sans le build (plus rapide en itération)

pnpm lint             # ESLint
pnpm lint:fix         # ESLint avec auto-fix
pnpm typecheck        # tsc --noEmit
pnpm format           # Prettier --write (modifie les fichiers)
pnpm format:check     # Prettier --check (lecture seule, exit 1 si non formaté)
pnpm test             # Vitest run (1 fois)
pnpm test:watch       # Vitest mode interactif
pnpm test:ui          # Vitest UI (nécessite @vitest/ui non installé pour l'instant)
```

Toujours lancer `pnpm verify` avant un commit qui dépasse un fix trivial. Le pre-commit hook (Husky + lint-staged) ne fait que lint/format sur les fichiers staged, il ne lance ni typecheck ni tests ni build.

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Layout racine (html, body, fonts, Header, Footer)
│   ├── page.tsx            # Page d'accueil (compose les sections)
│   ├── page.test.tsx       # Tests de la page d'accueil
│   ├── globals.css         # Tokens design + keyframes + utilities custom
│   └── favicon.ico
├── components/
│   ├── ui/                 # Composants primitifs (Button, Pill, Highlight)
│   ├── layout/             # Layout (Header, Footer)
│   └── sections/           # Sections de pages (Hero, Marquee, ...)
public/
└── stickers/               # SVG stickers (laptop, bolt, gears, star, ...)

vitest.config.ts            # Config Vitest (jsdom, alias @/, globals)
vitest.setup.ts             # Import @testing-library/jest-dom/vitest
.vscode/settings.json       # formatOnSave + Prettier par défaut + ignore @-rules CSS
.husky/pre-commit           # pnpm lint-staged
.github/workflows/ci.yml    # Job "Quality checks" sur push/PR
```

Alias TypeScript : `@/*` → `src/*`.

## Design system

Néo-brutalisme soft pastel. Source de vérité visuelle : `../site-perso-maquettes/maquette.css` (`:root` block).

### Palette (CSS variables → utilities Tailwind auto)

- `cream` / `cream-2` — fond principal
- `sunshine` / `sunshine-2` — CTA, surlignage feutre
- `peach` / `peach-2` — logo NS, accents chauds
- `mint` / `mint-2` — accents
- `sky` / `sky-2` — accents
- `ink` / `ink-soft` — texte + bordures

### Polices (next/font auto-héberge)

- **Space Grotesk** (`font-display`) — h1-h4, logo, eyebrow, pills
- **Inter** (`font-sans`) — body, UI, CTAs
- **Fraunces** (`font-serif`) — italique pour `<em>` dans h1/h2

### Tokens visuels

- Bordures : `border-[2.5px]` (standard), `border-[4px]` (épaisses)
- Ombres brutalistes : `shadow-brutal-sm` (2px), `shadow-brutal` (4px), `shadow-brutal-lg` (8px), `shadow-brutal-xl` (12px) — toutes en offset solide vers ink
- Pas de `border-radius` (brutalisme strict)

### Hover patterns signature

- **Boutons** : `translate(4px, 4px)` + shadow disparaît (sensation "le bouton s'enfonce")
- **Pills** : `translate(-2px, -2px)` + shadow grandit de 2px à 4px (sensation "le pill se soulève")
- **Logo NS** : translate + `rotate(-4deg)` + bg passe de peach à sunshine

### Effets globaux

- Grain SVG fixed sur tout le viewport via `body::before` (mix-blend-mode multiply, opacity 0.25)
- Animations entrée Hero : fade-in-up staggered (0.05s → 0.55s)
- Marquee infinie : track dupliqué + translateX 0 → -50%
- Stickers Hero : float (translate Y) + spin-slow sur le star
- CTA primary Hero : subtle-pulse (shadow 4px → 8px → 4px en boucle)

## Conventions

### Commits — Conventional Commits

`feat`, `fix`, `chore`, `docs`, `test`, `refactor`, `ci`, `style`. Scope optionnel : `feat(button): ...`. Sujet en anglais, court, à l'impératif.

### Composants

- **Server Component par défaut**. `"use client"` uniquement si state / events DOM / hooks de cycle.
- **Named export** : `export function Button(...)`. Évite les `export default`.
- **Types des props** : intersection avec `React.ComponentProps<"button">` plutôt que redéclarer les attributs HTML un par un.
- **Default values** dans la déstructuration des props : `function Button({ variant = "secondary", ... })`.
- **`...rest` spread** sur l'élément racine pour forwarder les attributs HTML.
- **`className` extrait du rest** pour pouvoir le merger avec les classes internes.
- **`type="button"` par défaut** sur les `<button>` (sinon HTML default `submit` cause des bugs dans les forms).

### CSS / Tailwind v4

- Tokens dans `@theme inline { ... }` au top de `globals.css`. Tailwind expose chaque variable comme utilité automatiquement (`--color-cream` → `bg-cream`, `text-cream`, `border-cream`).
- Patterns réutilisés (eyebrow, marquee-item, nav-link, highlight-\*) → `@utility name { ... }` avec CSS nesting (`&::after`, `&:hover::after`).
- Animations : `@keyframes name { ... }` puis utiliser via arbitrary value `animate-[name_duration_easing_iteration]`.
- **Pattern d'alignement de section** : `<section bg/border>` full width, contenu dans `<div className="max-w-7xl mx-auto px-8">`. **Jamais** de `px-*` directement sur la `<section>` (sinon le bg/border ne couvre pas toute la largeur ET les sections ne s'alignent pas avec le Header).
- Breakpoints custom : `min-[820px]:...` arbitrary value plutôt qu'un nouveau breakpoint dans la config.
- Polices via fallback toujours : `var(--font-inter), system-ui, sans-serif`.

### Tests

- Fichiers `*.test.tsx` à côté du composant.
- Préférer `getByRole` à `getByText` quand l'élément a une sémantique claire.
- `it.todo("...")` pour matérialiser une dette de test sans la cacher.
- **Ne pas** tester les classes Tailwind ni les animations (fragile, peu de valeur).
- Tester : présence de contenu sémantique, hrefs des liens, attributs critiques (`target`, `rel`), interactions (clicks via `@testing-library/user-event`).

### Accessibilité

- `aria-hidden` sur tous les éléments décoratifs purs (flèches `→`, gradients radiaux, séparateurs visuels).
- `target="_blank"` toujours accompagné de `rel="noopener noreferrer"`.
- Sémantique HTML correcte : `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` avec `aria-label` quand pertinent.

## CI / GitHub

- Workflow : `.github/workflows/ci.yml`, déclenché sur push et PR vers `main`.
- 1 job `Quality checks` sur `ubuntu-latest`, Node 22, pnpm 10, cache pnpm.
- Steps : checkout, setup pnpm, setup Node, install `--frozen-lockfile`, lint, typecheck, format:check, test, build.
- Pas de branch protection activée pour l'instant — push direct sur `main`. À activer quand on passera au workflow PR (phase intégration des pages).

## Liens

- Repo : https://github.com/Weylland/site-perso
- Maquettes HTML/CSS de référence : `../site-perso-maquettes/`
- HANDOFF complet (objectifs, personas, contenu, design tokens) : `../site-perso-maquettes/HANDOFF.md`
