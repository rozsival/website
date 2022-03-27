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
import { NEXT_PUBLIC_BASE_URL, NEXT_PUBLIC_ROBOTS } from '../../environment';

import { SeoProps } from './types';

export const Seo: VFC<SeoProps> = ({
  description,
  image,
  title,
  type = 'website',
  url,
}) => {
  const canonical = `${NEXT_PUBLIC_BASE_URL}${url ?? ''}`;
  const seoTitle = `${title ? `${title} | ` : ''}${SEO_TITLE}`;
  const seoDescription = description || SEO_DESCRIPTION;
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta content={NEXT_PUBLIC_ROBOTS} name="robots" />
      <meta content={SEO_AUTHOR} name="author" />
      <meta content={seoDescription} name="description" />
      <meta content={seoTitle} name="og:title" />
      <meta content={seoDescription} name="og:description" />
      <meta content={SEO_TITLE} name="og:site_name" />
      <meta content={canonical} name="og:url" />
      <meta content={SEO_NAME} name="og:profile:first_name" />
      <meta content={SEO_SURNAME} name="og:profile:last_name" />
      <meta content={SEO_PROFILE} name="og:profile:username" />
      <meta content="male" name="og:profile:gender" />
      <meta content={type} name="og:type" />
      {image?.og && <meta content={image.og} name="og:image" />}
      <meta content="summary" name="twitter:card" />
      <meta content={seoTitle} name="twitter:title" />
      <meta content={seoDescription} name="twitter:description" />
      <meta content={`@${SEO_PROFILE}`} name="twitter:creator" />
      <meta content={canonical} name="twitter:url" />
      {image?.twitter && <meta content={image.twitter} name="twitter:image" />}
      <link href={canonical} rel="canonical" />
    </Head>
  );
};
