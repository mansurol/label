// SignInPage.js
class SignInPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('input[placeholder="Your email address"]');
      this.passwordInput = page.locator('input[placeholder="Your password"]');
      this.signInButton = page.getByRole('button', { name: 'SIGN IN' });
    }
  
    async fillEmail(email) {
      await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.emailInput.fill(email);
    }
  
    async fillPassword(password) {
      await this.passwordInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.passwordInput.fill(password);
    }
  
    async clickSignInButton() {
      await this.signInButton.waitFor({ state: 'visible', timeout: 10000 });
      await this.signInButton.click();
    }
  

  }
  
  module.exports = SignInPage;
  