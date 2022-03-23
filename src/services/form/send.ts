import { NextApiRequest } from 'next';

import { STATUS_ERROR, STATUS_SENT } from './constants';
import { SendFormResponse } from './types';
import { validate } from './validate';

export const send = async (
  request: NextApiRequest,
): Promise<SendFormResponse> => {
  const errors = await validate(request);
  if (errors) return { errors, status: STATUS_ERROR };
  // eslint-disable-next-line no-console
  console.log('sending form...', request.body);
  return { status: STATUS_SENT };
};
