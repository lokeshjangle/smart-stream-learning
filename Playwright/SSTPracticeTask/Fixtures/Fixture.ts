import { test as basetest } from '@playwright/test';
import { LoginPage } from '../PageObjectModel/LoginPage';
import { HomePage } from '../PageObjectModel/HomePage';
import { CurrencyPage } from '../PageObjectModel/CurrencyPage';

type Fixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  currencyPage: CurrencyPage;
};

export const test = basetest.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  currencyPage: async ({ page }, use) => {
    await use(new CurrencyPage(page));
  },
});
