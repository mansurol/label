import { test, expect } from '@playwright/test';
require('dotenv').config();
const SignInPage = require('./SignInPage')
const CheckOutPage = require('./CheckOutPages')

test('Checkout system ', async ({ page }) => {
    const signInPage = new SignInPage(page);  
    const checkOutPage = new CheckOutPage(page)

    await page.goto(process.env.URL);
    await page.waitForTimeout(3000);
    await page.waitForLoadState('networkidle');
  
   
    await page.locator('text=LOG IN').click();
  
    
    await signInPage.fillEmail(process.env.EMAIL);
    await signInPage.fillPassword(process.env.PASS);
    await signInPage.clickSignInButton();
  
    
    await page.waitForTimeout(3000);
    await checkOutPage.addItemToCart()
    await checkOutPage.proceedToCheckout()
  
    
  
  });

 

