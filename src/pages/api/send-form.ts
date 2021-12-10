import type { NextApiRequest, NextApiResponse } from 'next';

import { send } from '../../services/form/send';
import { SendFormResponse } from '../../services/form/types';

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<SendFormResponse>,
): Promise<void> => {
  const data = await send(request);
  return response.status(200).json(data);
};

export default handler;
