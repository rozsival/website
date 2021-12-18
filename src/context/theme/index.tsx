import { PaletteMode, useMediaQuery } from '@mui/material';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { getStoredValue, storeValue } from '../../services/local-storage';
import { theme } from '../../styles/theme';
import { DEFAULT_VALUE } from '../constants';

import { COLOR_MODE_STORAGE } from './constants';
import { ColorModeContextType } from './types';

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  DEFAULT_VALUE,
);

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);
  if (context) return context;
  throw new Error('ColorContext value must be set.');
};

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [mounted, setMounted] = useState(false);
  const onMount = () => setMounted(true);
  useEffect(onMount, []);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const getInitialColorMode = useCallback((): PaletteMode => {
    const preferred = prefersDarkMode ? 'dark' : 'light';
    if (mounted) {
      const stored = getStoredValue<PaletteMode>(COLOR_MODE_STORAGE);
      return stored ?? preferred;
    }
    return preferred;
  }, [mounted, prefersDarkMode]);
  const [colorMode, setColorMode] = useState<PaletteMode>(
    getInitialColorMode(),
  );
  const hydrateColorMode = useCallback(
    () => setColorMode(getInitialColorMode()),
    [getInitialColorMode],
  );
  useEffect(hydrateColorMode, [hydrateColorMode]);
  const toggleColorMode = useCallback(() => {
    setColorMode((current) => {
      const mode = current === 'dark' ? 'light' : 'dark';
      storeValue(COLOR_MODE_STORAGE, mode);
      return mode;
    });
  }, [setColorMode]);
  const value = useMemo(
    () => ({ colorMode, toggleColorMode }),
    [colorMode, toggleColorMode],
  );
  if (mounted) {
    return (
      <ColorModeContext.Provider value={value}>
        <MUIThemeProvider theme={theme[colorMode]}>{children}</MUIThemeProvider>
      </ColorModeContext.Provider>
    );
  }
  // eslint-disable-next-line unicorn/no-null
  return null;
};
