import { getMessages, parseLocale } from '@rozsival/i18n/server';
import { BookOpen, Sprout, Laptop, Palette, Lightbulb } from 'lucide-react';
import type { Metadata } from 'next';

import type { LocalePageProps } from '@/types/locale';

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { formatString } = getMessages(parseLocale(locale));

  return {
    title: formatString('story.title'),
  };
}

export default async function StoryPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const { t } = getMessages(parseLocale(locale));

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 flex items-center text-4xl font-bold tracking-tight">
            <BookOpen className="mr-3 h-10 w-10 text-primary" />
            {t('story.title')}
          </h1>
          <p className="mb-12 text-xl text-muted-foreground">{t('story.intro')}</p>

          <div className="prose dark:prose-invert max-w-none">
            <h2>
              <Sprout className="mr-2 inline-block h-6 w-6 text-primary" />
              {t('story.sections.beginning.title')}
            </h2>
            <p>{t('story.sections.beginning.content')}</p>

            <h2>
              <Laptop className="mr-2 inline-block h-6 w-6 text-primary" />
              {t('story.sections.evolution.title')}
            </h2>
            <p>{t('story.sections.evolution.content1')}</p>
            <p>{t('story.sections.evolution.content2')}</p>

            <h2>
              <Palette className="mr-2 inline-block h-6 w-6 text-primary" />
              {t('story.sections.roots.title')}
            </h2>
            <p>{t('story.sections.roots.content')}</p>

            <h2>
              <Lightbulb className="mr-2 inline-block h-6 w-6 text-primary" />
              {t('story.sections.philosophy.title')}
            </h2>
            <p>{t('story.sections.philosophy.content')}</p>

            <ul>
              <li>{t('story.sections.philosophy.list.item1')}</li>
              <li>{t('story.sections.philosophy.list.item2')}</li>
              <li>{t('story.sections.philosophy.list.item3')}</li>
              <li>{t('story.sections.philosophy.list.item4')}</li>
            </ul>

            <p>{t('story.sections.philosophy.conclusion')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
