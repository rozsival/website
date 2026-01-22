# @rozsival/eslint-config

Shared ESLint configurations for the monorepo using ESLint flat config.

## Available Configurations

| Config | Use Case |
|--------|----------|
| `base` | TypeScript libraries |
| `react` | React component libraries |
| `next` | Next.js applications (default) |

## Usage

In your package's `eslint.config.mjs`:

```js
import config from '@rozsival/eslint-config';

export default config;
```

Or import a specific config:

```js
import { react } from '@rozsival/eslint-config';

export default react;
```

## Philosophy

This configuration focuses on **linting, not formatting**. Formatting is handled by Prettier.

Rules are selected to:
- Catch real bugs and type safety issues
- Enforce React best practices
- Ensure accessibility compliance
- Maintain consistency without being overly prescriptive
