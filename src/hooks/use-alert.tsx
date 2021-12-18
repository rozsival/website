import { Portal } from '@mui/base';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { ReactElement, useState } from 'react';

import {
  Alert,
  ALERT_ERROR,
  ALERT_SUCCESS,
  AlertProps,
} from '../components/alert';
import { id } from '../services/strings/id';
import { isBrowser } from '../utils';

const boxStyle: SxProps<Theme> = {
  pointerEvents: 'none',
  position: 'fixed',
  width: '100%',
  zIndex: 'tooltip',
};

export const useAlert = () => {
  const [alerts, setAlerts] = useState<AlertProps[]>([]);
  const handleClose = (id: AlertProps['id']) =>
    setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
  const renderAlerts = () => {
    if (isBrowser()) {
      return (
        <Portal container={document.body}>
          <Box id="alerts-root" sx={boxStyle}>
            {alerts.map(({ id, message, type }) => (
              <Alert
                key={`alert-${id}`}
                id={id}
                message={message}
                onClose={handleClose}
                type={type}
              />
            ))}
          </Box>
        </Portal>
      );
    }
  };
  const renderWithAlert = (children: ReactElement): ReactElement => (
    <>
      {renderAlerts()}
      {children}
    </>
  );
  const show = (props: Omit<AlertProps, 'id'>) =>
    setAlerts((alerts) => [{ ...props, id: id() }, ...alerts]);
  const showError = (message: AlertProps['message']) =>
    show({ message, type: ALERT_ERROR });
  const showSuccess = (message: AlertProps['message']) =>
    show({ message, type: ALERT_SUCCESS });
  return { renderWithAlert, show, showError, showSuccess };
};
