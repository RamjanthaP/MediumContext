import { getBodyFromRequest } from '../helpers/getBodyFromRequest';
import { sendTestMail } from './mailtrap';

export interface FormData {
  email: string;
  Body: string;
  subject: string;
}

export async function POST(req: Request) {
  const data = await getBodyFromRequest<FormData>(req);
  // return Response.json({ message: 'Not implemented' });
  const success = await sendTestMail(data).catch((err) => {
    throw new Error(err);
  });
  return Response.json(success);
}
