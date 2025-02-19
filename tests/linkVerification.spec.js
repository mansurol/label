import { test, expect } from '@playwright/test';
require('dotenv').config();
test('VerifyEmail', async ({ page }) => {


await page.goto('https://mailosaur.com/');
await page.getByTestId('desktop-signin').click();
await page.getByTestId('google').click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();

await page.getByRole('textbox', { name: 'Email or phone' }).fill(process.env.userEmail);
await page.waitForTimeout(5000);
await page.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
await page.waitForTimeout(5000);
await page.getByRole('textbox', { name: 'Enter your password' }).fill(process.env.userPass);
await page.waitForTimeout(10000);
await page.getByRole('textbox', { name: 'Enter your password' }).press('Enter');
await page.waitForTimeout(10000);
await page.goto('https://mailosaur.com/app');

await page.getByRole('link', { name: 'Go to inbox' }).click();
await page.waitForTimeout(5000);

await page.locator('text=Account confirmation e-mail').first().click();
await page.getByRole('link', { name: 'https://labelgift.co.design/' }).click()
await page.getByRole('button', { name: 'Go to Login' }).click()
await page.waitForTimeout(10000);

});