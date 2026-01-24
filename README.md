# Vít Rozsíval – Personal Website

Modern, type-safe personal website built with Next.js 16, React 19, and TypeScript in a Turborepo monorepo.

> **For AI Assistants**: See [AGENTS.md](./AGENTS.md) for comprehensive project documentation.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development servers (web + storybook)
pnpm dev

# Build all packages
pnpm build

# Run quality checks
pnpm qa
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript 5.9 (strict mode)
- **Styling**: Tailwind CSS 4
- **Monorepo**: Turborepo + pnpm workspaces
- **i18n**: Custom react-intl wrapper
- **Content**: MDX for blog posts
- **Testing**: Vitest, Storybook
- **Deployment**: Vercel

## 🏗️ Project Structure

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

## 🛠️ Development

### Prerequisites

- **Node.js**: Version specified in `.nvmrc` (24.x)
- **Package Manager**: pnpm (version in `package.json`)

### Available Commands

```bash
# Development
pnpm dev                 # Start all dev servers
pnpm dev:web             # Start web app only (port 3000)
pnpm dev:storybook       # Start storybook only (port 6006)

# Building
pnpm build               # Build everything
pnpm build:packages      # Build packages only

# Quality Assurance
pnpm qa                  # Type check + lint + format
pnpm fix                 # Auto-fix all issues
pnpm test                # Run tests

# Maintenance
pnpm cleanup             # Clean build artifacts
pnpm check               # Validate workspace structure
```

### Key Features

#### 🌍 Internationalization

- **Supported languages**: English (default), Czech
- **Type-safe** message keys with autocomplete
- **Server & client** utilities for Next.js App Router
- **Multi-language blog** posts

#### 📝 Blog

- **MDX-powered** content
- **Multi-language** support (`[slug]/[locale].md` structure)
- **Reading time** calculation
- **SEO-optimized** metadata

#### 🎨 Theming

- **Dark mode** support
- **Design tokens** via CSS variables
- **Consistent** styling across components

## 📖 Documentation

- **[AGENTS.md](./AGENTS.md)**: Comprehensive guide for AI assistants and developers
- **Storybook**: Component documentation (run `pnpm dev:storybook`)

## 🔧 Tooling

- **Turborepo**: Task orchestration with caching
- **ESLint 9**: Flat config with custom rules
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality checks
- **Commitlint**: Conventional commit enforcement

## 📁 Workspace Packages

All packages are internal (`@rozsival/*`) and share TypeScript configurations.

### @rozsival/i18n

Server and client internationalization utilities wrapping react-intl.

### @rozsival/mdx

Blog content processing with multi-language support and reading time.

### @rozsival/theme

Design tokens, theme provider, and dark mode utilities.

### @rozsival/ui

Shared component library with Shadcn-inspired primitives.

## 🚢 Deployment

Deployed on **Vercel** with automatic deployments from the `main` branch.

- Build command: `pnpm turbo build --filter=@rozsival/web`
- Framework preset: Next.js
- Node version: See `.nvmrc`

## 🤝 Contributing

This is a personal project, but feel free to explore the code and use it as reference.

### Code Quality

- **Conventional Commits**: Required for all commits
- **Pre-commit hooks**: Automatically format and lint changed files
- **Type checking**: Strict TypeScript across all packages
- **No path aliases** in packages (only in apps)

## 📄 License

MIT © Vít Rozsíval

---

Built with ❤️ using modern web technologies.
