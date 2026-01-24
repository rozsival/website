import { getMessages, parseLocale } from '@rozsival/i18n/server';
import { Card, CardContent, CardHeader, CardTitle } from '@rozsival/ui';
import { MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact-form';
import type { LocalePageProps } from '@/types/locale';

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const { formatString } = getMessages(parseLocale(locale));

  return {
    title: formatString('contact.title'),
    description: formatString('contact.description'),
  };
}

export default async function ContactPage({ params }: LocalePageProps) {
  const { locale } = await params;
  const { t } = getMessages(parseLocale(locale));

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 flex items-center justify-center text-4xl font-bold tracking-tight">
              <MessageCircle className="mr-3 h-10 w-10 text-primary" />
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground">{t('contact.description')}</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="sr-only">{t('contact.subTitle')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">{t('contact.socials.title')}</p>
            <div className="flex justify-center gap-4">
              <a
                className="text-muted-foreground hover:text-foreground transition-colors"
                href="https://github.com/rozsival"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('contact.socials.github')}
              </a>
              <a
                className="text-muted-foreground hover:text-foreground transition-colors"
                href="https://linkedin.com/in/vitrozsival"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('contact.socials.linkedin')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
