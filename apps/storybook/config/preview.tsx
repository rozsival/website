import type { Theme } from '@rozsival/theme';
import { ThemeProvider } from '@rozsival/theme';
import type { Preview } from '@storybook/react-vite';
import '@rozsival/theme/styles.css';
import '../styles/globals.css';

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
      defaultValue: 'light',
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
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme || 'light') as Theme;

      // Apply theme class to document
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
      }

      return (
        <ThemeProvider defaultTheme={theme}>
          <div className="p-4">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
