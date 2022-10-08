import { Button } from '@mui/material';
import type { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import Script from 'next/script';

import { SEO_AUTHOR } from '../../../../constants';
import { NEXT_PUBLIC_BASE_URL } from '../../../../environment';
import { pageRoutes } from '../../../../routes';
import { parseFrontMatter } from '../../../../services/blog';
import { Code } from '../../../code';
import { Image } from '../../../image';
import { H1, H2, H3, Paragraph } from '../../../typography';
import { Page } from '../../page';

import { BackButton } from './back-button';
import type { BlogPostProps } from './types';

const mdxComponents = {
  Button,
  Code,
  h1: H1,
  h2: H2,
  h3: H3,
  Image,
  p: Paragraph,
};

export const BlogPost: NextPage<BlogPostProps> = (props) => {
  const { description, image, title } = parseFrontMatter(props);
  const {
    mdxSource: { compiledSource },
    scope,
    slug,
  } = props;
  const seo = {
    description,
    title,
    type: 'article',
    url: pageRoutes.blog.post(slug),
  };
  return (
    <>
      <Page seo={seo}>
        <>
          <BackButton />
          <article>
            <H2 component="h1">{title}</H2>
            <MDXRemote
              compiledSource={compiledSource}
              components={mdxComponents}
              scope={scope}
            />
          </article>
        </>
      </Page>
      <Script id="blog-post-schema" type="application/ld+json">
        {`
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            'author': {
              '@type': 'Person',
              'name: '${SEO_AUTHOR}'
            },
            'headline': '${title}'
            'abstract': '${description}',
            'image': '${NEXT_PUBLIC_BASE_URL}${image.src}'
          }
        `}
      </Script>
    </>
  );
};
