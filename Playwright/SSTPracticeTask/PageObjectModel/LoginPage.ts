import { Locator, Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly signIn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.getByPlaceholder('Username...');
    this.password = this.page.getByPlaceholder('Password...');
    this.signIn = this.page.getByRole('button', { name: 'Login' });
  }

  async goToLoginPage() {
    await this.page.goto('https://192.168.109.202:8443/recs-ui/');
  }

  /* Validate Login*/
  async Login(userName: string, password: string) {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.signIn.click();
  }
}
