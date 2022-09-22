import createEmotionServer from '@emotion/server/create-instance';
import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Children, ReactElement } from 'react';

import {
  baseline,
  createEmotionCache,
  createEmotionStyleTags,
  font,
} from '../styles';
import { AppPropsType, AppType } from '../types';

class Document extends NextDocument {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const cache = createEmotionCache();
    const server = createEmotionServer(cache);
    const { renderPage } = context;
    context.renderPage = () =>
      renderPage({
        enhanceApp: (NextApp) =>
          function EnhancedApp(props: AppPropsType) {
            const App = NextApp as AppType;
            return <App {...props} emotionCache={cache} />;
          },
      });
    const initialProps = await NextDocument.getInitialProps(context);
    const emotionStyleTags = createEmotionStyleTags(
      server.extractCriticalToChunks(initialProps.html),
    );
    const styles = [baseline, ...emotionStyleTags, initialProps.styles];
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
