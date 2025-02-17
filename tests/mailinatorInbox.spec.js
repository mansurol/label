import { test, expect } from '@playwright/test';
require('dotenv').config();

test('mail', async ({ page }) => {

await page.goto('https://mailosaur.com/');
await page.getByTestId('desktop-signin').click();
await page.getByTestId('google').click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).fill('mansurol@co.design');
await page.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
await page.getByRole('textbox', { name: 'Enter your password' }).click();
await page.getByRole('textbox', { name: 'Enter your password' }).fill('Mansurol@12345');
await page.getByRole('textbox', { name: 'Enter your password' }).press('Enter');
await page.goto('https://mailosaur.com/app');
await page.getByTestId('desktop-signin').click();

  

});

