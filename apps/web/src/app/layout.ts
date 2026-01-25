import type { Metadata } from 'next';
import './globals.css';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Full-Stack Developer | Vít Rozsíval',
    template: '%s | Vít Rozsíval',
  },
  description:
    'Full-stack developer with 15+ years of experience combining technical depth with creative background. I care about clean architecture, long-term maintainability, and building products that genuinely serve people.',
  keywords: [
    'full-stack developer',
    'software engineer',
    'web development',
    'mobile development',
    'cloud architecture',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
  ],
  authors: [{ name: 'Vít Rozsíval' }],
  creator: 'Vít Rozsíval',
  openGraph: {
    type: 'website',
    siteName: 'Vít Rozsíval',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
