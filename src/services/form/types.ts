import * as yup from 'yup';

import { STATUS_ERROR, STATUS_SENT } from './constants';
import { schema } from './schema';

export type FormValues = yup.InferType<typeof schema>;
export type FormErrors = Partial<Record<keyof FormValues, 'string'>>;
export type SendFormResponse = {
  errors?: FormErrors;
  status: typeof STATUS_ERROR | typeof STATUS_SENT;
};
