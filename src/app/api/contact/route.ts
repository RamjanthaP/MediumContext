import { sendContactMailToAzure } from '@/api/mailclient';

import { getBodyFromRequest } from '../helpers/getBodyFromRequest';
import { sendTestMail } from './mailtrap';

export interface ContactFormData {
  email: string;
  Body: string;
  subject: string;
}

export async function POST(req: Request) {
  const data = await getBodyFromRequest<ContactFormData>(req);

  if (!data.email || !data.Body || !data.subject) {
    const missingParamStack = [];
    if (!data.email) missingParamStack.push('email');
    if (!data.Body) missingParamStack.push('Body');
    if (!data.subject) missingParamStack.push('subject');

    return Response.json(
      {
        message: `No ${missingParamStack.join(', ')} provided.`,
        data: { missing_params: missingParamStack },
      },
      { status: 500 }
    );
  }

  /** PRODUCTION */
  if (process.env.NODE_ENV === 'production') {
    try {
      const result = await sendContactMailToAzure(
        data.email,
        data.subject,
        data.Body
      );
      return Response.json({
        message: 'Sending from azure.',
        status: 200,
        data: result,
      });
    } catch (err) {
      return Response.json(
        {
          message: 'PROBLEM sending from azure.',
          data: err,
        },
        { status: 500 }
      );
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
    return Response.json({
      message: 'Sending ok from Back since we are just developing.',
      status: 200,
      data: data,
    });
  }

  throw new Error('Unknown environment.');
}
