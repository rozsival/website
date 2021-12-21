import * as yup from 'yup';

import { MESSAGE_LENGTH } from './constants';

export const validationSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().optional(),
    message: yup.string().max(MESSAGE_LENGTH).required(),
  })
  .required();
