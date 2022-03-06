import Script from 'next/script';
import { Box, Button } from '@mui/material';
import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { BASE_URL } from '../../../../environment';
import { Code } from '../../../code';
import { H1, H2, H3, Paragraph } from '../../../typography';
import { Image } from '../../../image';
import { Page } from '../../page';
import { pageRoutes } from '../../../../routes';
import { parseFrontMatter } from '../../../../services/blog';
import { SEO_AUTHOR } from '../../../../constants';

import { BlogPostProps } from './types';

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
        <Box width="100%">
          <H2>{title}</H2>
          <MDXRemote
            compiledSource={compiledSource}
            components={mdxComponents}
            scope={scope}
          />
        </Box>
      </Page>
      <Script type="application/ld+json" id="blog-post-json-ld">
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
            'image': '${BASE_URL}${image.src}'
          }
        `}
      </Script>
    </>
  );
};
