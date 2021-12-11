import { ReactElement, useState } from 'react';

import { Alert } from '../components/alert';
import { ALERT_ERROR, ALERT_SUCCESS } from '../components/alert/constants';
import { AlertProps } from '../components/alert/types';

export const useAlert = () => {
  const [alert, setAlert] = useState<ReactElement | undefined>();
  const renderWithAlert = (children: ReactElement): ReactElement => (
    <>
      {alert}
      {children}
    </>
  );
  const show = ({ message, type }: AlertProps) =>
    setAlert(<Alert message={message} type={type} />);
  const showError = (message: AlertProps['message']) =>
    show({ message, type: ALERT_ERROR });
  const showSuccess = (message: AlertProps['message']) =>
    show({ message, type: ALERT_SUCCESS });
  return { alert, renderWithAlert, show, showError, showSuccess };
};
