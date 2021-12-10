/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { apiRoutes } from '../../routes';
import { STATUS_ERROR, STATUS_SENT } from '../../services/form/constants';
import { FormValues, SendFormResponse } from '../../services/form/types';
import { useFetch } from '../../hooks';
import { validationSchema } from '../../services/form/validation';

// eslint-disable-next-line no-alert
const alert = (message: string) => window.alert(message);

export const Form = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });
  const [{ error, loading, response }, post] = useFetch<
    FormValues,
    SendFormResponse
  >({ method: 'POST', url: apiRoutes.sendForm });
  const onError = () => {
    if (error) alert(error);
  };
  const onSuccess = () => {
    if (response?.status === STATUS_SENT) {
      reset();
    }
  };
  const onUnexpectedError = () => {
    if (response?.status === STATUS_ERROR && !response.errors) {
      alert('Unexpected error');
    }
  };
  useEffect(onError, [error]);
  useEffect(onSuccess, [response, reset]);
  useEffect(onUnexpectedError, [response]);
  const onSubmit: SubmitHandler<FormValues> = (data) => post(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('name')} />
        {(errors.name || response?.errors?.name) && (
          <code style={{ color: 'red' }}>
            {errors.name?.message ?? response?.errors?.name}
          </code>
        )}
      </div>
      <div>
        <input {...register('email')} />
        {(errors.email || response?.errors?.email) && (
          <code style={{ color: 'red' }}>
            {errors.email?.message ?? response?.errors?.email}
          </code>
        )}
      </div>
      <div>
        <input {...register('subject')} />
        {(errors.subject || response?.errors?.subject) && (
          <code style={{ color: 'red' }}>
            {errors.subject?.message ?? response?.errors?.subject}
          </code>
        )}
      </div>
      <div>
        <textarea {...register('message')} />
        {(errors.message || response?.errors?.message) && (
          <code style={{ color: 'red' }}>
            {errors.message?.message ?? response?.errors?.message}
          </code>
        )}
      </div>
      <div>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </div>
    </form>
  );
};
