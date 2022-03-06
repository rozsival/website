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

import { cardStyle } from './styles';
import { CARD_MEDIA_HEIGHT, CARD_MEDIA_WIDTH } from './constants';
import { CardProps } from './types';

export const Card = (props: CardProps): ReactElement => {
  const { date, title, image } = parseFrontMatter(props);
  const { slug } = props;
  const href = pageRoutes.blog.post(slug);
  return (
    <MUICard key={slug} sx={cardStyle}>
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
    </MUICard>
  );
};
