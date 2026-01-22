# @rozsival/typescript-config

Shared TypeScript configurations for the monorepo.

## Available Configurations

| Config | Use Case |
|--------|----------|
| `base.json` | Library packages (pure TypeScript) |
| `react.json` | React component libraries |
| `nextjs.json` | Next.js applications |

## Usage

In your package's `tsconfig.json`:

```json
{
  "extends": "@rozsival/typescript-config/react.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

## Configuration Details

All configurations enable:

- **Strict mode** with additional safety checks
- **Composite builds** for incremental compilation
- **Declaration files** with source maps
- **ES2024** target for modern JavaScript features
