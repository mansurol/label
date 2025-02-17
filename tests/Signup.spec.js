import { test, expect } from '@playwright/test';
require('dotenv').config();

test('signup', async ({ page }) => {

  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Register Here' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).click();
  await page.getByRole('textbox', { name: 'First Name*' }).fill('mansurol');
  await page.getByRole('textbox', { name: 'Last Name*' }).click();
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('islam');
  await page.getByRole('textbox', { name: 'Email Address*' }).click();
  await page.getByRole('textbox', { name: 'Email Address*' }).fill(process.env.EMAIL);
  await page.locator('#phoneNumber').getByRole('textbox').click();
  await page.locator('#phoneNumber').getByRole('textbox').fill(process.env.MOBILE);
  await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill('1qaz2wsx');
  await page.getByRole('textbox', { name: 'Confirm Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill('1qaz2wsx');
  await page.getByRole('button', { name: 'Register' }).click();
  

});

