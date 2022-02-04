import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

import { CARD_MEDIA_WIDTH, CARD_SPACING } from './constants';

export const cardStyle: SxProps<Theme> = {
  marginTop: CARD_SPACING,
  maxWidth: CARD_MEDIA_WIDTH,
};
