import { Alert, Snackbar } from '@mui/material';
import type { SyntheticEvent, VFC } from 'react';
import { useEffect, useState } from 'react';

import { ANCHOR_ORIGIN, TRANSITION, TTL } from './constants';
import { alertStyle, snackbarStyle } from './styles';
import type { FlashMessageProps } from './types';

export const FlashMessage: VFC<FlashMessageProps> = ({
  message,
  onClose,
  type,
}) => {
  const [visible, setVisible] = useState(false);
  const debouncedClose = () => {
    if (onClose) onClose();
  };
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setVisible(false);
    setTimeout(debouncedClose, TRANSITION);
  };
  const handleOpen = () => setVisible(true);
  const onMount = () => {
    setTimeout(handleOpen);
  };
  useEffect(onMount, []);
  return (
    <Snackbar
      anchorOrigin={ANCHOR_ORIGIN}
      autoHideDuration={TTL}
      onClose={handleClose}
      open={visible}
      sx={snackbarStyle}
      transitionDuration={TRANSITION}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={alertStyle}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
