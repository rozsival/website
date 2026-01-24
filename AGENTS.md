# AGENTS.md

**AI Assistant Reference**: Essential project information for all AI code assistants.

## Project Overview

Personal website for Vít Rozsíval - Turborepo monorepo with Next.js 16, React 19, TypeScript 5.9.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo + pnpm workspaces
- **i18n**: react-intl (formatjs) via `@rozsival/i18n`
- **Testing**: Vitest, Storybook
- **Linting**: ESLint 9 (flat config), Prettier
- **Git Hooks**: Husky + lint-staged + commitlint (conventional)
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel

## Project Structure

```text
├── apps/
│   ├── web/              # Next.js website (@rozsival/web)
│   └── storybook/        # Component showcase (@rozsival/storybook)
├── packages/
│   ├── i18n/             # Internationalization (@rozsival/i18n)
│   ├── mdx/              # Blog MDX utilities (@rozsival/mdx)
│   ├── theme/            # Design tokens & theming (@rozsival/theme)
│   └── ui/               # Component library (@rozsival/ui)
├── .github/workflows/    # CI/CD pipelines
├── .husky/               # Git hooks
├── turbo.json            # Turborepo config
├── pnpm-workspace.yaml   # Workspace definition
└── package.json          # Root package
```

## Package Manager

**pnpm 10.28.1** (required via `.nvmrc` + `packageManager` field)

**Settings** (from `pnpm-workspace.yaml`):

- `autoInstallPeers: false`
- `engineStrict: true`
- `saveExact: true`
- `strictPeerDependencies: true`

## Turborepo

**Config**: `turbo.json`

**Guidelines**:

- **Always prefer Turborepo** for workspace tasks: Use `pnpm turbo run <task>` instead of `pnpm run <task>`
- **Consult turbo.json** to understand available tasks and their configuration
- **Filter syntax**: Use `--filter=<package>` to run tasks for specific packages
- **Caching**: Turborepo caches task outputs based on inputs (configured in `turbo.json`)

## Node Version

**Node 24.x** (enforced via `.nvmrc` and `package.json` engines)

## Key Commands

```bash
# Development
pnpm dev                    # Start all dev servers (web:3000, storybook:6006)
pnpm build                  # Build all apps/packages
pnpm build:packages         # Build packages only

# Quality Assurance
pnpm qa                     # Type check + lint + format (all packages)
pnpm fix                    # Auto-fix all issues (format + lint + ts)
pnpm test                   # Run tests (Vitest)

# Individual Checks
pnpm ts                     # Type check (TS + root)
pnpm lint                   # Lint check (ESLint)
pnpm format                 # Format check (Prettier)

# Maintenance
pnpm check                  # manypkg workspace validation
pnpm sync                   # Sync TS project references (@apitree.cz/cli)
pnpm cleanup                # Clean build artifacts
```

## Shared Configurations

Using **@apitree.cz** toolbox for consistency:

- **ESLint**: `@apitree.cz/eslint-config` (base, react, nextjs, storybook presets)
- **Prettier**: `@apitree.cz/prettier-config`
- **TypeScript**: `@apitree.cz/ts-config`
- **lint-staged**: `@apitree.cz/lint-staged-config`

### Root config files extend from toolbox

- `eslint.config.js` → uses `defineConfig()` with presets
- `prettier.config.js` → extends `@apitree.cz/prettier-config`
- `tsconfig.json` → extends `@apitree.cz/ts-config`
- `commitlint.config.js` → uses `@commitlint/config-conventional`

## Critical Conventions

### TypeScript

- **Strict mode** enabled
- **Path aliases**: Allowed ONLY in `apps/`, NEVER in `packages/`
- Project references synced via `pnpm sync` (apitree CLI tool)
- All packages must build to `dist/` folder with TypeScript

### ESLint Rules (Modified)

```js
// Custom overrides from root eslint.config.js
'@next/next/no-html-link-for-pages': 'off',
'formatjs/enforce-default-message': 'off',
'react/jsx-props-no-spreading': 'off',
```

### Commits

- **Conventional Commits** enforced via commitlint
- **Husky hooks**: pre-commit (lint-staged) + commit-msg (commitlint)
- Git hooks run automatically on postinstall (unless CI detected)

### Internationalization (i18n)

**Package**: `@rozsival/i18n` (encapsulates react-intl)

**Supported locales**: `en` (default), `cs`

**Server Components**:

```tsx
import { getIntl, formatMessage } from '@rozsival/i18n/server';
const intl = await getIntl(locale);
const text = intl.formatMessage({ id: 'home.hero.title' });
```

**Client Components**:

```tsx
import { useMessages } from '@rozsival/i18n/client';
const { t } = useMessages();
return <h1>{t('home.hero.title')}</h1>;
```

**Message structure**: Hierarchical JSON with dot notation (e.g., `common.navigation.home`)

**Tone (Czech)**: Friendly, informal, tech-savvy

**Emojis**: Prefix for icons/categories, suffix for tone/actions

### Code Style

- **JSDoc**: All single-line comments should be JSDoc format (avoid redundant type info)
- **Components**: Extract logical blocks from JSX into small, well-named sub-components (avoid inline comments)
- **Formatting**: Sentence case for UI text (not title case)

## Deployment

**Platform**: Vercel

**Config** (`vercel.json`):

- Build command: `pnpm turbo build --filter=@rozsival/web`
- Install command: `pnpm install`
- Output: `apps/web/.next`

## CI Pipeline

**File**: `.github/workflows/ci.yml`

**Jobs**:

1. `lint`: workspace check → ESLint → Prettier
2. `typecheck`: TypeScript checks
3. `build`: Full build (runs after lint + typecheck)

**Settings**:

- Triggers: push/PR to `main`
- Concurrency: Cancel in-progress on new push
- Uses Turborepo remote caching (if `TURBO_TOKEN` configured)

## Apps

### @rozsival/web

- Next.js 16 website with App Router
- MDX support for blog
- Workspace dependencies: `@rozsival/{i18n,mdx,theme,ui}`
- Runs on port 3000 in dev

### @rozsival/storybook

- Component showcase using Storybook
- Runs on port 6006 in dev

## Packages

### @rozsival/i18n

- Server + client i18n utilities
- Exports: `./server`, `./client`, `./messages/*`
- Built with TypeScript to `dist/`
- Messages: `src/messages/{en,cs}.json`

### @rozsival/theme

- Design tokens and dark mode support
- CSS variables and theme utilities

### @rozsival/ui

- Shared component library
- Shadcn-inspired components

### @rozsival/mdx

- MDX blog utilities and components

## Development Workflow

1. **Install**: `pnpm install` (triggers postinstall hooks)
2. **Develop**: `pnpm dev` (starts web + storybook)
3. **Before commit**: `pnpm qa` or `pnpm fix`
4. **Commit**: Use conventional commits (enforced)
5. **Push**: CI runs lint → typecheck → build

## Important Notes

- **No TypeScript path aliases in packages** (only allowed in apps)
- **formatjs linting**: Plugin enabled to prevent untranslated strings
- **Workspace validation**: `manypkg check` runs on postinstall
- **Project references**: Auto-synced via `pnpm sync` on postinstall
- **Build order**: Packages build first (dependency graph respected by Turborepo)
