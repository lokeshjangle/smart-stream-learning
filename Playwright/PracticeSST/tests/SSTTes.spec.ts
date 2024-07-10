import test, { expect, Locator } from '@playwright/test';
const searchOption = async function (
  spanLocator: Locator,
  value: string
): Promise<void> {
  for (const optionElement of await spanLocator.all()) {
    const option: string | null = await optionElement.textContent();
    if (option?.includes(value)) {
      await optionElement.click();
      // await page.pause();
      break;
    }
  }
  // for (let i = 0; i < optionCount; ++i) {
  //   const option: string | null = await spanLocator.nth(i).textContent();
  //   if (option?.includes(value)) {
  //     await spanLocator.nth(i).click();
  //     // await page.pause();
  //     break;
  //   }
  // }
};

test('login and create currency', async function ({ page }) {
  const userName: string = 'USER5';
  const password: string = 'password';
  const currency: string = 'LOK';
  const decimalPlace: number = 2;
  const redominationCurrency: string = 'GUN';
  const redominationCurrencyRate: number = 2.25;

  page.goto('https://192.168.111.114:8443/recs-ui/');

  //Login
  const login = async function (
    userName: string,
    password: string
  ): Promise<void> {
    await page

      .locator('//input[normalize-space(@placeholder)="Username..."]')
      .fill(userName);
    await page
      .locator('//input[normalize-space(@placeholder)="Password..."]')
      .fill(password);

    await page
      .locator('//button//span[normalize-space(text())="Login"]')
      .click();
  };

  //open Lookup
  const clickOnLookup = async function (): Promise<void> {
    //Click on lookups
    await page.locator('//a[@id="lnkStaticDataPage"]//div').click();
  };

  //Swich to currency tab
  const clickOnCurrency = async function (): Promise<void> {
    //Click on currency
    await page
      .locator('//nav//span[normalize-space(text())="CURRENCY"]')
      .click();
  };

  //Create currency
  const createCurrency = async function (
    currency: string,
    decimalPlace: number,
    redominationCurrency: string,
    redominationCurrencyRate: number
  ): Promise<void> {
    await page
      .locator('//button//span[normalize-space(text())="Create Currency"]')
      .click();

    await page
      .locator('//*[@data-locator="currency-input"]//input')
      .fill(currency);
    const saveButton: string =
      '//*[@data-locator="currency-form-button-toolbar"]//button//span[normalize-space(text())="Save"]'; //doubt
    await expect(page.locator(saveButton)).toBeVisible();

    const decimalPlaceInput: string =
      '//*[@data-locator="decimals-dropdown"]//input'; //decimalPlace input field
    const parentDiv: string =
      '//ancestor::div//following-sibling::div[@class="cdk-overlay-container"]'; //Highest parent div
    await page
      .locator(decimalPlaceInput)
      .pressSequentially(decimalPlace.toString());

    const decimalPlaceDropdown: Locator = page.locator(
      decimalPlaceInput + parentDiv
    );
    const decimalPlaceSpan: Locator = decimalPlaceDropdown.locator('//span');
    // const decimalPlaceOptionCount: number = await decimalPlaceSpan.count();
    await searchOption(decimalPlaceSpan, decimalPlace.toString());

    //Redomination Currency
    const redInput: string =
      '//*[@data-locator="redenom-code-dropdown"]//input'; //Redomination input field
    await page.locator(redInput).pressSequentially(redominationCurrency);

    const redominationCurrencyDropdown: Locator = page.locator(
      redInput + parentDiv
    ); //Redomiation currency dropdown

    const redominationCurrencySpan: Locator =
      redominationCurrencyDropdown.locator('//span'); //redomination currency span folder
    // const redominationOptionCount: number =
    // await redominationCurrencySpan.count();
    // console.log(redominationOptionCount);
    await searchOption(redominationCurrencySpan, redominationCurrency);
    await page
      .locator('//*[@data-locator="redenom-rate-input"]//input')
      .fill(redominationCurrencyRate.toString());

    await page
      .locator('//*[@data-locator="description-input"]//textarea')
      .fill(`${currency} currency`);

    // await page.locator(saveButton).click();
  };

  //Quick Filter Currency
  const quickFilter = async function (currency: string): Promise<void> {
    await page
      .locator('//div[@class="tlmv-c-editable-text-content ng-star-inserted"]')
      .click();

    const quickSearchFormElement: string = `//div[@class="tlmv-c-editable-text-content-form-element ng-star-inserted"]`;
    await expect(page.locator(quickSearchFormElement)).toBeVisible();
    await page.locator(quickSearchFormElement).pressSequentially(currency);
  };

  await login(userName, password);
  await clickOnLookup();
  await clickOnCurrency();
  await createCurrency(
    currency,
    decimalPlace,
    redominationCurrency,
    redominationCurrencyRate
  );
  // await quickFilter(currency);

  const date: string | null = await page
    .locator(`//tlmv-list-item-date-field`)
    .first()
    .textContent();
  console.log(date);
  await page.pause();
});
