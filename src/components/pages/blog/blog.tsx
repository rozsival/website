import { Grid } from '@mui/material';
import { NextPage } from 'next';

import { Page } from '../page';

import { BlogProps } from './types';
import { Card, CardProps } from './post';

const seo = {
  title: 'Blog',
  description:
    "Vít's blog about software development using React, TypeScript and friends.",
};

const renderPost = ({ frontMatter, slug }: CardProps) => (
  <Grid key={slug} item md={3} sm={6} xs={12}>
    <Card frontMatter={frontMatter} slug={slug} />
  </Grid>
);

export const Blog: NextPage<BlogProps> = ({ posts }) => (
  <Page seo={seo}>
    <Grid container spacing={3}>
      {posts.map(renderPost)}
    </Grid>
  </Page>
);
