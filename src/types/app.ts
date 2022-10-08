import type { EmotionCache } from '@emotion/cache';
import type { NextComponentType } from 'next';
import type {
  AppContext,
  AppInitialProps,
  AppProps as NextAppProps,
} from 'next/app';

export type AppPropsType = NextAppProps;

export type AppProps = AppPropsType & {
  emotionCache?: EmotionCache;
};

export type AppType = NextComponentType<AppContext, AppInitialProps, AppProps>;
