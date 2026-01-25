'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light' | 'system';
export type ResolvedTheme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = 'theme';

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }
  return 'system';
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  /**
   * Controlled theme value (optional)
   * When provided, the component will use this value instead of localStorage
   */
  theme?: Theme;
  /**
   * Callback for theme changes in controlled mode
   */
  onThemeChange?: (theme: Theme) => void;
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  theme: controlledTheme,
  onThemeChange,
}: ThemeProviderProps) {
  const isControlled = controlledTheme !== undefined;
  const [internalTheme, setInternalTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  // Use controlled theme if provided, otherwise use internal state
  const theme = isControlled ? controlledTheme : internalTheme;

  /**
   * Initialize theme from storage on mount (only in uncontrolled mode)
   */
  useEffect(() => {
    if (isControlled) return;
    const stored = getStoredTheme();
    setInternalTheme(stored);
  }, [isControlled]);

  /**
   * Resolve the actual theme and apply to document
   */
  useEffect(() => {
    const resolved = theme === 'system' ? getSystemTheme() : theme;
    setResolvedTheme(resolved);

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(resolved);
  }, [theme]);

  /**
   * Listen for system theme changes
   */
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      setResolvedTheme(getSystemTheme());
    };

    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [theme]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (isControlled) {
        // In controlled mode, notify parent
        onThemeChange?.(newTheme);
      } else {
        // In uncontrolled mode, update internal state and localStorage
        setInternalTheme(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
      }
    },
    [isControlled, onThemeChange],
  );

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
