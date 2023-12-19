import type { NextApiRequest, NextApiResponse } from 'next';

import { getBodyFromRequest } from '../helpers/getBodyFromRequest';

interface FormResponse {
  email: string;
  Body: string;
  subject: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = await getBodyFromRequest<FormResponse>(req);
  return Response.json({ status: 'working', data });
}
