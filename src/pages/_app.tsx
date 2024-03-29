import { CacheProvider } from '@emotion/react';
import Head from 'next/head';

import '../components/top-progress-bar/style.css';
import { Layout } from '../components/layout';
import { LazyTopProgressBar } from '../components/top-progress-bar';
import { AppContextProvider } from '../context';
import { createEmotionCache } from '../styles';
import type { AppType } from '../types';

const clientSideEmotionCache = createEmotionCache();

const App: AppType = ({ Component, emotionCache, pageProps }) => (
  <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
    <LazyTopProgressBar />
    <Head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta charSet="utf8" />
    </Head>
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  </CacheProvider>
);

export default App;
