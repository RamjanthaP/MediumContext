import { APIRequestContext, expect, test } from '@playwright/test';
import dotenv from 'dotenv';

test.skip(!!process.env.CI, 'Disabled in CI due to Mailtrap rate limits');

// Make our variables from our .env file available to our process
dotenv.config({
  path: process.env.CI ? '.env' : '.env.local',
});

// TODO: Enable this test when we have mailtrap setup in CI
test.describe('Checks email from contact ', () => {
  test('Sends a mail if all params are sent"', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: { email: 'test@test.com', subject: 'test', Body: 'test' },
    });
    expect(response.status()).toBe(200);
  });

  test('Fails to send a mail if params are missing"', async ({ request }) => {
    const response = await request.post('/api/contact', {
      data: { subject: 'test', Body: 'test' },
    });
    expect(response.status()).toBe(500);
  });

  test('Can get an email with correct subject from mailtrap', async ({
    request,
  }) => {
    const timestampedSubject = 'Ämne ' + Date.now().toString();
    await request.post('/api/contact', {
      data: {
        email: 'test@test.com',
        subject: timestampedSubject,
        Body: 'test',
      },
    });
    const mail = await waitForMailtrapSubject(request, timestampedSubject, {
      timeoutMs: 60_000,
    });
    expect(mail).toBeTruthy();
  });
});

test.describe('Checks email from career ', () => {
  test('Sends a mail if all params are sent"', async ({ request }) => {
    const response = await request.post('/api/career', {
      data: { email: 'test@test.com', name: 'test user', message: 'test' },
    });
    expect(response.status()).toBe(200);
  });

  test('Fails to send a mail if params are missing"', async ({ request }) => {
    const response = await request.post('/api/career', {
      data: { name: 'test user', message: 'test' },
    });
    expect(response.status()).toBe(500);
  });

  test('Can get an email with correct subject from mailtrap', async ({
    request,
  }) => {
    const timestampedSubject = 'Ämne ' + Date.now().toString();
    await request.post('/api/career', {
      data: {
        email: 'test@test.com',
        subject: timestampedSubject,
        name: 'test user',
        message: 'test',
      },
    });
    const mail = await waitForMailtrapSubject(request, timestampedSubject, {
      timeoutMs: 60_000,
    });
    expect(mail).toBeTruthy();
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

async function waitForMailtrapSubject(
  requestContext: APIRequestContext,
  subject: string,
  {
    timeoutMs = 45_000,
    intervalMs = 1_000,
  }: { timeoutMs?: number; intervalMs?: number } = {}
) {
  const start = Date.now();
  let lastSubjects: string[] = [];

  while (Date.now() - start < timeoutMs) {
    const resp = await checkMailtrapInbox(requestContext);

    // If Mailtrap rate-limits or auth fails, fail with a clear error
    if (!resp.ok()) {
      const body = await resp.text().catch(() => '');
      throw new Error(
        `Mailtrap API error: ${resp.status()} ${resp.statusText()}\n${body.slice(0, 500)}`
      );
    }

    const mails = (await resp.json()) as any[];
    lastSubjects = (mails ?? [])
      .map((m) => m?.subject)
      .filter(Boolean)
      .slice(0, 10);

    const hit = (mails ?? []).find((m) => m?.subject === subject);
    if (hit) return hit;

    await new Promise((r) => setTimeout(r, intervalMs));
  }

  throw new Error(
    `Timed out waiting for subject "${subject}". Last subjects: ${JSON.stringify(lastSubjects)}`
  );
}
