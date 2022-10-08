import type { EmotionCache } from '@emotion/cache';
import createCache from '@emotion/cache';
import type { EmotionCriticalToChunks } from '@emotion/server/create-instance';
import type { ReactElement } from 'react';

export const createEmotionCache = (): EmotionCache =>
  createCache({ key: 'css', prepend: true });

export const createEmotionStyleTags = ({
  styles,
}: EmotionCriticalToChunks): ReactElement[] =>
  styles.map(({ css, key, ids }) => (
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: css }}
      key={key}
      data-emotion={`${key} ${ids.join(' ')}`}
    />
  ));
