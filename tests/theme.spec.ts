import { test, expect } from '@playwright/test';

test.describe('Theme switcher', () => {
  test('switch between Light, Dark, and System', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Dark' }).click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.getByRole('button', { name: 'Light' }).click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);

    await page.getByRole('button', { name: 'System' }).click();
    await expect(page.getByRole('button', { name: 'View My Work' })).toBeVisible();
  });
});
