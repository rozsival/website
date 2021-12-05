import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
  AppContextType,
  AppInitialProps,
  AppPropsType,
  NextComponentType,
} from 'next/dist/shared/lib/utils';
import Head from 'next/head';

import { Layout } from '../components/layout';
import { createEmotionCache } from '../styles/emotion';

export type AppProps = AppPropsType & { emotionCache?: EmotionCache };
export type AppType = NextComponentType<
  AppContextType,
  AppInitialProps,
  AppProps
>;

const clientSideEmotionCache = createEmotionCache();

const App: AppType = ({ Component, emotionCache, pageProps }) => (
  <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>Vít ROZSÍVAL</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CacheProvider>
);

export default App;
