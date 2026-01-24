'use client';

import { useMessages } from '@rozsival/i18n/client';
import { Button, Input, Textarea } from '@rozsival/ui';
import { CheckCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export function ContactForm() {
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

  if (status === 'success') {
    return (
      <div className="py-8 text-center">
        <div className="mb-4 flex justify-center">
          <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
        </div>
        <p className="text-lg font-medium text-green-600 dark:text-green-400">{t('contact.success')}</p>
      </div>
    );
  }

  return (
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

      {status === 'error' ? <p className="text-sm text-red-600 dark:text-red-400">{t('contact.error')}</p> : null}

      <Button className="w-full" disabled={status === 'loading'} size="lg" type="submit">
        {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
      </Button>
    </form>
  );
}
