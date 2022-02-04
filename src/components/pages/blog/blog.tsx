import { Box } from '@mui/material';
import { NextPage } from 'next';

import { Page } from '../page';

import { BlogProps } from './types';
import { boxStyle } from './styles';
import { Card, CardProps } from './post';

const seo = {
  title: 'Blog',
  description:
    "Vít Rozsíval's blog about software development using React, TypeScript and friends.",
};

const renderPost = (post: CardProps) => (
  <Card frontMatter={post.frontMatter} slug={post.slug} />
);

export const Blog: NextPage<BlogProps> = ({ posts }) => (
  <Page seo={seo}>
    <Box sx={boxStyle}>{posts.map(renderPost)}</Box>
  </Page>
);
