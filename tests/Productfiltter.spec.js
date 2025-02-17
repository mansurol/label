import { test, expect } from '@playwright/test';

test('perfrct gift filtter', async ({ page }) => {
  await page.goto('https://labelgift.co.design/');

  await page.getByPlaceholder('Who is it for?').click();
  await page.getByRole('option', { name: 'For Him' }).click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('What do They Like?').click();
  await page.getByRole('option', { name: 'Book Lovers' }).click();
  await page.waitForTimeout(3000);

  await page.getByPlaceholder('What’s the occasion?').click();
  await page.getByRole('option', { name: 'Easter Gifts' }).click();
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Show Result' }).click();
});