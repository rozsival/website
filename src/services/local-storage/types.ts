import type { PaletteMode } from '@mui/material';

import type { COLOR_MODE_STORAGE } from './constants';

export type LocalStorage = {
  [COLOR_MODE_STORAGE]: PaletteMode;
};
