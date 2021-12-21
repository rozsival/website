import { PaletteMode } from '@mui/material';

import { COLOR_MODE_STORAGE } from './constants';

export type LocalStorage = {
  [COLOR_MODE_STORAGE]: PaletteMode;
};
