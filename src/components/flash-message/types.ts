import type { AlertColor } from '@mui/material';
import type { ReactNode } from 'react';

export type FlashMessageProps = {
  message: ReactNode;
  onClose?: () => void;
  type?: AlertColor;
};
