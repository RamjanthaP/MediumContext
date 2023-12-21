import { EmailClient } from '@azure/communication-email';
import type { EmailMessage } from '@azure/communication-email';

const connectionString =
  'endpoint=' + process.env.AZURE_EMAIL_CONNECTION_STRING;

const client = new EmailClient(connectionString);

async function sendMailToAzure(toEmail: string, subject: string, body: string) {
  const emailMessage = {
    senderAddress: process.env.AZURE_EMAIL_SENDER_ADDRESS,
    content: {
      subject,
      plainText: body,
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

export default sendMailToAzure;
