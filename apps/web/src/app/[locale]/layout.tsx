import { I18nProvider } from '@rozsival/i18n/client';
import { getIntl, isValidLocale } from '@rozsival/i18n/server';
import { ThemeProvider } from '@rozsival/theme';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }

  // Load messages for this locale
  const intl = getIntl(locale);
  const messages = intl.messages as Record<string, string>;

  return (
    <ThemeProvider defaultTheme="system">
      <I18nProvider locale={locale} messages={messages}>
        <div className="flex min-h-screen flex-col">
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'cs' }];
}
