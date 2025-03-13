// signUpAndVerify.test.js
import { test, expect } from '@playwright/test';
require('dotenv').config();
const SignUpPage = require('./signUpPage');
const VerificationPage = require('./VerificationPage'); 
const SignInPage = require('./SignInPage');
const ForgotPasswordPage = require('./ForgotPasswordPage'); 
const ResetPasswordPage = require('./ResetPasswordPage');


test('Sign up ', async ({ page }) => {
  test.setTimeout(120000); 

 
  const signUpPage = new SignUpPage(page);

  await page.goto(process.env.URL);

  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Register Here' }).click();

  
  await signUpPage.fillSignUpForm('mansurol', 'islam', process.env.EMAIL, process.env.MOBILE, process.env.PASS, process.env.COPASS);

  
  await signUpPage.submitSignUp();


  await signUpPage.fillOTP('123456');  
  await signUpPage.submitOTP();


  await page.waitForTimeout(2000);


});



test('VerifyEmail', async ({ page }) => {
  const verificationPage = new VerificationPage(page);

  await page.goto(process.env.mailosaurURL);
  await verificationPage.signIn();
  await page.waitForTimeout(5000);
  await verificationPage.clickGoogleSignIn();
  await page.waitForTimeout(5000);

  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill(process.env.userEmail);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(5000);
  await verificationPage.enterPassword(process.env.userPass);
  await page.waitForTimeout(5000);

  
  await verificationPage.openInbox();  
  await page.waitForTimeout(5000);

  await verificationPage.clickConfirmationEmail(); 
  await verificationPage.clickVerificationLink(); 
  await page.waitForTimeout(5000);
});


test('Sign In ', async ({ page }) => {
  const signInPage = new SignInPage(page);  

  await page.goto(process.env.URL);
  await page.waitForTimeout(3000);
  await page.waitForLoadState('networkidle');

 
  await page.locator('text=LOG IN').click();

  
  await signInPage.fillEmail(process.env.EMAIL);
  await signInPage.fillPassword(process.env.PASS);
  await signInPage.clickSignInButton();

  
  await page.waitForTimeout(3000);

  

});

test('Forgot Password', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);  

  await page.goto(process.env.URL);
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Forgot password?' }).click();
  
  await page.waitForTimeout(3000);
  await forgotPasswordPage.fillEmail(process.env.EMAIL);
  await forgotPasswordPage.clickSendVerificationLink();
  await page.waitForTimeout(3000);
  
  
});

test('ResetPasswordVerification link', async ({ page }) => {
  const verificationPage = new VerificationPage(page);
  const resetPasswordPage = new ResetPasswordPage(page);

  await page.goto(process.env.mailosaurURL);
  await verificationPage.signIn();
  await verificationPage.clickGoogleSignIn();
  await page.waitForTimeout(5000);
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill(process.env.userEmail);

  await page.getByRole('button', { name: 'Next' }).click();
  await page.waitForTimeout(5000);
  await verificationPage.enterPassword(process.env.userPass);
  await page.waitForTimeout(5000);

  
  await verificationPage.openInbox();  
  await page.waitForTimeout(3000);


  await resetPasswordPage.openResetEmail()
   await resetPasswordPage.clickResetLink();

  // Fill and confirm new password
  await resetPasswordPage.fillNewPassword(process.env.ResetPass);
  await resetPasswordPage.confirmNewPassword(process.env.confirmResetPass);

  // Submit password reset
  await resetPasswordPage.resetPassword();


  await page.waitForTimeout(5000);
});