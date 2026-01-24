import { I18nProvider } from '@rozsival/i18n/client';
import { getIntl, isValidLocale } from '@rozsival/i18n/server';
import { ThemeProvider } from '@rozsival/theme';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import type { LocaleLayoutProps } from '@/types/locale';

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

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Load messages for this locale
  const intl = getIntl(locale);
  const { messages } = intl;

  return (
    <html className={`${inter.variable} ${jetbrainsMono.variable}`} lang={locale} suppressHydrationWarning>
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          // eslint-disable-next-line react/no-danger
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
        <ThemeProvider defaultTheme="system">
          <I18nProvider locale={locale} messages={messages}>
            <div className="flex min-h-screen flex-col">
              <Header locale={locale} />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'cs' }];
}
