import { test } from '../PageObjectModel/Fixture';
import { CurrencyDetails } from '../PageObjectModel/CurrencyPage';

test('TCA183633', async function ({ loginPage, homePage, currencyPage }) {
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
    description: `${this.currency} currency`,
  };

  //Login Page
  await loginPage.goToLoginPage();
  await loginPage.Login(userDetails.userName, userDetails.password);

  //Home Page
  await homePage.navigateToLookups();

  //Lookup Page
  await currencyPage.navigateToCurrency();
  await currencyPage.createCurrency(currencyDetails);
  await currencyPage.quickFilter(currencyDetails.currency);
  await currencyPage.verifyDateForActiveFrom();
});
