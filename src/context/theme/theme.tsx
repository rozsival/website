import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import type { ReactElement } from 'react';

import { theme } from '../../styles';

export const ThemeProvider = ({ children }: { children: ReactElement }) => (
  <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
);
