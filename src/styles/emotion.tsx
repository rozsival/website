import createCache, { EmotionCache } from '@emotion/cache';
import { EmotionCriticalToChunks } from '@emotion/server/create-instance';
import { ReactElement } from 'react';

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
