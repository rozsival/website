import { PaletteMode } from '@mui/material';

export type ColorModeContextType = {
  colorMode: PaletteMode;
  toggleColorMode: () => void;
};
