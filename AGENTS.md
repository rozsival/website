# AGENTS.md

AI assistant reference for Vít Rozsíval's personal website (Turborepo monorepo).

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo + pnpm workspaces
- **i18n**: `@rozsival/i18n` (react-intl wrapper)
- **Content**: `@rozsival/mdx` (supports `.md`/`.mdx`)
- **Testing**: Vitest, Storybook
- **Tooling**: ESLint 9, Prettier, Husky, commitlint
- **CI/CD**: GitHub Actions → Vercel

## Structure

```text
apps/
  web/           # Next.js website (@rozsival/web, port 3000)
  storybook/     # React + Vite (custom .storybook/, port 6006)
packages/
  i18n/          # Server/client i18n (@rozsival/i18n)
  mdx/           # Blog utilities (@rozsival/mdx)
  theme/         # Design tokens (@rozsival/theme)
  ui/            # Component library (@rozsival/ui)
```

## Task Execution

### ⚠️ CRITICAL: Use Turborepo for Filtered Tasks

Always use `pnpm turbo run --filter` (not `pnpm run --filter`) to ensure dependencies build first:

```bash
# ✅ Turborepo handles dependency graph
pnpm turbo run build --filter=@rozsival/web
pnpm turbo run build --filter=@rozsival/web...  # Include dependencies

# ❌ Bypasses dependency awareness
pnpm run build --filter=@rozsival/web
```

### Root Scripts

Use `pnpm run <script>` for repo-wide tasks. See `package.json` for full list.

```bash
pnpm run dev              # All dev servers
pnpm run build            # Build everything
pnpm run qa               # Type + lint + format
pnpm run fix              # Auto-fix issues
pnpm run test             # Run tests
```

## Conventions

### TypeScript

- Strict mode enabled
- **Path aliases**: `apps/` only, NEVER in `packages/` (use relative imports)
- Project references auto-synced via `pnpm sync`
- All packages build to `dist/`

### Commits

- Conventional Commits enforced (commitlint)
- Pre-commit: lint-staged | Commit-msg: commitlint

### Shared Configs

Extends `@apitree.cz/*` toolbox: `eslint-config`, `prettier-config`, `ts-config`, `lint-staged-config`

## i18n (`@rozsival/i18n`)

**Locales**: `en` (default), `cs`

**Server**:

```tsx
import { getMessages, parseLocale } from '@rozsival/i18n/server';
const { t, formatString } = getMessages(parseLocale(locale));
// t() → ReactNode (JSX) | formatString() → string (metadata, aria)
```

**Client**:

```tsx
import { useMessages } from '@rozsival/i18n/client';
const { t } = useMessages();
```

**Messages**: `packages/i18n/src/messages/{en,cs}.json` (dot notation: `common.nav.home`)

**Czech tone**: Informal "ty" form, tech-savvy, professional but approachable

## MDX (`@rozsival/mdx`)

Posts at `content/blog/[slug]/[locale].md`:

```tsx
import { getAllPosts, getPostBySlug } from '@rozsival/mdx';
const posts = await getAllPosts(postsDir, 'en');
```

- Locale from filename, slug from directory
- Reading time auto-calculated
- Unpublished filtered in production

## Page Types (apps/web)

```tsx
// @/ alias allowed in apps/ only
import type { LocalePageProps, LocaleLayoutProps } from '@/types/locale';

export default async function Page({ params }: LocalePageProps) {
  const { locale } = await params;
}

export default async function Post({ params }: LocalePageProps<{ slug: string }>) {
  const { locale, slug } = await params;
}
```

## Code Style

- **JSDoc**: Non-obvious logic only
- **Components**: Extract into small sub-components
- **Text**: Sentence case (not title case)
- **Emojis**: Prefix for icons/categories, suffix for tone/actions

## Deployment

**Vercel**: See `vercel.json` (Turborepo filtering, output: `apps/web/.next`)

**CI** (`.github/workflows/ci.yml`): lint → typecheck → build (push/PR to `main`)

## Key Rules

1. `pnpm turbo run --filter` for targeted tasks
2. No path aliases in packages
3. Check `turbo.json` for task config
4. TypeScript refs auto-synced (don't edit)
5. Consult config files for versions/settings
