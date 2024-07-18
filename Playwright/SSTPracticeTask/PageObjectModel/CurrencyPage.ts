import { expect, Locator, Page } from '@playwright/test';
// import { CurrencyDetails } from './CurrencyDetails';
type CurrencyDetails = {
  currency: string;
  decimalPlace: 0 | 1 | 2 | 3;
  redominationCurrency: string;
  redominationCurrencyRate: number;
  description: string;
};

class CurrencyPage {
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

  //Navigate To Currency Tab
  async navigateToCurrency() {
    await this.currencyTab.click();
  }

  //Create new currency
  async createCurrency(currencyDetails: CurrencyDetails) {
    const {
      currency,
      decimalPlace,
      redominationCurrency,
      redominationCurrencyRate,
      description,
    }: CurrencyDetails = currencyDetails;

    await this.createCurrencyButton.click();
    await this.currencyInput.fill(currency);
    await expect(this.saveButton).toBeVisible();
    await this.decimalPlaceInput.pressSequentially(
      currencyDetails.decimalPlace.toString()
    );
    await this.selectionList.getByText(decimalPlace.toString()).click();

    await this.redominationCurrencyInput.pressSequentially(
      redominationCurrency
    );
    await this.selectionList.getByText(redominationCurrency).click();

    await this.redenomRateInput.fill(redominationCurrencyRate.toString());
    await this.currencyDescription.fill(description);

    this.dateString = new Date().toLocaleDateString(
      'en-US',
      this.currencyCreationDate
    );

    await this.saveButton.click();
    expect(this.saveMessage).toHaveText(' Currency saved successfully ');
    await this.page.locator('tlmv-inspector i').first().click();
  }

  async quickFilter(currency: string) {
    await this.quickFilterField.last().click();
    await this.quickFilterInput.fill(currency);

    await this.filteredCurrency.getByText(currency).waitFor();
  }

  async verifyDateForActiveFrom() {
    expect(this.dateLocator).toHaveText(this.dateString);
  }
}

export { CurrencyPage, CurrencyDetails };
