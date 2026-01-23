import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static exports for optimal performance
  output: 'standalone',

  // Configure page extensions to include MDX
  pageExtensions: ['ts', 'tsx', 'mdx'],

  // Transpile workspace packages
  transpilePackages: ['@rozsival/theme', '@rozsival/ui', '@rozsival/i18n', '@rozsival/mdx'],

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
