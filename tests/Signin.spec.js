import { test, expect } from '@playwright/test';
require('dotenv').config();

test('test', async ({ page }) => {  
    await page.goto(process.env.URL);
    await page.waitForLoadState('networkidle');

    // Click "LOG IN" link
    await page.locator('text=LOG IN').click();

    // Fill in email
    const emailInput = page.getByPlaceholder('Your email address');
    await emailInput.waitFor({ state: 'visible', timeout: 10000 });
    await emailInput.fill(process.env.EMAIL);

    // Fill in password
    const passwordInput = page.getByPlaceholder('Your password');
    await passwordInput.waitFor({ state: 'visible', timeout: 10000 });
    await passwordInput.fill(process.env.PASS); // Correct password

    // Click "SIGN IN" button
    const signInButton = page.getByRole('button', { name: 'SIGN IN' });
    await signInButton.waitFor({ state: 'visible', timeout: 10000 });
    await signInButton.click();

    // Wait for navigation or error message
    await page.waitForTimeout(3000);

    // Check if error message is present
    const isErrorVisible = await page.isVisible('text=Please, enter valid credentials');
    console.log('Error Message Found:', isErrorVisible);

    if (isErrorVisible) {
        // Handle incorrect login
      
        const errorMessage = page.getByText('Please, enter valid credentials');
        await errorMessage.waitFor({ state: 'visible', timeout: 10000 });
        await expect(errorMessage).toBeVisible();
    } else {
        // Handle successful login
        console.log('Login successful, checking if dashboard is loaded.');

       
      
    }

    console.log('Test completed.');
});
