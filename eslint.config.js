import { base, nextjs, react, storybook } from '@apitree.cz/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    ignores: ['**/dist/**', '**/.next/**', '**/coverage/**', '**/node_modules/**', '**/storybook-static/**'],
  },
  base,
  react,
  nextjs(['apps/web']),
  storybook,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'formatjs/enforce-default-message': 'off',
      'react/jsx-props-no-spreading': 'off',
    },
  },
);
