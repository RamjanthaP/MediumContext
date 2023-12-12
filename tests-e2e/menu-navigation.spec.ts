import { expect, test } from '@playwright/test';

test.describe('Lets you get to all pages from navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigates to the page "Om Amaceit"', async ({ page }) => {
    test.slow();
    await page.getByRole('link', { name: /Om Amaceit/ }).click();
    await expect(page).toHaveURL('/om-amaceit');
    await expect(
      page.getByRole('heading', { name: 'Robusta tekniska lösningar' })
    ).toBeVisible();
  });

  test('navigates to the page "Karriär"', async ({ page }) => {
    test.slow();
    await page.getByRole('link', { name: /Karriär/ }).click();
    await expect(page).toHaveURL('/karriar');
    await expect(page.getByRole('heading', { name: 'framtid' })).toBeVisible();
  });

  test('navigates to the page "Tjänster"', async ({ page }) => {
    test.slow();
    await page.getByRole('link', { name: /Tjänster/ }).click();
    await expect(page).toHaveURL('/services');
    await expect(page.getByRole('heading', { name: 'Tjänster' })).toBeVisible();
  });

  test('navigates to the page "Kontakta Oss"', async ({ page }) => {
    test.slow();
    await page.getByRole('link', { name: /Kontakta oss/ }).click();
    await expect(page).toHaveURL('/kontakta-oss');
    await expect(
      page.getByRole('heading', { name: 'Kontakta oss' })
    ).toBeVisible();
  });
});

test.describe('Lets you navigate to home by clicking logo', () => {
  test('Click on logo takes user home', async ({ page }) => {
    await page.goto('/kontakta-oss');
    await page.locator('a').first().click();
    await expect(page).toHaveURL('/');
  });
});
