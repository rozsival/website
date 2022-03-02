import { NextApiRequest } from 'next';
import { ValidationError } from 'yup';

import { STATUS_ERROR } from './constants';
import { schema } from './schema';
import { FormErrors, SendFormResponse } from './types';

const formatErrors = (error: unknown): FormErrors | undefined => {
  if (error instanceof ValidationError) {
    return error.inner
      .map((error) => ({ [error.path as keyof FormErrors]: error.message }))
      .reduce((previous, current) => ({ ...previous, ...current }));
  }
};

export const validate = async (
  request: NextApiRequest,
): Promise<SendFormResponse | undefined> => {
  try {
    await schema.validate(request.body, { abortEarly: false });
  } catch (error) {
    return {
      status: STATUS_ERROR,
      errors: formatErrors(error),
    };
  }
};
