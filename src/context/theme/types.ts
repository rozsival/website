import { PaletteMode } from '@mui/material';

export type ColorModeContextType = {
  colorMode: PaletteMode;
  isDarkMode: () => boolean;
  isLightMode: () => boolean;
  onMode: <Dark, Light>(dark: Dark, light: Light) => Dark | Light;
  toggleColorMode: () => void;
};
