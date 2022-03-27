import {
  Button,
  Card as MUICard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { ReactElement } from 'react';

import { pageRoutes } from '../../../../routes';
import { parseFrontMatter } from '../../../../services/blog';
import { formatDate } from '../../../../services/date';
import { Image } from '../../../image';

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
            <Typography color="primary" gutterBottom variant="subtitle1">
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
