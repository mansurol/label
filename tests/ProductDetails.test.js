import { test, expect } from '@playwright/test';
require('dotenv').config();

test('Product Details Verification', async ({ page }) => {
    // Navigate to the product page
    await page.goto(process.env.ProductURL);

    // Click on the product link
    await page.getByRole('link', { name: 'Best Seller Love You Bow Candle BDT 313 BDT' }).click()
    // Verify the product title
    const productTitle = await page.locator('h1').textContent();
    expect(productTitle?.trim()).toBe('Love You Bow Candle');

    // Verify the price
    const productPrice = await page.locator('text=BDT 313').textContent();
    expect(productPrice?.replace(/\s+/g, ' ').trim()).toContain('BDT 313');


    // Verify the discount price
    const discountPrice = await page.locator('text=BDT 333').textContent();
    expect(discountPrice?.replace(/\s+/g, ' ').trim()).toContain('BDT 333');

    // Verify the save amount
    const saveAmount = await page.locator('text=Save BDT 20').textContent();
    expect(saveAmount).toContain('Save BDT 20');

   
    await expect(page.locator('button', { hasText: '-' })).toBeVisible();
    await expect(page.locator('button', { hasText: '+' })).toBeVisible();
    await page.waitForTimeout(3000);
    page.locator('button', { hasText: '+' }).click()
    await page.waitForTimeout(3000);
   
    await expect(page.getByRole('textbox',{name:'The Message on the Cake'})).toBeVisible();
    await page.getByRole('textbox',{name:'The Message on the Cake'}).click()
    await page.getByRole('textbox',{name:'The Message on the Cake'}).fill('happy birthday')
   
    await expect(page.locator('text=Choose Wrapping Paper')).toBeVisible();

    await expect(page.locator('text=/Want to gift wrap it\\?/i')).toBeVisible();
    await expect(page.locator('text=/\\bYES\\b/i')).toBeVisible();
    await expect(page.locator('text=/\\bNO\\b/i')).toBeVisible();
    await page.getByText('YES', { exact: true }).click();


    
    await page.locator('div:nth-child(2) > .swiper-wrapper > div:nth-child(4) > .border-transparent > .w-full').click();
 
    const addToCartButton = await page.locator('button', { hasText: 'ADD TO CART' });
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();

    await page.getByRole('button', { name: 'Product Description' }).click();
    await page.waitForTimeout(3000);

  await page.locator('div:nth-child(2) > .h-\\[60px\\]').click();
  await page.waitForTimeout(3000);

  await page.locator('div:nth-child(3) > .h-\\[60px\\]').click();
  await page.waitForTimeout(3000);

  await page.locator('.absolute > button:nth-child(2)').first().click();
  await page.waitForTimeout(3000);

  await page.locator('.bg-linen').first().click();


  await page.waitForTimeout(5000);

    console.log('✅ Product details verification completed successfully.');
});
