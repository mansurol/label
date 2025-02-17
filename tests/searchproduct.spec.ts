import { test, expect } from '@playwright/test';
require('dotenv').config();

test('Search and click product', async ({ page }) => {
  // Open the website
  await page.goto("https://labelgift.co.design");

  // Locate search input using ID and enter a query
  await page.locator('#search').click();
  await page.locator('#search').fill('blueberry');



  // Wait for results to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);

  await page.locator('a[href="/product-detail/blueberry-cake"]').first().click();
 
 
});
