import createEmotionServer from '@emotion/server/create-instance';
import type { AppPropsType } from 'next/dist/shared/lib/utils';
import { Children, ReactElement } from 'react';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { baseline } from '../styles/baseline';
import { createEmotionCache, createEmotionStyleTags } from '../styles/emotion';
import { font } from '../styles/font';

class Document extends NextDocument {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);
    const { renderPage } = context;
    context.renderPage = () =>
      renderPage({
        enhanceApp: (App: import('./_app').AppType) => {
          const EnhancedApp = (props: AppPropsType) => (
            <App emotionCache={cache} {...props} />
          );
          return EnhancedApp;
        },
      });
    const initialProps = await NextDocument.getInitialProps(context);
    const emotionStyleTags = createEmotionStyleTags(
      extractCriticalToChunks(initialProps.html),
    );
    const styles = [baseline, initialProps.styles, ...emotionStyleTags];
    return { ...initialProps, styles: Children.toArray(styles) };
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>{font}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
