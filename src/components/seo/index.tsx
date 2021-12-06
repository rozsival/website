import Head from 'next/head';
import { VFC } from 'react';

import { SeoProps } from './types';

export const Seo: VFC<SeoProps> = ({ title }) => (
  <Head>
    <title>{title ? `${title} | ` : ''}Vít Rozsíval</title>
    <meta name="author" content="Vít Rozsíval" />
    <meta name="description" content="My personal website." />
  </Head>
);
