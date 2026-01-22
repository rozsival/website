# Vít Rozsíval - Personal Website

A modular Turborepo monorepo containing my personal website built with Next.js 16, React 19, and TypeScript.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI**: React 19, Shadcn-inspired components, Tailwind CSS
- **Language**: TypeScript 5.9 with strict mode
- **Monorepo**: Turborepo with pnpm workspaces
- **i18n**: react-intl (formatjs)
- **Testing**: Vitest, Storybook
- **Linting**: ESLint 9 (flat config)
- **Formatting**: Prettier
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Project Structure

```
├── apps/
│   ├── web/           # Next.js website
│   └── storybook/     # Component showcase
├── packages/
│   ├── eslint-config/     # Shared ESLint rules
│   ├── typescript-config/ # Shared TS configs
│   ├── theme/             # Design tokens & dark mode
│   ├── i18n/              # Internationalization
│   ├── ui/                # Component library
│   └── mdx/               # Blog MDX utilities
└── turbo.json
```

## Getting Started

### Prerequisites

- Node.js 24+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Type check
pnpm typecheck

# Lint
pnpm lint

# Format
pnpm format
```

### Local Development

The website runs at http://localhost:3000 and Storybook at http://localhost:6006.

## Packages

| Package | Description |
|---------|-------------|
| [@rozsival/web](./apps/web) | Main Next.js website |
| [@rozsival/storybook](./apps/storybook) | Component showcase |
| [@rozsival/eslint-config](./packages/eslint-config) | Shared ESLint configuration |
| [@rozsival/typescript-config](./packages/typescript-config) | Shared TypeScript configs |
| [@rozsival/theme](./packages/theme) | Design tokens & theming |
| [@rozsival/i18n](./packages/i18n) | Internationalization |
| [@rozsival/ui](./packages/ui) | Component library |
| [@rozsival/mdx](./packages/mdx) | MDX blog utilities |

## Supported Locales

- English (en) - default
- Czech (cs)

## License

MIT © Vít Rozsíval
