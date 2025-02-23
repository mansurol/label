// signUpPage.js
class SignUpPage {
    constructor(page) {
      this.page = page;
      this.firstNameField = page.getByRole('textbox', { name: 'First Name*' });
      this.lastNameField = page.getByRole('textbox', { name: 'Last Name*' });
      this.emailField = page.locator('#email');
      this.phoneField = page.locator('#phoneNumber').getByRole('textbox');
      this.passwordField = page.locator('#password').nth(1); 


      this.confirmPasswordField =page.locator('#confirmPassword');
      this.registerButton = page.getByRole('button', { name: 'Register', exact: true });

      this.otpInputs = [
       page.locator('input[aria-label="OTP input 1"]'),
        page.locator('input[aria-label="OTP input 2"]'),
        page.locator('input[aria-label="OTP input 3"]'),
        page.locator('input[aria-label="OTP input 4"]'),
        page.locator('input[aria-label="OTP input 5"]'),
        page.locator('input[aria-label="OTP input 6"]')
      ];
      this.submitButton = page.getByRole('button', { name: 'Submit' });


    }
  
    async fillSignUpForm(firstName, lastName, email, phone, password,confirmPassword) {
        console.log("password",password)
      await this.firstNameField.fill(firstName);
      await this.lastNameField.fill(lastName);
      await this.emailField.fill(email);
      await this.phoneField.fill(phone);
      await this.passwordField.fill(password);
      await this.confirmPasswordField.fill(confirmPassword);
    }
  
    async submitSignUp() {
      await this.registerButton.click();
    }
  
    async fillOTP(otp) {
        console.log(otp)
      for (let i = 0; i < otp.length; i++) {
        await this.otpInputs[i].fill(otp[i]);
      }
    }
  
    async submitOTP() {
      await this.submitButton.click();
    }
  }
  
  module.exports = SignUpPage;
  