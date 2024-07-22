import { test } from '../Fixtures/Fixture';
import { CurrencyDetails } from '../PageObjectModel/CurrencyPage';

test('TCA183633', async function ({ loginPage, currencyPage }) {
  //Variable declaration
  const userName = 'USER5';
  const password = 'password';

  const currencyDetails: CurrencyDetails = {
    currency: 'LOC',
    decimalPlace: 2,
    redominationCurrency: 'LOK',
    redominationCurrencyRate: 2.25,
    // description: `Currency Created`,
  };

  //Login Page
  await loginPage.goToLoginPage();
  await loginPage.Login(userName, password);

  //Lookup Page
  await currencyPage.navigateToLookups();
  await currencyPage.navigateToCurrencyTab();
  await currencyPage.createCurrency(currencyDetails);
  await currencyPage.validatePopup(' Currency saved successfully ');
  await currencyPage.quickFilter(currencyDetails.currency);
  await currencyPage.verifyDateForActiveFrom();
});
