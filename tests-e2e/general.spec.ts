import { expect, test } from '@playwright/test';

test('navigates to the about page', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: /Om Amaceit/ }).click();
  await expect(page).toHaveURL('/om-amaceit');
  await expect(
    page.getByRole('heading', { name: 'Robusta tekniska lösningar' })
  ).toBeVisible();
});
