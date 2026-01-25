import type { MessageKey } from '@rozsival/i18n';
import { getMessages } from '@rozsival/i18n/server';
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription } from '@rozsival/ui';
import { Layers, Zap, Palette, Target, Sparkles, Handshake } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import type { LocalePageProps } from '@/types/locale';

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { formatString } = getMessages(locale);

  return {
    title: formatString('home.hero.title'),
    description: formatString('common.siteDescription'),
  };
}

export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  const { t } = getMessages(locale);

  // Highlight items
  const highlights = [
    {
      key: 'architecture',
      icon: <Layers className="h-10 w-10 text-primary" />,
    },
    {
      key: 'fullstack',
      icon: <Zap className="h-10 w-10 text-primary" />,
    },
    {
      key: 'creative',
      icon: <Palette className="h-10 w-10 text-primary" />,
    },
    {
      key: 'pragmatic',
      icon: <Target className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-lg text-muted-foreground animate-fade-in">{t('home.hero.greeting')}</p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in">
              {t('home.hero.title')}
            </h1>
            <p className="mb-4 text-xl text-muted-foreground animate-fade-in">{t('home.hero.subtitle')}</p>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground animate-fade-in">
              {t('home.hero.tagline')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-slide-up">
              <Button asChild size="lg">
                <Link href={`/${locale}/story`}>{t('home.hero.cta.primary')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/${locale}/contact`}>{t('home.hero.cta.secondary')}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
            <Sparkles className="mr-2 inline-block h-8 w-8 text-primary" />
            {t('home.highlights.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <Card key={item.key} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2">{item.icon}</div>
                  <CardTitle className="text-xl">
                    {t(`home.highlights.items.${item.key}.title` as MessageKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {t(`home.highlights.items.${item.key}.description` as MessageKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              <Handshake className="mr-2 inline-block h-8 w-8 text-primary" />
              {t('home.finalCta.title')}
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">{t('home.finalCta.description')}</p>
            <Button asChild size="lg">
              <Link href={`/${locale}/contact`}>{t('home.hero.cta.secondary')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
