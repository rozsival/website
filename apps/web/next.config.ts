import path from 'path';

import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configure page extensions to include MDX
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  // Transpile workspace packages
  transpilePackages: ['@rozsival/i18n', '@rozsival/mdx', '@rozsival/theme', '@rozsival/ui'],

  // Skip type checking
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Turbopack configuration for monorepo support
  // In CI, explicitly set root to monorepo root to fix package resolution
  // Local dev auto-detects correctly, so only apply in CI
  ...(process.env.CI && {
    turbopack: {
      root: path.resolve(import.meta.dirname, '../..'),
    },
  }),

  // Experimental features
  experimental: {
    optimizePackageImports: ['@rozsival/ui'],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
