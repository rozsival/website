import { NextApiRequest } from 'next';

import { STATUS_SENT } from './constants';
import { SendFormResponse } from './types';
import { validate } from './validate';

export const send = async (
  request: NextApiRequest,
): Promise<SendFormResponse> => {
  const invalid = await validate(request);
  if (invalid) return invalid;
  // eslint-disable-next-line no-console
  console.log('sending form...', request.body);
  return { status: STATUS_SENT };
};
