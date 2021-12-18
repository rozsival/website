import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { AppType } from '../types/app';
import { createEmotionCache } from '../styles';
import { Layout } from '../components/layout';
import { ROBOTS } from '../environment';

const clientSideEmotionCache = createEmotionCache();

const App: AppType = ({ Component, emotionCache, pageProps }) => (
  <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="robots" content={ROBOTS} />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;
