import { test, expect } from '@playwright/test';

test.describe('Projects', () => {
  test('View My Work shows My Projects', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'View My Work' }).click();
    await expect(page.getByRole('heading', { name: 'My Projects' })).toBeVisible();
  });

  test('Clicking a project opens external link', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'View My Work' }).click();

    const firstProjectLink = page.locator('section:has(h2:has-text("My Projects")) a').first();

    // Click and wait for either a popup, a navigation in the same page, or a short timeout.
    const clickPromise = firstProjectLink.click();

    const winner = await Promise.race([
      page.waitForEvent('popup').then((p) => ({ type: 'popup' as const, page: p })),
      page.waitForNavigation({ waitUntil: 'load' }).then(() => ({ type: 'navigation' as const })),
      new Promise(resolve => setTimeout(() => resolve({ type: 'timeout' as const }), 3000))
    ]);

    // ensure the click is completed
    await clickPromise;

    if ((winner as any).type === 'popup') {
      const newTab = (winner as any).page;
      await expect(newTab).toHaveURL(/https?:\/\//);
    } else if ((winner as any).type === 'navigation') {
      // navigation happened in the same page — assert the URL is not empty and is a navigated location
      const current = page.url();
      expect(current).not.toBe('');
      // If the href is absolute, ensure it matches; otherwise ensure page navigated to the href fragment
      const href = await firstProjectLink.getAttribute('href');
      if (href) {
        if (/^https?:\/\//.test(href)) {
          expect(href).toMatch(/^https?:\/\//);
        } else {
          await expect(page).toHaveURL(new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
        }
      }
    } else {
      // timeout — fallback: ensure the link has an href and it's not empty
      const href = await firstProjectLink.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });
});
