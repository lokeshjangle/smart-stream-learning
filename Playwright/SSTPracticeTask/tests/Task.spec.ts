import test from '@playwright/test';
import { POManager } from '../PageObjectModel/POManager';
import { LoginPage } from '../PageObjectModel/LoginPage';
import { HomePage } from '../PageObjectModel/HomePage';
import { LookupsPage } from '../PageObjectModel/LookupsPage';
import { CurrencyDetails } from '../PageObjectModel/CurrencyDetails';

test('TCA183633', async function ({ page }) {
  //Variable declaration
  const userDetails: {
    userName: string;
    password: string;
  } = {
    userName: 'USER5',
    password: 'password',
  };
  const currencyDetails: CurrencyDetails = {
    currency: 'LOC',
    decimalPlace: 2,
    redominationCurrency: 'LOK',
    redominationCurrencyRate: 2.25,
  };
  let loginPage: LoginPage;
  let homePage: HomePage;
  let lookupPage: LookupsPage;

  // await page.pause();

  //Test written
  const poManager: POManager = new POManager(page);

  //Login Page
  loginPage = await poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validateLogin(userDetails.userName, userDetails.password);

  //Home Page
  homePage = await poManager.getHomePage();
  await homePage.navigateToLookups();

  //Lookup Page
  lookupPage = await poManager.getLookupPage();
  await lookupPage.navigateToCurrency();
  await lookupPage.createCurrency(currencyDetails);
  await lookupPage.quickFilter(currencyDetails.currency);
  await lookupPage.verifyDate();
  await page.pause();
});
