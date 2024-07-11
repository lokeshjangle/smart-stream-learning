class LoginPage {
  constructor(page) {
    this.signInbutton = page.locator("[value='Login']");
    this.userName = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
  }

  validLogin() {
    page.locator('#userEmail').fill(email);
    page.locator('#userPassword').fill('Lokesh@123');
    page.locator("[value='Login']").click();
  }
}
