import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://portofolio-website-six-rust.vercel.app/');
  await page.locator('body').click();

  // Expect a title "to contain" a substring.
  await page.locator('#home').click();
  await page.getByRole('button', { name: 'Light' }).click();
  await page.getByRole('button', { name: 'Dark' }).click();
  await page.getByRole('button', { name: 'System' }).click();
  await page.getByRole('button', { name: 'View My Work' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'View CV' }).click();
  const page1 = await page1Promise;
  await page.getByText('About', { exact: true }).click();
  await page.getByText('Contact', { exact: true }).click();
  await page.getByText('Home').click();
  await page.locator('.flex.mt-10 > div:nth-child(2)').first().click();
  await page.getByRole('link', { name: 'World Wise Trivia World Wise' }).click();
  await page.goto('https://portofolio-website-six-rust.vercel.app/');
});

test('get started link', async ({ page }) => {
  await page.goto('https://portofolio-website-six-rust.vercel.app/');

  // Click the "View My Work" button (existing on the page) instead of the non-existing "Get started" link.
  await page.getByRole('button', { name: 'View My Work' }).click();

  // Expects page to have a heading with the name "My Projects".
  await expect(page.getByRole('heading', { name: 'My Projects' })).toBeVisible();
});
