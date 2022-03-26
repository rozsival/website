import { PaletteMode } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { FONT_FAMILY } from './constants';

const fontFamily = [
  ...FONT_FAMILY.map((family) => `"${family}"`),
  'sans-serif',
].join(',');

const makeTheme = (options: ThemeOptions) =>
  responsiveFontSizes(
    createTheme(
      deepmerge(
        {
          palette: {
            primary: {
              main: '#6d83f2',
            },
            secondary: {
              main: '#6a98f0',
            },
          },
          shape: {
            borderRadius: 16,
          },
          typography: {
            fontFamily,
          },
        },
        options,
      ),
    ),
  );

const dark = makeTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#f8f8f8',
    },
  },
});

const light = makeTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f8f8f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#303030',
    },
  },
});

export const theme: Record<PaletteMode, Theme> = { dark, light };
