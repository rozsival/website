import Head from 'next/head';
import { VFC } from 'react';

import { TITLE } from '../../constants/seo';
import { BASE_URL, ROBOTS } from '../../environment';

import { SeoProps } from './types';

export const Seo: VFC<SeoProps> = ({ description, image, title, url }) => {
  const canonical = `${BASE_URL}${url || ''}`;
  const seoTitle = `${title ? `${title} | ` : ''}${TITLE}`;
  const seoDescription = description || 'My personal website.';
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="robots" content={ROBOTS} />
      <meta name="author" content="Vít Rozsíval" />
      <meta name="description" content={seoDescription} />
      <meta name="og:title" content={seoTitle} />
      <meta name="og:description" content={seoDescription} />
      <meta name="og:site_name" content={TITLE} />
      <meta name="og:url" content={canonical} />
      <meta name="og:profile:first_name" content="Vít" />
      <meta name="og:profile:last_name" content="Rozsíval" />
      <meta name="og:profile:username" content="vitrozsival" />
      <meta name="og:profile:gender" content="male" />
      {image?.og && <meta name="og:image" content={image.og} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:creator" content="@vitrozsival" />
      <meta name="twitter:url" content={canonical} />
      {image?.twitter && <meta name="twitter:image" content={image.twitter} />}
      <link rel="canonical" href={canonical} />
    </Head>
  );
};
