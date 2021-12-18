import { PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

const dark = createTheme({ palette: { mode: 'dark' } });
const light = createTheme({ palette: { mode: 'light' } });

export const theme: Record<PaletteMode, Theme> = { dark, light };
