import { test, expect } from '@playwright/test';

test('productsort', async ({ page }) => {
  await page.goto('https://labelgift.co.design/');
  await page.getByRole('link', { name: 'All Gifts' }).click();
  await page.getByRole('button', { name: 'Sort By: Default' }).click();
  await page.getByRole('button', { name: 'Price Low To High' }).click();
  await page.waitForTimeout(4000);
  await page.getByRole('button', { name: 'Sort By: Price Low To High' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('listitem').filter({ hasText: 'Newest' }).click();
  await page.waitForTimeout(5000);
});