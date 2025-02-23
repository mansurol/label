// ForgotPasswordPage.js
class ForgotPasswordPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('#email');
      this.sendVerificationButton = page.getByRole('button', { name: 'Send Verification Link' })
    }
  
    async fillEmail(email) {
      await this.emailInput.waitFor({ state: 'visible', timeout: 10000 });
      await this.emailInput.fill(email);
    }
  
    async clickSendVerificationLink() {
      await this.sendVerificationButton.waitFor({ state: 'visible', timeout: 10000 });
      await this.sendVerificationButton.click();
    }
  }
  
  module.exports = ForgotPasswordPage;
  