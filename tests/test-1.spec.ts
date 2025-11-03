import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#home')).toBeVisible();
  await expect(page.getByRole('button', { name: 'View My Work' })).toBeVisible();
});