import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly signInbutton: Locator;
  readonly cardBody: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.locator('#userEmail');
    this.password = this.page.locator('#userPassword');
    this.signInbutton = this.page.locator("[value='Login']");
    this.cardBody = this.page.locator('.card-body b');
  }

  async goTo() {
    await this.page.goto('https://rahulshettyacademy.com/client');
  }

  async validLogin(email: string, password: string) {
    await this.userName.fill(email);
    await this.password.fill(password);
    await this.signInbutton.click();
    await this.cardBody.first().waitFor();
  }
}
