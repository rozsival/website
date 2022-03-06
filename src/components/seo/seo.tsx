import Head from 'next/head';
import { VFC } from 'react';

import {
  SEO_TITLE,
  SEO_AUTHOR,
  SEO_NAME,
  SEO_PROFILE,
  SEO_SURNAME,
  SEO_DESCRIPTION,
} from '../../constants';
import { BASE_URL, ROBOTS } from '../../environment';

import { SeoProps } from './types';

export const Seo: VFC<SeoProps> = ({
  description,
  image,
  title,
  type = 'website',
  url,
}) => {
  const canonical = `${BASE_URL}${url ?? ''}`;
  const seoTitle = `${title ? `${title} | ` : ''}${SEO_TITLE}`;
  const seoDescription = description || SEO_DESCRIPTION;
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="robots" content={ROBOTS} />
      <meta name="author" content={SEO_AUTHOR} />
      <meta name="description" content={seoDescription} />
      <meta name="og:title" content={seoTitle} />
      <meta name="og:description" content={seoDescription} />
      <meta name="og:site_name" content={SEO_TITLE} />
      <meta name="og:url" content={canonical} />
      <meta name="og:profile:first_name" content={SEO_NAME} />
      <meta name="og:profile:last_name" content={SEO_SURNAME} />
      <meta name="og:profile:username" content={SEO_PROFILE} />
      <meta name="og:profile:gender" content="male" />
      <meta name="og:type" content={type} />
      {image?.og && <meta name="og:image" content={image.og} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:creator" content={`@${SEO_PROFILE}`} />
      <meta name="twitter:url" content={canonical} />
      {image?.twitter && <meta name="twitter:image" content={image.twitter} />}
      <link rel="canonical" href={canonical} />
    </Head>
  );
};
