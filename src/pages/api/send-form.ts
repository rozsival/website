import type { NextApiRequest, NextApiResponse } from 'next';

import { send, SendFormResponse } from '../../services/form';

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<SendFormResponse>,
): Promise<void> => {
  if (!request.body) return response.status(400).end();
  return response.status(200).json(await send(request));
};

export default handler;
