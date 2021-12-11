import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { Layout } from '../components/layout';
import { createEmotionCache } from '../styles';
import { AppType } from '../types/app';

const clientSideEmotionCache = createEmotionCache();

const App: AppType = ({ Component, emotionCache, pageProps }) => (
  <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;
