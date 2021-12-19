import { PaletteMode } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';

const makeTheme = (options: ThemeOptions) =>
  responsiveFontSizes(createTheme(options));

const dark = makeTheme({ palette: { mode: 'dark' } });
const light = makeTheme({ palette: { mode: 'light' } });

export const theme: Record<PaletteMode, Theme> = { dark, light };
