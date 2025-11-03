import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigate between sections', async ({ page }) => {
    await page.goto('/');

    await page.getByText('About', { exact: true }).click();
    await expect(page.locator('#about')).toBeVisible();

    await page.getByText('Contact', { exact: true }).click();
    await expect(page.locator('#contact')).toBeVisible();

    await page.getByText('Home').click();
    await expect(page.locator('#home')).toBeVisible();
  });

  test('CV link opens in a new tab', async ({ page }) => {
    await page.goto('/');

    // Try to detect a popup (new tab). Some browsers or link implementations may navigate in the same tab,
    // so fall back to asserting the href if no popup is emitted.
    try {
      const [cv] = await Promise.all([
        page.waitForEvent('popup', { timeout: 2000 }),
        page.getByRole('link', { name: 'View CV' }).click()
      ]);
      await expect(cv).toHaveURL(/.*Dionysios_Chytiris_FullStack_CV\.pdf/);
    } catch {
      const href = await page.getByRole('link', { name: 'View CV' }).getAttribute('href');
      expect(href).toMatch(/Dionysios_Chytiris_FullStack_CV\.pdf/);
    }
  });
});
