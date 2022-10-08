import type { ReactElement } from 'react';

import { FlashMessagesProvider } from './flash-messages';
import { ThemeProvider } from './theme';

export const AppContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => (
  <ThemeProvider>
    <FlashMessagesProvider>{children}</FlashMessagesProvider>
  </ThemeProvider>
);
