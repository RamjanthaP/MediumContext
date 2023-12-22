import sendMailToAzure from '@/api/mailclient';

import { getBodyFromRequest } from '../helpers/getBodyFromRequest';
import { sendTestMail } from './mailtrap';

export interface FormData {
  email: string;
  Body: string;
  subject: string;
}

export async function POST(req: Request) {
  const data = await getBodyFromRequest<FormData>(req);

  /** PRODUCTION */
  if (process.env.NODE_ENV === 'production') {
    try {
      const result = await sendMailToAzure(data.email, data.subject, data.Body);
      return Response.json({
        message: 'Sending from azure.',
        status: 200,
        data: result,
      });
    } catch (err) {
      return Response.json({
        message: 'PROBLEM sending from azure.',
        status: 500,
        data: err,
      });
    }
  }
  /** TEST  */
  if (process.env.CI) {
    const success = await sendTestMail(data).catch((err) => {
      throw new Error(err);
    });
    return Response.json(success, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': process.env.APP_URL as string,
        'Access-Control-Allow-Methods': 'POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  /** DEV  */
  // Currently we are only sending mail using mailtrap in pipelines
  if (process.env.NODE_ENV === 'development' && !process.env.CI) {
    /* eslint-disable no-console */
    console.log(
      '🤖 ❤️  - Sending ok from Backend since we are just developing.'
    );
    return Response.json({
      message: 'Sending ok from Back since we are just developing.',
      status: 200,
      data: data,
    });
  }

  throw new Error('Unknown enviornment.');
}
