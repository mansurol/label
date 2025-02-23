// VerificationPage.js
class VerificationPage {
    constructor(page) {
      this.page = page;
      this.inboxLink = page.locator('[data-testid="wbthtyku-0"]');
      this.emailLink = page.locator('text=Account confirmation e-mail');
      this.verificationLink = page.getByRole('link', { name: 'https://labelgift.co.design/' });
      this.signInButton = page.locator('[data-testid="desktop-signin"]');
      this.googleButton = page.locator('[data-testid="google"]');
      this.emailField = page.getByRole('textbox', { name: 'Email or phone' });
      this.passwordField = page.getByRole('textbox', { name: 'Enter your password' });
    }
  
    async openInbox() {
      await this.inboxLink.click();
    }
  
    async clickConfirmationEmail() {
      await this.emailLink.first().click();
    }
  
    async clickVerificationLink() {
      await this.verificationLink.click();
    }

    async signIn() {
      await this.signInButton.click();
    }
  
    async clickGoogleSignIn() {
      await this.googleButton.click();
    }

    async enterEmail(email) {
      await this.emailField.click();
      await this.emailField.fill(email);
      await this.emailField.press('Enter');
    }
  
    async enterPassword(password) {
      await this.passwordField.fill(password);
      await this.passwordField.press('Enter');
    }
  

  }
  
  module.exports = VerificationPage;
  