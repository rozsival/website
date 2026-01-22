import { notFound } from 'next/navigation';
import { ThemeProvider } from '@rozsival/theme';
import { I18nProvider } from '@rozsival/i18n/client';
import { getIntl, isValidLocale, type Locale } from '@rozsival/i18n/server';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Validate locale
  if (!isValidLocale(locale)) {
    notFound();
  }
  
  // Load messages for this locale
  const intl = getIntl(locale as Locale);
  const messages = intl.messages as Record<string, string>;
  
  return (
    <ThemeProvider defaultTheme="system">
      <I18nProvider locale={locale as Locale} messages={messages}>
        <div className="flex min-h-screen flex-col">
          <Header locale={locale as Locale} />
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
