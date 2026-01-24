import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },

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
