import type { ThemeOptions } from '@mui/material/styles';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { FONT_FAMILY, PRIMARY_COLOR } from './constants';

const fontFamily = [
  ...FONT_FAMILY.map((family) => `"${family}"`),
  'sans-serif',
].join(',');

const makeTheme = (options: ThemeOptions) =>
  responsiveFontSizes(
    createTheme(
      deepmerge(
        {
          components: {
            MuiCssBaseline: {
              styleOverrides: {
                ':root': {
                  '--primary-color': PRIMARY_COLOR,
                },
              },
            },
          },
          palette: {
            primary: {
              main: PRIMARY_COLOR,
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

export const theme = makeTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#f8f8f8',
    },
  },
});
