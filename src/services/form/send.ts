import { NextApiRequest } from 'next';
import { ValidationError } from 'yup';

import { STATUS_ERROR, STATUS_SENT } from './constants';
import { FormErrors, SendFormResponse } from './types';
import { validationSchema } from './validation';

const formatErrors = (error: unknown): FormErrors | undefined => {
  if (error instanceof ValidationError) {
    return error.inner
      .map((error) => ({ [error.path as keyof FormErrors]: error.message }))
      .reduce((previous, current) => ({ ...previous, ...current }));
  }
};

export const send = async (
  request: NextApiRequest,
): Promise<SendFormResponse> => {
  try {
    await validationSchema.validate(request.body, { abortEarly: false });
    // eslint-disable-next-line no-console
    console.log('sending form...', request.body);
    return { status: STATUS_SENT };
  } catch (error) {
    return {
      status: STATUS_ERROR,
      errors: formatErrors(error),
    };
  }
};
