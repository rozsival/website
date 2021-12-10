import * as yup from 'yup';

import { STATUS_ERROR, STATUS_SENT } from './constants';
import { validationSchema } from './validation';

export type FormValues = yup.InferType<typeof validationSchema>;
export type FormErrors = Partial<Record<keyof FormValues, 'string'>>;
export type SendFormResponse = {
  errors?: FormErrors;
  status: typeof STATUS_ERROR | typeof STATUS_SENT;
};
export type PostOptions = {
  onStart: () => void;
  onCompleted: () => void;
  values: FormValues;
};
