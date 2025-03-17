import dotenv from 'dotenv';
import { MailtrapTransport } from 'mailtrap';
import { MailtrapResponse } from 'mailtrap/dist/types/transport';
import Nodemailer from 'nodemailer';

import { CareerFormData } from './route';

dotenv.config({
  path: process.env.CI ? '.env' : '.env.local',
});

var transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: process.env.MAILTRAP_API_TOKEN,
    testInboxId: process.env.MAILTRAP_INBOX_ID,
    accountId: process.env.MAILTRAP_ACCOUNT_ID,
  })
);

const sender = {
  address: 'noreply@amaceit.se',
  name: 'Form name from site',
};
const recipients = ['info@amaceit.se'];

export async function sendTestMail(
  data: CareerFormData
): Promise<Error | MailtrapResponse> {
  return transport.sendMail({
    from: sender,
    to: recipients,
    subject: data.subject || `Job application: ${data.name}`,
    text: data.message,
    category: 'Integration Test',
    sandbox: true,
  });
}
