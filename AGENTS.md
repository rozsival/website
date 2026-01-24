# AGENTS.md

**AI Assistant Reference**: Essential project information for all AI code assistants.

## Project Overview

Personal website for Vít Rozsíval built with modern web technologies in a Turborepo monorepo.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo + pnpm workspaces
- **i18n**: Custom wrapper around react-intl (`@rozsival/i18n`)
- **Content**: MDX for blog posts (`@rozsival/mdx`)
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
├── turbo.json            # Turborepo task configuration
├── pnpm-workspace.yaml   # Workspace definition
└── package.json          # Root package with scripts
```

## Package Manager & Node Version

**Package Manager**: See `packageManager` field in root `package.json`  
**Node Version**: See `.nvmrc` and `engines.node` in root `package.json`  
**pnpm Settings**: See `pnpm-workspace.yaml` for workspace configuration

## Turborepo Task Execution

### ⚠️ CRITICAL: Always use Turborepo for running tasks

### Why Turborepo?

- **Parallel execution**: Runs tasks across packages simultaneously
- **Smart caching**: Skips unchanged work based on inputs/outputs
- **Dependency-aware**: Respects package dependency graph
- **Remote caching**: Can share cache across team/CI (if configured)

### Task Configuration

**See `turbo.json`** for complete task definitions including:

- Task dependencies (`dependsOn`)
- Cache outputs (`outputs`)
- Cache behavior (`cache`)
- Input specifications (`inputs`)

### Command Patterns

```bash
# Run task across all packages
pnpm turbo run <task>

# Run task for specific package
pnpm turbo run <task> --filter=@rozsival/web

# Run task for app and its dependencies
pnpm turbo run <task> --filter=@rozsival/web...

