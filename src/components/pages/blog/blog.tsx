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
import { pageRoutes } from '../../../routes';
import { parseFrontMatter } from '../../../services/blog';

import { BlogProps } from './types';
import { boxStyle, cardStyle } from './styles';
import { CARD_MEDIA_HEIGHT, CARD_MEDIA_WIDTH } from './constants';

const seo = {
  title: 'Blog',
};

export const Blog: NextPage<BlogProps> = ({ posts }) => (
  <Page seo={seo}>
    <Box sx={boxStyle}>
      {posts.map((post) => {
        const { date, title, image } = parseFrontMatter(post);
        const { slug } = post;
        const href = pageRoutes.blog.post(slug);
        return (
          <Card key={slug} sx={cardStyle}>
            <Link href={href} passHref>
              <CardActionArea>
                <CardMedia>
                  <Image
                    alt={title}
                    height={CARD_MEDIA_HEIGHT}
                    src={image}
                    width={CARD_MEDIA_WIDTH}
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
