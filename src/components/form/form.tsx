import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { Send as SendIcon } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { apiRoutes } from '../../routes';
import { useFlashMessagesContext } from '../../context';
import { useFetch } from '../../hooks';
import {
  STATUS_SENT,
  FormValues,
  SendFormResponse,
  validationSchema,
} from '../../services/form';

import { SPACING } from './constants';
import { Input } from './input';
import { StyledForm } from './styles';

export const Form = (): ReactElement => {
  const { showError, showSuccess } = useFlashMessagesContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: { name: '', email: '', subject: '', message: '' },
    resolver: yupResolver(validationSchema),
  });
  const onSuccess = (response: SendFormResponse) => {
    if (response.status === STATUS_SENT) {
      reset();
      showSuccess('Message sent, thank you.');
    }
  };
  const [{ loading, response }, post] = useFetch<FormValues, SendFormResponse>({
    method: 'POST',
    onError: showError,
    onSuccess,
    url: apiRoutes.sendForm,
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => post(data);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        error={errors.name?.message ?? response?.errors?.name}
        label="Your name"
        name="name"
        noMargin
      />
      <Input
        control={control}
        error={errors.email?.message ?? response?.errors?.email}
        label="Your e-mail"
        name="email"
        type="email"
      />
      <Input
        control={control}
        error={errors.subject?.message ?? response?.errors?.subject}
        label="Subject"
        name="subject"
      />
      <Input
        control={control}
        error={errors.message?.message ?? response?.errors?.message}
        label="Your message"
        multiLine
        name="message"
      />
      <Box mt={SPACING}>
        <LoadingButton
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          type="submit"
          variant="contained"
        >
          Send
        </LoadingButton>
      </Box>
    </StyledForm>
  );
};
