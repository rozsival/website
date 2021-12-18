import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { NextPage } from 'next';
import Image from 'next/image';
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
    <Box display="flex" justifyContent="space-around" width="100%">
      {posts.map((post) => {
        const { date, title, thumbnailUrl } = parseFrontMatter(post);
        const { slug } = post;
        const href = pagesRoutes.blog.post(slug);
        return (
          <Card key={slug} sx={{ maxWidth: 320 }}>
            <Link href={href} passHref>
              <CardActionArea>
                <CardMedia>
                  <Image
                    alt={title}
                    height={280}
                    src={thumbnailUrl}
                    width={320}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="caption">{formatDate(date)}</Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions>
              <Link href={href} passHref>
                <Button>Read</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  </Page>
);
