import { expect, test } from '@playwright/test';

test.describe('Lets you get to all pages from navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigates to the page "Om Amaceit"', async ({ page }) => {
    await page.getByRole('link', { name: /Om Amaceit/ }).hover();
    await page.getByRole('link', { name: /Om Amaceit/ }).click();
    await expect(
      page.getByRole('heading', { name: 'Robusta tekniska lösningar' })
    ).toBeVisible();
    await expect(page).toHaveURL('/om-amaceit');
  });

  test('navigates to the page "Karriär"', async ({ page }) => {
    await page.getByRole('link', { name: /Karriär/ }).hover();
    await page.getByRole('link', { name: /Karriär/ }).click();
    await expect(page.getByRole('heading', { name: 'Karriär' })).toBeVisible();
    await expect(page).toHaveURL('/karriar');
  });

  test('navigates to the page "Tjänster"', async ({ page }) => {
    await page.getByRole('link', { name: /Tjänster/ }).hover();
    await page.getByRole('link', { name: /Tjänster/ }).click();
    await expect(
      page.getByRole('heading', {
        name: 'Nyckelfärdiga lösningar och expertkompetens inom',
      })
    ).toBeVisible();
    await expect(page).toHaveURL('/services');
  });

  test('navigates to the page KONTAKTA OSS', async ({ page }) => {
    await page.getByRole('link', { name: /KONTAKTA OSS/ }).hover();
    await page.getByRole('link', { name: /KONTAKTA OSS/ }).click();
    await expect(
      page.getByRole('heading', { name: 'Vi vill gärna ha kontakt med er!' })
    ).toBeVisible();
    await expect(page).toHaveURL('/kontakta-oss');
  });
});

test.describe('Lets you navigate to home by clicking logo', () => {
  test('Click on logo takes user home', async ({ page }) => {
    await page.goto('/kontakta-oss');
    await page
      .getByRole('img', { name: /Amaceit logo/ })
      .first()
      .hover();
    await page
      .getByRole('img', { name: /Amaceit logo/ })
      .first()
      .click();
    await expect(page).toHaveURL('/');
  });
});
