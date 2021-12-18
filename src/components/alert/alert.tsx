import { useCallback, useEffect, useRef, useState, VFC } from 'react';
import { Alert as MUIAlert, Fade } from '@mui/material';

import { FADE_TIMEOUT, TTL } from './constants';
import { alertStyle } from './styles';
import { AlertProps } from './types';

export const Alert: VFC<AlertProps> = ({ id, message, onClose, type }) => {
  const timeout = useRef<NodeJS.Timeout>();
  const [visible, setVisible] = useState(false);
  const debouncedClose = useCallback(() => {
    if (onClose) onClose(id);
  }, [id, onClose]);
  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(debouncedClose, FADE_TIMEOUT);
  }, [debouncedClose]);
  const handleOpen = () => setVisible(true);
  const onUnmount = () => {
    if (timeout.current) clearTimeout(timeout.current);
  };
  const onMount = () => {
    setTimeout(handleOpen);
    timeout.current = setTimeout(handleClose, TTL);
    return onUnmount;
  };
  useEffect(onMount, [handleClose]);
  return (
    <Fade in={visible} timeout={FADE_TIMEOUT}>
      <MUIAlert onClose={handleClose} severity={type} sx={alertStyle}>
        {message}
      </MUIAlert>
    </Fade>
  );
};
