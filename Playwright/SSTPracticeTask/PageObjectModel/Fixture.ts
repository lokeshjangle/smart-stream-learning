import { test as basetest } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { CurrencyPage } from './CurrencyPage';

type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  currencyPage: CurrencyPage;
};

export const test = basetest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  currencyPage: async ({ page }, use) => {
    await use(new CurrencyPage(page));
  },
});