# Run task for multiple packages
pnpm turbo run <task> --filter=./packages/*
```

### Available Root Scripts

**Consult `package.json` scripts section for the complete, up-to-date list.**

Common patterns:

```bash
# Development
pnpm run dev                 # Start all dev servers
pnpm run dev:web             # Start only web app
pnpm run dev:storybook       # Start only storybook

# Building
pnpm run build               # Build all apps/packages
pnpm run build:packages      # Build packages only

# Quality Checks
pnpm run qa                  # Type + lint + format checks
pnpm run fix                 # Auto-fix all issues
pnpm run test                # Run tests

# Individual Tasks
pnpm run ts                  # Type check
pnpm run lint                # Lint check
pnpm run format              # Format check

# Maintenance
pnpm run check               # Workspace validation (manypkg)
pnpm run sync                # Sync TS project references
pnpm run cleanup             # Clean build artifacts
```

## Shared Configurations

Using **@apitree.cz** toolbox for consistency across projects:

- **ESLint**: `@apitree.cz/eslint-config`
- **Prettier**: `@apitree.cz/prettier-config`
- **TypeScript**: `@apitree.cz/ts-config`
- **lint-staged**: `@apitree.cz/lint-staged-config`

Root config files extend from toolbox configs.

## Critical Conventions

### TypeScript

- **Strict mode** enabled
- **Path aliases**: Allowed ONLY in `apps/`, NEVER in `packages/`
  - Use relative imports in packages for better portability
- **Project references**: Auto-synced via `pnpm sync` (runs on postinstall)
- All packages build to `dist/` with TypeScript
- Build artifacts tracked via `tsconfig.tsbuildinfo`

### ESLint Custom Rules

See `eslint.config.js` for custom rule overrides. Currently disabled rules:

- `formatjs/enforce-default-message`: off (we use custom i18n patterns)
- `react/jsx-props-no-spreading`: off (needed for component composition)

### Commits

- **Conventional Commits** enforced via commitlint
- **Husky hooks**:
  - `pre-commit`: lint-staged (format + lint changed files)
  - `commit-msg`: commitlint (validate commit message)
- Git hooks auto-install on postinstall (unless CI detected)

### Internationalization (i18n)

**Package**: `@rozsival/i18n` (custom wrapper around react-intl)

**Supported locales**: `en` (default), `cs`

**Type-safe message keys**: `MessageKey` type exported for autocomplete

#### Server Components

```tsx
import { getMessages, parseLocale } from '@rozsival/i18n/server';

const { t } = getMessages(parseLocale(locale));
const title = t('home.hero.title');

// For metadata (returns string, not ReactNode)
const { formatString } = getMessages(parseLocale(locale));
const metaTitle = formatString('home.hero.title');
```

#### Client Components

```tsx
import { useMessages } from '@rozsival/i18n/client';

const { t } = useMessages();
return <h1>{t('home.hero.title')}</h1>;
```

#### Message Structure

- Hierarchical JSON with dot notation: `common.navigation.home`
- English messages in `packages/i18n/src/messages/en.json`
- Czech messages in `packages/i18n/src/messages/cs.json`

#### Czech Tone

- Friendly, informal ("ty" form)
- Tech-savvy but accessible
- Professional yet approachable

#### Emoji Usage

- Prefix for icons/categories
- Suffix for tone/actions

### Blog Content (MDX)

**Package**: `@rozsival/mdx`

**Multi-language Support**: Posts organized as `content/blog/[slug]/[locale].md`

Example structure:

```text
content/blog/
  └── welcome/
      ├── en.md
      └── cs.md
```

**API**:

```tsx
import { getAllPosts, getPostBySlug } from '@rozsival/mdx';

// Get posts for specific locale
const posts = await getAllPosts(postsDir, 'en');

// Get specific post
const post = await getPostBySlug(postsDir, 'welcome', 'en');
```

**Features**:

- Automatic slug extraction from directory name
- Locale inferred from filename (no frontmatter needed)
- Reading time calculation
- Backward compatible with flat file structure
- Filters unpublished posts in production

### Code Style

- **JSDoc**: Use for non-obvious logic (avoid redundant type info)
- **Components**: Extract logical blocks into small sub-components
- **Text casing**: Sentence case for UI text (not title case)
- **Formatting**: Prettier handles all formatting automatically

### Page Types

**Reusable types for Next.js pages with locale support:**

```tsx
import type { LocalePageProps, LocaleLayoutProps } from '@/types/locale';

// Page with locale param
export default async function Page({ params }: LocalePageProps) {
  const { locale } = await params;
}

// Page with additional params
export default async function Post({ params }: LocalePageProps<{ slug: string }>) {
  const { locale, slug } = await params;
}

// Layout with locale param
export default async function Layout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
}
```

## Deployment

**Platform**: Vercel

**Config**: See `vercel.json`

- Build command uses Turborepo filtering
- Install command: `pnpm install`
- Output directory: `apps/web/.next`

## CI Pipeline

**File**: `.github/workflows/ci.yml`

**Jobs**: lint → typecheck → build (sequential with caching)

**Settings**:

- Triggers: push/PR to `main`
- Concurrency: Cancels in-progress runs on new push
- Remote caching: Enabled if `TURBO_TOKEN` configured

## Apps

### @rozsival/web

Next.js 16 website (App Router) with MDX blog support

- **Port**: 3000 (dev)
- **Dependencies**: All workspace packages
- **Features**: i18n, MDX blog, dark mode, SSG

### @rozsival/storybook

Component showcase and documentation

- **Port**: 6006 (dev)
- **Purpose**: Visual testing and documentation

## Packages

**All packages build to `dist/` using TypeScript**

### @rozsival/i18n

Server + client i18n utilities wrapping react-intl

- **Exports**: `./server`, `./client`
- **Types**: `MessageKey`, `Locale`
- **Functions**: `getMessages()`, `parseLocale()`, `useMessages()`

### @rozsival/mdx

Blog content utilities with multi-language support

- **Structure**: Modular (`types.ts`, `parser.ts`, `posts.ts`, `utils.ts`)
- **Features**: MDX parsing, post retrieval, locale filtering
- **Supports**: Directory-based and flat file structures

### @rozsival/theme

Design tokens and dark mode support

- CSS variables for theming
- Theme provider and utilities

### @rozsival/ui

Shared component library

- Shadcn-inspired components
- Accessible, composable, customizable

## Development Workflow

1. **Install**: `pnpm install` (auto-runs hooks + validation)
2. **Develop**: `pnpm run dev` (starts all dev servers)
3. **Make changes**: Edit code with type-safe autocomplete
4. **Before commit**: `pnpm run qa` or `pnpm run fix`
5. **Commit**: Conventional commits (auto-validated)
6. **Push**: CI validates → builds → caches

## Important Notes

- **Always use Turborepo**: Prefer `pnpm turbo run <task>` over individual commands
- **Check turbo.json**: For task configuration and dependencies
- **No path aliases in packages**: Maintain portability
- **Workspace validation**: `manypkg check` ensures consistency
- **Build order**: Turborepo respects dependency graph automatically
- **TypeScript references**: Auto-synced, don't manually edit
- **Consult repo files**: Package versions, settings in respective config files
