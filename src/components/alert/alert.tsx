import { useEffect, useRef, useState, VFC } from 'react';
import { Alert as MUIAlert, Collapse, Portal } from '@mui/material';

import { TTL } from './constants';
import { alert, collapse } from './styles';
import { AlertProps } from './types';

export const Alert: VFC<AlertProps> = ({ message, type }) => {
  const timeout = useRef<NodeJS.Timeout>();
  const [visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);
  const onOpen = () => setVisible(true);
  const onUnmount = () => {
    if (timeout.current) clearTimeout(timeout.current);
  };
  const onMount = () => {
    setTimeout(onOpen);
    timeout.current = setTimeout(onClose, TTL);
    return onUnmount;
  };
  useEffect(onMount, []);
  return (
    <Portal container={document.body}>
      <Collapse in={visible} sx={collapse}>
        <MUIAlert onClose={onClose} severity={type} sx={alert}>
          {message}
        </MUIAlert>
      </Collapse>
    </Portal>
  );
};
