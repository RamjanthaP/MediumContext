import { expect, test } from '@playwright/test';

test.describe('Makes sure all service pages are available', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services');
  });

  test('navigates to the page "Digitalisering"', async ({ page }) => {
    await page.getByText('Digitalisering').locator('..').locator('a').click();
    await expect(page).toHaveURL(`/services/digitalisering`);
  });

  test('navigates to the page "Applikationsutveckling"', async ({ page }) => {
    await page
      .getByText('Applikationsutveckling')
      .locator('..')
      .locator('a')
      .click();
    await expect(page).toHaveURL('/services/modern-applikationsutveckling');
  });

  test('navigates to the page "IT-management"', async ({ page }) => {
    await page.getByText('IT-management').locator('..').locator('a').click();
    await expect(page).toHaveURL(`/services/it-management`);
  });

  test('navigates to the page "Teams"', async ({ page }) => {
    await page.getByText('Teams').locator('..').locator('a').click();
    await expect(page).toHaveURL(`/services/teams`);
  });
});

test.describe('Checks related services', () => {
  test('Should show all items but current item', async ({ page }) => {
    await page.goto('/services/teams');
    const relatedServices = await page.getByTestId('grid-items');
    await expect(
      relatedServices.getByRole('heading', { name: 'Digitalisering' })
    ).toBeVisible();
    await expect(
      relatedServices.getByRole('heading', { name: 'IT-management' })
    ).toBeVisible();
    await expect(
      relatedServices.getByRole('heading', {
        name: 'Applikationsutveckling',
      })
    ).toBeVisible();
    await expect(
      relatedServices.getByRole('heading', {
        name: 'Teams',
      })
    ).toBeHidden();
  });
});
