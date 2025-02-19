import { test, expect } from '@playwright/test';

test('confirm email', async ({ page }) => {
  // Go to ProtonMail
  await page.goto('https://account.proton.me/mail');
  
  // Login
  await page.getByRole('textbox', { name: 'Email or username' }).fill('mansurol@proton.me');
  await page.getByRole('textbox', { name: 'Password' }).fill('Mansurol@12345');
  await page.getByRole('button', { name: 'Sign in' }).click();
  
  // Wait for login
  await page.waitForTimeout(15000);


  // Open email
await page.locator('text=Account confirmation e-mail').first().click();

  // Wait for email content to load
  await page.waitForTimeout(2000);

  // Click on the confirmation link inside the email
  await page.locator('[data-testid="content-iframe"]').contentFrame().getByRole('link', { name: 'https://labelgift.co.design/' }).click();
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Confirm opening of link https' }).click();
  const page1 = await page1Promise;
  // Wait for the confirmation page to load
  await page.waitForTimeout(5000);
});

