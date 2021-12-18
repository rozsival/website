import { FlashMessageProps } from '../../components/flash-message';

export type ShowFlashMessage = (props: FlashMessageProps) => void;
export type ShowTypedFlashMessage = (
  message: FlashMessageProps['message'],
) => void;

export type FlashMessagesContextType = {
  show: ShowFlashMessage;
  showError: ShowTypedFlashMessage;
  showSuccess: ShowTypedFlashMessage;
};
