import type { Theme } from '@rozsival/theme';
import { ThemeProvider } from '@rozsival/theme';
import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';
import '@rozsival/theme/styles.css';
import '../styles/globals.css';

const STORYBOOK_THEME_KEY = 'storybook-theme';

/**
 * Get the initial theme from localStorage or system preference
 */
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  // Check Storybook's localStorage first
  const stored = localStorage.getItem(STORYBOOK_THEME_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  // Fall back to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: getInitialTheme(),
  },
  decorators: [
    function RootDecorator(Story, context) {
      const theme = context.globals.theme as Theme;

      // Persist theme to localStorage whenever it changes
      useEffect(() => {
        localStorage.setItem(STORYBOOK_THEME_KEY, theme);
      }, [theme]);

      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  tags: ['autodocs'],
};

export default preview;
