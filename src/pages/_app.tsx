import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { AppType } from '../types';
import { createEmotionCache } from '../styles';
import { FlashMessagesProvider, ThemeProvider } from '../context';
import { Layout } from '../components/layout';

const clientSideEmotionCache = createEmotionCache();

const App: AppType = ({ Component, emotionCache, pageProps }) => (
  <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf8" />
    </Head>
    <ThemeProvider>
      <FlashMessagesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FlashMessagesProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
