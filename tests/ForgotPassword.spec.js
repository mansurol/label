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
  await page.waitForTimeout(2000);

  // Gmail link
  await page.goto(process.env.forgotPasswordURL);

  //PaswordReset
  
  await page.locator('#password').click()
  await page.locator('#password').fill(process.env.Resetpassword)
  await page.locator('#confirm_password').click()
  await page.locator('#confirm_password').fill(process.env.ConfirmResetpassword) 
  await page.getByRole('button', { name: 'Reset Password' }).click()

});
