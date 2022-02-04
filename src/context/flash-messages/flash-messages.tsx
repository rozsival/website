import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import {
  FLASH_ERROR,
  FLASH_SUCCESS,
  FlashMessage,
  FlashMessageProps,
} from '../../components/flash-message';
import { DEFAULT_VALUE } from '../constants';

import { FlashMessagesContextType } from './types';

export const FlashMessagesContext = createContext<
  FlashMessagesContextType | undefined
>(DEFAULT_VALUE);

export const useFlashMessagesContext = () => {
  const context = useContext(FlashMessagesContext);
  if (context) return context;
  throw new Error('FlashMessagesContext value must be set.');
};

export const FlashMessagesProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [flashMessage, setFlashMessage] = useState<FlashMessageProps>();
  const onClose = useCallback(
    () => setFlashMessage(DEFAULT_VALUE),
    [setFlashMessage],
  );
  const show: FlashMessagesContextType['show'] = useCallback(
    (props) => setFlashMessage(props),
    [setFlashMessage],
  );
  const showError: FlashMessagesContextType['showError'] = useCallback(
    (message) => show({ message, type: FLASH_ERROR }),
    [show],
  );
  const showSuccess: FlashMessagesContextType['showSuccess'] = useCallback(
    (message) => show({ message, type: FLASH_SUCCESS }),
    [show],
  );
  const value = useMemo(
    () => ({ show, showError, showSuccess }),
    [show, showError, showSuccess],
  );
  return (
    <FlashMessagesContext.Provider value={value}>
      {children}
      {flashMessage && (
        <FlashMessage
          message={flashMessage.message}
          onClose={onClose}
          type={flashMessage.type}
        />
      )}
    </FlashMessagesContext.Provider>
  );
};