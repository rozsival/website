import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Container } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { useFetch } from '../../hooks';
import { useAlert } from '../../hooks/use-alert';
import { apiRoutes } from '../../routes';
import { STATUS_SENT } from '../../services/form/constants';
import { FormValues, SendFormResponse } from '../../services/form/types';
import { validationSchema } from '../../services/form/validation';

import { Input } from './input';

export const Form = (): ReactElement => {
  const { renderWithAlert, showError, showSuccess } = useAlert();
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
  return renderWithAlert(
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Input
            control={control}
            error={errors.name?.message ?? response?.errors?.name}
            label="Your name"
            name="name"
          />
        </Box>
        <Box>
          <Input
            control={control}
            error={errors.email?.message ?? response?.errors?.email}
            label="Your e-mail"
            name="email"
            type="email"
          />
        </Box>
        <Box>
          <Input
            control={control}
            error={errors.subject?.message ?? response?.errors?.subject}
            label="Subject"
            name="subject"
          />
        </Box>
        <Box>
          <Input
            control={control}
            error={errors.message?.message ?? response?.errors?.message}
            label="Your message"
            multiLine
            name="message"
          />
        </Box>
        <Box>
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
      </form>
    </Container>,
  );
};
