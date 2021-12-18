import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';

import { FlashMessagesProvider, ThemeProvider } from '../context';
import { AppType } from '../types/app';
import { createEmotionCache } from '../styles';
import { Layout } from '../components/layout';
import { ROBOTS } from '../environment';

const clientSideEmotionCache = createEmotionCache();

const App: AppType = ({ Component, emotionCache, pageProps, router }) => (
  <CacheProvider value={emotionCache ?? clientSideEmotionCache}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <meta name="robots" content={ROBOTS} />
    </Head>
    <ThemeProvider>
      <FlashMessagesProvider>
        <Layout>
          <LazyMotion features={domAnimation}>
            <AnimatePresence exitBeforeEnter>
              <m.div
                key={router.route}
                animate="animate"
                exit="exit"
                initial="initial"
                style={{ width: '100%' }}
                transition={{ duration: 0.7 }}
                variants={{
                  initial: {
                    opacity: 0,
                    scale: 1,
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.6,
                  },
                }}
              >
                <Component {...pageProps} />
              </m.div>
            </AnimatePresence>
          </LazyMotion>
        </Layout>
      </FlashMessagesProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
