'use client';

import { useMessages } from '@rozsival/i18n/client';
import * as React from 'react';

export function Footer() {
  const { t } = useMessages();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">{t('common.footer.copyright', { year: String(year) })}</p>
          <div className="text-sm text-muted-foreground">
            {t('common.footer.builtWith', {
              link: (chunks: React.ReactNode) => (
                <a
                  className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
                  href="https://antigravity.google"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {chunks}
                </a>
              ),
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
