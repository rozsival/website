# Vít Rozsíval – Personal Website 💻

Modern, type-safe personal website built with Next.js 16, React 19, and TypeScript in a Turborepo monorepo. 🚀

## Quick Start 🚀

```bash
# Install dependencies
pnpm install

# Start development servers (web + storybook)
pnpm run dev

# Build all packages
pnpm run build

# Run quality checks
pnpm run qa
```

## Tech Stack 📦

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo + pnpm workspaces
- **i18n**: Custom react-intl wrapper
- **Content**: MDX for blog posts
- **Testing**: Vitest, Storybook
- **Deployment**: Vercel

## Structure 🏗️

```text
apps/
├── web/          # Main Next.js website
└── storybook/    # Component documentation

packages/
├── i18n/         # Internationalization utilities
├── mdx/          # Blog content processing
├── theme/        # Design tokens & theming
└── ui/           # Shared components
```

## Development 🛠️

### Prerequisites

- **Node.js**: Version 24.x (`.nvmrc`)
- **Package Manager**: pnpm

### Commands

```bash
# Development
pnpm run dev                 # All dev servers
pnpm run dev:web             # Web app only (port 3000)
pnpm run dev:storybook       # Storybook only (port 6006)

# Building
pnpm run build               # Build everything
pnpm run build:packages      # Build packages only

# Quality Assurance
pnpm run qa                  # Type check + lint + format
pnpm run fix                 # Auto-fix all issues
pnpm run test                # Run tests

# Maintenance
pnpm run cleanup             # Clean build artifacts
pnpm run check               # Validate workspace structure
```

## Key Features 🌟

### 🌍 Internationalization

- Supported languages: English (default), Czech
- Type-safe message keys with autocomplete
- Server & client utilities for Next.js App Router
- Multi-language blog posts

### 📝 Blog

- MDX-powered content
- Multi-language support (`[slug]/[locale].md`)
- Reading time calculation
- SEO-optimized metadata

### 🎨 Theming

- Dark mode support
- Design tokens via CSS variables
- Consistent styling across components

## Documentation 📖

- [AGENTS.md](./AGENTS.md): Comprehensive guide for AI assistants and developers
- **Storybook**: Component documentation (`pnpm run dev:storybook`)

## Tooling 🔧

- Turborepo: Task orchestration with caching
- ESLint 9: Flat config with custom rules
- Prettier: Code formatting
- Husky: Git hooks for quality checks
- Commitlint: Conventional commit enforcement

## Deployment 🚢

Deployed on **Vercel** with automatic deployments from `main` branch.

- Build command: `pnpm turbo build --filter=@rozsival/web`
- Framework preset: Next.js
- Node version: See `.nvmrc`

## License 📄

MIT © Vít Rozsíval 💻
