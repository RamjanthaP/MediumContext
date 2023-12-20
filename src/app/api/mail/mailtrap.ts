import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

import { FormData } from './route';

dotenv.config({
  path: process.env.CI ? '.env' : '.env.local',
});

var transport = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_API_USER,
    pass: process.env.MAILTRAP_API_PASSWORD,
  },
});

const TEST_MAIL = '"Form name from site" <noreply@amaceit.se>';
const RECIEVER_MAIL = 'info@amaceit.se';

export async function sendTestMail(data: FormData): Promise<Error | any> {
  if (!data.email) {
    throw new Error('No email provided');
  }
  if (!data.Body) {
    throw new Error('No body provided');
  }
  if (!data.subject) {
    throw new Error('No subject provided');
  }
  return await transport.sendMail({
    from: TEST_MAIL, // sender address
    replyTo: data.email,
    to: RECIEVER_MAIL, // list of receivers
    subject: data.subject, // Subject line
    text: data.Body, // plain text body
    // html: '<b>Hello world?</b>', // TODO: Add html body
  });
}
