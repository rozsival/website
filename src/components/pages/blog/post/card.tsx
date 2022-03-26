import Link from 'next/link';
import {
  Button,
  Card as MUICard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { ReactElement } from 'react';

import { formatDate } from '../../../../services/date';
import { Image } from '../../../image';
import { pageRoutes } from '../../../../routes';
import { parseFrontMatter } from '../../../../services/blog';

import { cardMediaStyle } from './styles';
import { CardProps } from './types';

export const Card = (props: CardProps): ReactElement => {
  const { date, title, image } = parseFrontMatter(props);
  const { slug } = props;
  const href = pageRoutes.blog.post(slug);
  return (
    <MUICard key={slug}>
      <Link href={href} passHref>
        <CardActionArea>
          <CardMedia sx={cardMediaStyle}>
            <Image alt={title} src={image} />
          </CardMedia>
          <CardContent>
            <Typography color="primary" variant="subtitle1" gutterBottom>
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
    </MUICard>
  );
};
