import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

import { CARD_MEDIA_WIDTH, CARD_SPACING } from './constants';

export const boxStyle: SxProps<Theme> = {
  alignItems: 'center',
  display: 'flex',
  flexFlow: {
    xs: 'column wrap',
    md: 'row wrap',
  },
  justifyContent: {
    xs: 'center',
    md: 'space-around',
  },
  width: '100%',
};

export const cardStyle: SxProps<Theme> = {
  marginTop: CARD_SPACING,
  maxWidth: CARD_MEDIA_WIDTH,
};
