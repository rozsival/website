import Script from 'next/script';
import { Box, Button } from '@mui/material';
import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { Page } from '../../page';
import { pageRoutes } from '../../../../routes';
import { parseFrontMatter } from '../../../../services/blog';
import { SEO_AUTHOR } from '../../../../constants';

import { Code } from './code';
import { BlogPostProps } from './types';

const mdxComponents = {
  Button,
  Code,
};

export const BlogPost: NextPage<BlogPostProps> = (props) => {
  const frontMatter = parseFrontMatter(props);
  const { mdxSource, scope, slug } = props;
  const seo = {
    description: frontMatter.description,
    title: frontMatter.title,
    url: pageRoutes.blog.post(slug),
  };
  return (
    <>
      <Page seo={seo}>
        <Box width="100%">
          <h1>{frontMatter.title}</h1>
          <MDXRemote
            compiledSource={mdxSource.compiledSource}
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
            'headline': '${frontMatter.title}'
            'abstract': '${frontMatter.description}',
            'image': '${frontMatter.image}'
          }
        `}
      </Script>
    </>
  );
};