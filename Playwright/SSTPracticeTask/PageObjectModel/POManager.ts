import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { LookupsPage } from './LookupsPage';

export class POManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly homePage: HomePage;
  private readonly lookupsPage: LookupsPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.lookupsPage = new LookupsPage(this.page);
  }

  async getLoginPage(): Promise<LoginPage> {
    return this.loginPage;
  }

  async getHomePage(): Promise<HomePage> {
    return this.homePage;
  }

  async getLookupPage(): Promise<LookupsPage> {
    return this.lookupsPage;
  }
}
