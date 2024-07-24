import { test } from '../Fixtures/Fixture';
import { CurrencyType } from '../PageObjectModel/CurrencyPage';

test('TCA183633', async function ({ loginPage, currencyPage }) {
  //Variable declaration
  const userName = 'USER5';
  const password = 'password';

  const currencyDetails: CurrencyType = {
    currency: 'LOS',
    decimalPlace: 2,
    redenominationCurrency: 'LOK',
    redenominationCurrencyRate: 2.25,
    // description: `Currency Created`,
  };

  //Login Page
  await loginPage.goToLoginPage();
  await loginPage.login(userName, password);

  //Lookup Page
  await currencyPage.navigateToLookups();
  await currencyPage.navigateToCurrencyTab();
  await currencyPage.createCurrency(currencyDetails);
  await currencyPage.validatePopup(' Currency saved successfully ');
  await currencyPage.quickFilter(currencyDetails.currency);
  await currencyPage.verifyDateForActiveFrom();
});

//TCA183654 - Update Currency using Inspector page
test('TCA183654 - Update Currency using Inspector page', async function ({
  loginPage,
  currencyPage,
}) {
  //Variable declaration
  const userName = 'USER5';
  const password = 'password';

  const currencyDetails: CurrencyType = {
    currency: 'LOK',
    decimalPlace: 3,
    redenominationCurrency: 'LOC',
    redenominationCurrencyRate: 1.25,
    // description: `Currency Created`,
  };

  //Login Page
  await loginPage.goToLoginPage();
  await loginPage.login(userName, password);

  //Lookup Page
  await currencyPage.navigateToLookups();
  await currencyPage.navigateToCurrencyTab();
  await currencyPage.quickFilter(currencyDetails.currency);
  await currencyPage.updateCurrency(currencyDetails);
  await currencyPage.validatePopup(' Currency saved successfully ');
  await currencyPage.quickFilter(currencyDetails.currency);
  await currencyPage.verifyDateForActiveFrom();
});
