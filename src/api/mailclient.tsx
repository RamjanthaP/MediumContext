import { EmailClient } from '@azure/communication-email';
import type { EmailMessage } from '@azure/communication-email';

const connectionString =
  'endpoint=' + process.env.AZURE_EMAIL_CONNECTION_STRING;

const client = new EmailClient(connectionString);

export async function sendContactMailToAzure(
  toEmail: string,
  subject: string,
  body: string
) {
  const emailMessage = {
    senderAddress: process.env.AZURE_EMAIL_SENDER_ADDRESS,
    content: {
      subject,
      plainText: `email: ${toEmail}\n
      message: ${body}`,
    },
    recipients: {
      to: [
        { address: process.env.AZURE_EMAIL_FORM_RECIEVER_ADDRESS as string },
      ],
    },
    replyTo: [{ address: toEmail }],
  } satisfies EmailMessage;

  const poller = await client.beginSend(emailMessage);
  const result = await poller.pollUntilDone();
  return result;
}

export async function sendCareerMailToAzure(
  subject: string,
  name: string,
  toEmail: string,
  linkedin: string,
  github: string,
  message: string
) {
  const emailMessage = {
    senderAddress: process.env.AZURE_EMAIL_SENDER_ADDRESS,
    content: {
      subject,
      plainText: `Name: ${name}\n
      email: ${toEmail}\n
      linkedin: ${linkedin}\n
      github: ${github}\n
      message: ${message}`,
    },
    recipients: {
      to: [
        { address: process.env.AZURE_EMAIL_FORM_RECIEVER_ADDRESS as string },
      ],
    },
    replyTo: [{ address: toEmail }],
  } satisfies EmailMessage;

  const poller = await client.beginSend(emailMessage);
  const result = await poller.pollUntilDone();
  return result;
}
