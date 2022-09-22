import { yupResolver } from '@hookform/resolvers/yup';
import { Send as SendIcon } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import { FormEventHandler, ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useFlashMessagesContext } from '../../context';
import { useFetch, useMobile } from '../../hooks';
import { apiRoutes } from '../../routes';
import {
  FormValues,
  MESSAGE_LENGTH,
  schema,
  SendFormResponse,
  STATUS_SENT,
} from '../../services/form';
import { catchError } from '../../utils';

import { SPACING } from './constants';
import { Input } from './input';
import { StyledForm } from './styles';

export const Form = (): ReactElement => {
  const { onMobile } = useMobile();
  const { showError, showSuccess } = useFlashMessagesContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { name: '', email: '', subject: '', message: '' },
    resolver: yupResolver(schema),
  });
  const onSuccess = (response: SendFormResponse) => {
    if (response.status === STATUS_SENT) {
      reset();
      showSuccess(
        <>
          Thanks for contacting me ❤️
          {onMobile(<br />, ' ')}
          I&apos;ll get back to you ASAP ⚡️
        </>,
      );
    }
  };
  const [{ loading, response }, post] = useFetch<FormValues, SendFormResponse>({
    method: 'POST',
    onError: showError,
    onSuccess,
    url: apiRoutes.sendForm,
  });
  const fieldError = (field: keyof FormValues) =>
    errors[field]?.message ?? response?.errors?.[field];
  const submit: SubmitHandler<FormValues> = (data) => post(data);
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    catchError(handleSubmit(submit)(event));
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        control={control}
        error={fieldError('name')}
        label="Your name"
        name="name"
        noMargin
      />
      <Input
        control={control}
        error={fieldError('email')}
        label="Your e-mail"
        name="email"
        type="email"
      />
      <Input
        control={control}
        error={fieldError('subject')}
        label="Subject"
        name="subject"
      />
      <Input
        control={control}
        error={fieldError('message')}
        label="Your message"
        maxLength={MESSAGE_LENGTH}
        multiLine
        name="message"
      />
      <Box mt={SPACING}>
        <LoadingButton
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          type="submit"
          variant="outlined"
        >
          Send
        </LoadingButton>
      </Box>
    </StyledForm>
  );
};
