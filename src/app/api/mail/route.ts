import type { NextApiRequest, NextApiResponse } from 'next';

import { getBodyFromRequest } from '../helpers/getBodyFromRequest';
import { sendTestMail } from './mailtrap';

export interface FormData {
  email: string;
  Body: string;
  subject: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const data = await getBodyFromRequest<FormData>(req);
  if (process.env.NODE_ENV === 'development') {
    const success = await sendTestMail(data).catch((err) => {
      return res.status(500).end(err.toString());
    });
    return Response.json(success);
  }
}
