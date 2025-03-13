const { test, expect } = require('@playwright/test');

test('CartManagement', async ({ page }) => {
  await page.goto('https://labelgift.co.design/product-detail/blueberry-cake');
  await page.getByRole('button', { name: 'Add to Cart' }).click();
 await page.getByRole('navigation', { name: 'Top' }).getByRole('button').nth(1).click()
 await page.getByRole('button', { name: '+' }).dblclick();
 await page.waitForTimeout(3000);

await page.getByRole('button', { name: '-' }).click();
await page.waitForTimeout(1000);
 await page.getByRole('listitem').getByRole('button').filter({ hasText: /^$/ }).click();
 await page.waitForTimeout(3000);

 await page.getByRole('button', { name: 'Close panel' }).click();
});
