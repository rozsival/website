import { EmotionCache } from '@emotion/cache';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps } from 'next/app';

export type AppPropsType = import('next/app').AppProps;

export type AppProps = AppPropsType & {
  emotionCache?: EmotionCache;
};

export type AppType = NextComponentType<AppContext, AppInitialProps, AppProps>;
