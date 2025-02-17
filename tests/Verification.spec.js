import { test, expect } from '@playwright/test';
require('dotenv').config();

test('Sign up and verify via email', async ({ page, context }) => {
  test.setTimeout(120000); // Increase test timeout to 2 minutes


  // Perform actions in the new tab for registration
  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Register Here' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('mansurol');
  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('islam');
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*', exact: true }).fill(process.env.EMAIL);
  await page.locator('#phoneNumber').getByRole('textbox').click();
  await page.locator('#phoneNumber').getByRole('textbox').fill(process.env.MOBILE);
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('1qaz2wsx');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('1qaz2wsx');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('textbox', { name: 'OTP input 1' }).fill('1');
  await page.getByRole('textbox', { name: 'OTP input 2' }).fill('2');
  await page.getByRole('textbox', { name: 'OTP input 3' }).fill('3');
  await page.getByRole('textbox', { name: 'OTP input 4' }).fill('4');await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('textbox', { name: 'OTP input 5' }).fill('5');
  await page.getByRole('textbox', { name: 'OTP input 6' }).fill('6');
  await page.getByRole('button', { name: 'Submit' }).click();

  await page.getByRole('button').filter({ hasText: /^$/ }).click();
  await page.waitForTimeout(10000); 
  //await page.bringToFront(); 
  await page.waitForTimeout(5000);

});
