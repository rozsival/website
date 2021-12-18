import { AlertColor } from '@mui/material';

export type FlashMessageProps = {
  message: string;
  onClose?: () => void;
  type?: AlertColor;
};
