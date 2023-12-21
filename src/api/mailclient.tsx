import { EmailClient } from '@azure/communication-email';

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
      to: [{ address: `${toEmail}` }],
    },
  };

  const poller = await client.beginSend(emailMessage);
  const result = await poller.pollUntilDone();
  return result;
}

export default sendMailToAzure;
