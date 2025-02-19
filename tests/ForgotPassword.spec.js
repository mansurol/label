import { test, expect } from '@playwright/test';
require('dotenv').config();
test('test', async ({ page }) => {
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Forgot password?' }).click();
  
  // Use the ID to locate the email input field
  const emailTextbox = page.locator('#email');
  await emailTextbox.click();
  await emailTextbox.fill(process.env.EMAIL);
  
  await page.getByRole('button', { name: 'Send Verification Link' }).click();
 


});
