import { AlertColor } from '@mui/material';

export type AlertProps = {
  id: string;
  message: string;
  onClose?: (id: string) => void;
  type?: AlertColor;
};
