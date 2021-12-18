import { SxProps, Theme } from '@mui/system';

import { SPACING } from './constants';

export const alertStyle: SxProps<Theme> = {
  mt: SPACING,
  mx: 'auto',
  pointerEvents: 'all',
  width: (theme) => (theme.breakpoints.up('md') ? '50%' : '90%'),
};
