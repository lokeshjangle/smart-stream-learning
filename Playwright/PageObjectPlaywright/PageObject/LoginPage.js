class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = this.page.locator('#userEmail');
    this.password = this.page.locator('#userPassword');
    this.signInbutton = this.page.locator("[value='Login']");
    this.cardBody = this.page.locator('.card-body b');
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async validLogin(email, password) {
    await this.userName.fill(email);
    await this.password.fill(password);
    await this.signInbutton.click();
    await this.cardBody.first().waitFor();
  }
}

export { LoginPage };
