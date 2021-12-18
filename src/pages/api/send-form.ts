import type { NextApiRequest, NextApiResponse } from 'next';

import { HTTP_BAD_REQUEST, HTTP_OK } from '../../constants';
import { send, SendFormResponse } from '../../services/form';

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<SendFormResponse>,
): Promise<void> => {
  if (!request.body) return response.status(HTTP_BAD_REQUEST).end();
  return response.status(HTTP_OK).json(await send(request));
};

export default handler;
