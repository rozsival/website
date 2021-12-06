import { EmotionCache } from '@emotion/cache';
import {
  AppContextType,
  AppInitialProps,
  NextComponentType,
} from 'next/dist/shared/lib/utils';

export type AppPropsType = import('next/dist/shared/lib/utils').AppPropsType;
export type AppProps = AppPropsType & { emotionCache?: EmotionCache };
export type AppType = NextComponentType<
  AppContextType,
  AppInitialProps,
  AppProps
>;
