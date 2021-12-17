import { Box } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

import { formatDate } from '../../../services/date';
import { Page } from '../page';
import { pagesRoutes } from '../../../routes';
import { parseFrontMatter } from '../../../services/blog';

import { BlogProps } from './types';

export const seo = {
  title: 'Blog',
};

export const Blog: NextPage<BlogProps> = ({ posts }) => (
  <Page seo={seo}>
    <Box>
      {posts.map((post) => {
        const { date, title } = parseFrontMatter(post);
        const { slug } = post;
        return (
          <div key={slug}>
            <Link href={pagesRoutes.blog.post(slug)} passHref>
              {title}
            </Link>
            <p>{formatDate(date)}</p>
          </div>
        );
      })}
    </Box>
  </Page>
);
