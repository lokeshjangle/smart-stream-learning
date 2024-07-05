import test, { expect } from '@playwright/test';
const searchOption = async function (
  optionCount: number,
  spanLocator,
  value: string
): Promise<void> {
  for (let i = 0; i < optionCount; ++i) {
    const option: string = await spanLocator.nth(i).textContent();
    if (option?.includes(value)) {
      await spanLocator.nth(i).click();
      // await page.pause();
      break;
    }
  }
};
test('login and create currency', async function ({ page }) {
  const userName: string = 'USER5';
  const password: string = 'password';
  const currency: string = 'LOK';
  const decimalPlace: number = 2;
  const redominationCurrency: string = 'GUN';
  const redominationCurrencyRate: number = 2.25;

  page.goto('https://192.168.111.114:8443/recs-ui/');
  const login = async function (userName: string, password: string) {
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
  const clickOnLookup = async function () {
    //Click on lookups
    await page.locator('//a[@id="lnkStaticDataPage"]//div').click();
  };
  const clickOnCurrency = async function () {
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
  ) {
    await page
      .locator('//button//span[normalize-space(text())="Create Currency"]')
      .click();

    await page
      .locator('//*[@data-locator="currency-input"]//input')
      .fill(currency);
    const saveButton: string =
      '//*[@data-locator="currency-form-button-toolbar"]//button//span[normalize-space(text())="Save"]';
    await expect(page.locator(saveButton)).toBeVisible();

    const decimalPlaceInput: string =
      '//*[@data-locator="decimals-dropdown"]//input';
    const parentDiv: string =
      '//ancestor::div//following-sibling::div[@class="cdk-overlay-container"]';
    await page
      .locator(decimalPlaceInput)
      .pressSequentially(decimalPlace.toString());
    const decimalPlaceDropdown = page.locator(decimalPlaceInput + parentDiv);
    const decimalPlaceSpan = decimalPlaceDropdown.locator('//span');
    const decimalPlaceOptionCount: number = await decimalPlaceSpan.count();
    await searchOption(
      decimalPlaceOptionCount,
      decimalPlaceSpan,
      decimalPlace.toString()
    );

    //Redomination Currency
    const redInput: string =
      '//*[@data-locator="redenom-code-dropdown"]//input';
    await page.locator(redInput).pressSequentially(redominationCurrency);

    const redominationCurrencyDropdown = page.locator(redInput + parentDiv);

    const redominationCurrencySpan =
      redominationCurrencyDropdown.locator('//span');
    const redominationOptionCount: number =
      await redominationCurrencySpan.count();
    console.log(redominationOptionCount);
    await searchOption(
      redominationOptionCount,
      redominationCurrencySpan,
      redominationCurrency
    );
    await page
      .locator('//*[@data-locator="redenom-rate-input"]//input')
      .fill(redominationCurrencyRate.toString());

    await page
      .locator('//*[@data-locator="description-input"]//textarea')
      .fill(`${currency} currency`);

    // await page.locator(saveButton).click();
  };

  //Quick Filter Currency
  const quickFilter = async function (currency: string) {
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
  // await createCurrency(
  //   currency,
  //   decimalPlace,
  //   redominationCurrency,
  //   redominationCurrencyRate
  // );
  await quickFilter(currency);

  const date = await page.locator(`//tlmv-list-item-date-field`).textContent();
  console.log(date);
  await page.pause();
});
