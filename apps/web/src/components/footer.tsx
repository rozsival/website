'use client';

import * as React from 'react';
import { useIntl } from '@rozsival/i18n/client';
import { useMessages } from '@rozsival/i18n/client';

export function Footer() {
  const { t } = useMessages();
  const intl = useIntl();
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {t('common.footer.copyright', { year: String(year) })}
          </p>
          <div className="text-sm text-muted-foreground">
            {intl.formatMessage(
              { id: 'common.footer.builtWith' },
              {
                link: (chunks: React.ReactNode) => (
                  <a
                    href="https://antigravity.google"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
                  >
                    {chunks}
                  </a>
                ),
              }
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
