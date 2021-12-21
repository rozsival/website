import { Box, Button } from '@mui/material';
import { NextPage } from 'next';
import { MDXRemote } from 'next-mdx-remote';

import { parseFrontMatter } from '../../../../services/blog';
import { Page } from '../../page';
import { seo as blogSeo } from '..';

import { Code } from './code';
import { BlogPostProps } from './types';

const mdxComponents = {
  Button,
  Code,
};

export const BlogPost: NextPage<BlogPostProps> = (props) => {
  const frontMatter = parseFrontMatter(props);
  const seo = { title: `${frontMatter.title} – ${blogSeo.title}` };
  const { mdxSource, scope } = props;
  return (
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
  );
};
