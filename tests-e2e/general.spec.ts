import { expect, test } from '@playwright/test';

test('navigates to the about page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /Om Amaceit/ }).click();
  await expect(page).toHaveURL('/about');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'About Page'
  );
});
