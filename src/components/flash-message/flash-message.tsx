import { Alert, Snackbar } from '@mui/material';
import { SyntheticEvent, useEffect, useState, VFC } from 'react';

import { ANCHOR_ORIGIN, TRANSITION, TTL } from './constants';
import { FlashMessageProps } from './types';

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
      transitionDuration={TRANSITION}
    >
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};
