'use client';

import { useState, type FormEvent } from 'react';
import { useMessages } from '@rozsival/i18n/client';
import { Button, Card, CardContent, CardHeader, CardTitle, Input, Textarea } from '@rozsival/ui';
import { CheckCircle, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useMessages();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
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
            <p className="text-lg text-muted-foreground">
              {t('contact.description')}
            </p>
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
                  <p className="text-lg font-medium text-green-600 dark:text-green-400">
                    {t('contact.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => void handleSubmit(e)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium">
                      {t('contact.form.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-sm text-red-600 dark:text-red-400">
                      {t('contact.error')}
                    </p>
                  )}
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'loading'}
                  >
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
                href="https://github.com/rozsival"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('contact.socials.github')}
              </a>
              <a
                href="https://linkedin.com/in/vitrozsival"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
