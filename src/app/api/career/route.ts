import { sendCareerMailToAzure } from '@/api/mailclient';

import { getBodyFromRequest } from '../helpers/getBodyFromRequest';
import { sendTestMail } from './mailtrap';

export interface CareerFormData {
  subject: string;
  name: string;
  email: string;
  linkedin: string;
  github: string;
  message: string;
}

export async function POST(req: Request) {
  const data = await getBodyFromRequest<CareerFormData>(req);

  if (!data.name || !data.email || !data.message) {
    const missingParamStack = [];
    if (!data.name) missingParamStack.push('name');
    if (!data.email) missingParamStack.push('email');
    if (!data.message) missingParamStack.push('message');

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
      const result = await sendCareerMailToAzure(
        data.subject || `Job application: ${data.name}`,
        data.name,
        data.email,
        data.linkedin,
        data.github,
        data.message
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
