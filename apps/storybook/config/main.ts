import path from 'path';

import type { StorybookConfig } from '@storybook/react-vite';

const workspaces = ['ui'];

function resolveDocgenInclude(workspace: string) {
  return path.resolve(import.meta.dirname, `../../../${workspace}/src/**/*.{ts,tsx}`);
}

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
  },
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      strictMode: true,
    },
  },
  addons: ['@storybook/addon-docs', '@storybook/addon-links'],
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: workspaces.map(resolveDocgenInclude),
      shouldExtractValuesFromUnion: true,
    },
  },
};

export default config;
