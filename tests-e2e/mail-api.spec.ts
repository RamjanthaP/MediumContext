import { APIRequestContext, expect, test } from '@playwright/test';
import dotenv from 'dotenv';

// Make our variables from our .env file available to our process
dotenv.config({
  path: process.env.CI ? '.env' : '.env.local',
});

test.describe('Checks email from api ', () => {
  test.skip('Sends a mail if all params are sent"', async ({ request }) => {
    const response = await request.post('/api/mail', {
      data: { email: 'test@test.com', subject: 'test', Body: 'test' },
    });
    expect(response.status()).toBe(200);
  });

  test.skip('Fails to send a mail if params are missing"', async ({
    request,
  }) => {
    const response = await request.post('/api/mail', {
      data: { subject: 'test', Body: 'test' },
    });
    expect(response.status()).toBe(500);
  });

  test.skip('Can get an email with correct subject from mailhog', async ({
    request,
  }) => {
    const timestampedSubject = 'Ämne ' + Date.now().toString();
    await request.post('/api/mail', {
      data: {
        email: 'test@test.com',
        subject: timestampedSubject,
        Body: 'test',
      },
    });
    const response = await await checkMailtrapInbox(request);
    const mails = await response.json();
    const sentMailExists = mails.find(
      (mail: any) => mail.subject === timestampedSubject
    );
    expect(sentMailExists).toBeTruthy();
  });
});

async function checkMailtrapInbox(requestContext: APIRequestContext) {
  const account_id = process.env.MAILTRAP_ACCOUNT_ID;
  const inbox_id = process.env.MAILTRAP_INBOX_ID;
  const apiToken = process.env.MAILTRAP_API_TOKEN as string;
  const apiUrl = `https://mailtrap.io/api/accounts/${account_id}/inboxes/${inbox_id}/messages`;
  const response = await requestContext.get(apiUrl, {
    headers: {
      'Api-Token': apiToken,
    },
  });
  return response;
}
