import { expect, Locator, Page } from '@playwright/test';
import { CurrencyDetails } from './CurrencyDetails';

export class LookupsPage {
  private readonly page: Page;
  private readonly currencyTab: Locator;
  private readonly createCurrencyButton: Locator;
  private readonly currencyInput: Locator;
  private readonly saveButton: Locator;
  private readonly decimalPlaceInput: Locator;
  private readonly selectionList: Locator;
  private readonly redominationCurrencyInput: Locator;
  private readonly redenomRateInput: Locator;
  private readonly currencyDescription: Locator;
  private readonly quickFilterField: Locator;
  private readonly quickFilterInput: Locator;
  private readonly dateLocator: Locator;
  private readonly saveMessage: Locator;
  private readonly filteredCurrency: Locator;

  private currencyCreationDate: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  dateString: string;

  constructor(page: Page) {
    this.page = page;
    this.currencyTab = this.page.getByText('CURRENCY');

    this.createCurrencyButton = this.page.getByRole('button', {
      name: 'Create Currency',
    });

    this.currencyInput = this.page.locator(
      `//tlmv-input[@data-locator="currency-input"]//input`
    );

    this.saveButton = this.page.getByRole('button', { name: 'Save' });

    this.decimalPlaceInput = this.page.locator(
      `//tlmv-select[@data-locator="decimals-dropdown"]//input`
    );

    this.selectionList = this.page.locator(`//tlmv-suggestion-list`);

    this.redominationCurrencyInput = this.page.locator(
      `//tlmv-select[@data-locator="redenom-code-dropdown"]//input`
    );

    this.redenomRateInput = this.page.locator(
      `//tlmv-input[@data-locator="redenom-rate-input"]//input`
    );

    this.currencyDescription = this.page.locator(
      `//tlmv-textarea[@data-locator="description-input"]//textarea`
    );

    this.saveMessage = this.page.getByRole('alert');
    // this.quickFilterField = this.page.locator(
    // `//span[normalize-space(text())='Quick Filter...']`);

    this.quickFilterField = this.page
      .locator('span')
      .filter({ hasText: ' Quick Filter... ' });

    this.quickFilterInput = this.page.locator(
      `//tlmv-input[@data-locator="quick-filter-input"]//input`
    );

    this.filteredCurrency = this.page.locator(
      `//span[@data-locator="currency-code-lookup"]`
    );

    this.dateLocator = this.page.locator(`//tlmv-list-item-date-field`);
  }

  async navigateToCurrency() {
    await this.currencyTab.click();
  }

  async createCurrency(currencyDetails: CurrencyDetails) {
    await this.createCurrencyButton.click();
    await this.currencyInput.fill(currencyDetails.currency);
    await expect(this.saveButton).toBeVisible();
    await this.decimalPlaceInput.pressSequentially(
      currencyDetails.decimalPlace.toString()
    );
    await this.selectionList
      .getByText(currencyDetails.decimalPlace.toString())
      .click();

    await this.redominationCurrencyInput.pressSequentially(
      currencyDetails.redominationCurrency
    );
    await this.selectionList
      .getByText(currencyDetails.redominationCurrency)
      .click();

    await this.redenomRateInput.fill(
      currencyDetails.redominationCurrencyRate.toString()
    );
    await this.currencyDescription.fill(`${currencyDetails.currency} currency`);

    this.dateString = new Date().toLocaleDateString(
      'en-US',
      this.currencyCreationDate
    );

    console.log(this.dateString);

    await this.saveButton.click();
    const msg: string | null = await this.saveMessage.textContent();
    console.log(msg?.trim());
    await this.page.locator('tlmv-inspector i').first().click();
  }

  async quickFilter(currency: string) {
    await this.quickFilterField.last().click();
    await this.quickFilterInput.fill(currency);

    await this.filteredCurrency.getByText(currency).waitFor();
  }

  async verifyDate() {
    const currencyDate: string | null = await this.dateLocator
      .first()
      .textContent();
    console.log('curr ' + currencyDate);
    console.log(this.dateString);
    expect(currencyDate?.trim()).toBe(this.dateString);
    if (currencyDate?.trim() === this.dateString) {
      console.log('Correct date');
    } else {
      console.log('Wrong Date');
    }
  }
}
