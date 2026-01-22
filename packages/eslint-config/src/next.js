// Next.js ESLint configuration
// Extends React config with Next.js-specific rules

import nextPlugin from '@next/eslint-plugin-next';
import react from './react.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...react,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      // Next.js specific rules
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-head-import-in-document': 'error',
    },
  },
];
