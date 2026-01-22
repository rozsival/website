import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Vít Rozsíval | Full-Stack Developer',
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
  ],
  authors: [{ name: 'Vít Rozsíval' }],
  creator: 'Vít Rozsíval',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'cs_CZ',
    siteName: 'Vít Rozsíval',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'system';
                const resolved = theme === 'system'
                  ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                  : theme;
                document.documentElement.classList.add(resolved);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
