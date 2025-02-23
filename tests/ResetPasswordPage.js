class ResetPasswordPage {
    constructor(page) {
      this.page = page;
    }
  
    async openResetEmail() {
      await this.page.locator('text=Password reset e-mail').first().click();
    }
  
    async clickResetLink() {
      await this.page.getByRole('link', { name: 'https://labelgift.co.design/' }).click();
    }
  
    async fillNewPassword(password) {
      await this.page.locator('#password').click();
      await this.page.locator('#password').fill(password);
    }
  
    async confirmNewPassword(confirmPassword) {
      await this.page.locator('#confirm_password').click();
      await this.page.locator('#confirm_password').fill(confirmPassword);
    }
  
    async resetPassword() {
      await this.page.getByRole('button', { name: 'Reset Password' }).click();
    }
  }
  
  module.exports = ResetPasswordPage;
  