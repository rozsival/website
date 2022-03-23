import { AlertColor } from '@mui/material';
import { ReactNode } from 'react';

export type FlashMessageProps = {
  message: ReactNode;
  onClose?: () => void;
  type?: AlertColor;
};
