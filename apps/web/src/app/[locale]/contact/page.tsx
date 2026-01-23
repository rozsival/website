'use client';

import { useMessages } from '@rozsival/i18n/client';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Textarea } from '@rozsival/ui';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export default function ContactPage() {
  const { t } = useMessages();
  const [status, setStatus] = useState<'error' | 'idle' | 'loading' | 'success'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    // Simulate form submission
    // In production, this would send to an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
  }

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
              {status === 'success' ? (
                <div className="py-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-lg font-medium text-green-600 dark:text-green-400">{t('contact.success')}</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={(event) => void handleSubmit(event)}>
                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="name">
                      {t('contact.form.name')}
                    </label>
                    <Input disabled={status === 'loading'} id="name" name="name" required type="text" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="email">
                      {t('contact.form.email')}
                    </label>
                    <Input disabled={status === 'loading'} id="email" name="email" required type="email" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium" htmlFor="message">
                      {t('contact.form.message')}
                    </label>
                    <Textarea disabled={status === 'loading'} id="message" name="message" required rows={5} />
                  </div>

                  {status === 'error' ? (
                    <p className="text-sm text-red-600 dark:text-red-400">{t('contact.error')}</p>
                  ) : null}

                  <Button className="w-full" disabled={status === 'loading'} size="lg" type="submit">
                    {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
                  </Button>
                </form>
              )}
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
