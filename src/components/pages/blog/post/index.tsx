import { Box, Button } from '@mui/material';
import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { parseFrontMatter } from '../../../../services/blog';
import { Page } from '../../page';
import { seo as blogSeo } from '..';

import { BlogPostProps } from './types';

const mdxComponents = {
  Button,
};

export const BlogPost: NextPage<BlogPostProps> = (props) => {
  const frontMatter = parseFrontMatter(props);
  const seo = { title: `${frontMatter.title} – ${blogSeo.title}` };
  const { mdxSource } = props;
  return (
    <Page seo={seo}>
      <Box width="100%">
        <h1>{frontMatter.title}</h1>
        <MDXRemote
          compiledSource={mdxSource.compiledSource}
          components={mdxComponents}
        />
      </Box>
    </Page>
  );
};
