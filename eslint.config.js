import { next } from '@rozsival/eslint-config';
import formatjs from 'eslint-plugin-formatjs';

export default [
  { 
    ignores: ["**/dist/**", "**/.next/**", "**/coverage/**", "**/node_modules/**", "**/storybook-static/**", "apps/storybook/**"] 
  },
  {
    plugins: {
      formatjs
    }
  },
  ...next,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    }
  }
];
