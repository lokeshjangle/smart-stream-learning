import { expect, Locator, Page } from '@playwright/test';
// import { CurrencyDetails } from './CurrencyDetails';
type CurrencyDetails = {
  currency: string;
  decimalPlace?: 0 | 1 | 2 | 3;
  redominationCurrency?: string;
  redominationCurrencyRate?: number;
  description?: string;
};

class CurrencyPage {
  private readonly page: Page;
  private readonly lookupButton: Locator;
  private readonly createCurrencyButton: Locator;
  private readonly saveButton: Locator;
  private readonly currencyTextBox: Locator;
  private readonly decimalPlaceTextBox: Locator;
  private readonly redominationCurrencyTextBox: Locator;
  private readonly redenomRateTextBox: Locator;
  private readonly currencyDescriptionTextarea: Locator;
  private readonly currencyTab: Locator;
  private readonly suggestionList: Locator;
  private readonly quickFilterField: Locator;
  private readonly quickFilterTextBox: Locator;
  private readonly dateLocator: Locator;
  private readonly saveMessagePopup: Locator;
  private readonly filteredCurrency: Locator;

  private currencyCreationDate: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  private dateString: string;

  constructor(page: Page) {
    this.page = page;
    this.lookupButton = this.page.getByRole('link', { name: 'Lookups' });

    this.createCurrencyButton = this.page.getByRole('button', {
      name: 'Create Currency',
    });
    this.saveButton = this.page.getByRole('button', { name: 'Save' });

    this.currencyTextBox = this.page.locator(
      `//tlmv-input[@data-locator="currency-input"]//input`
    );

    this.decimalPlaceTextBox = this.page.locator(
      `//tlmv-select[@data-locator="decimals-dropdown"]//input`
    );

    this.redominationCurrencyTextBox = this.page.locator(
      `//tlmv-select[@data-locator="redenom-code-dropdown"]//input`
    );

    this.redenomRateTextBox = this.page.locator(
      `//tlmv-input[@data-locator="redenom-rate-input"]//input`
    );

    this.quickFilterTextBox = this.page.locator(
      `//tlmv-input[@data-locator="quick-filter-input"]//input`
    );
    this.currencyDescriptionTextarea = this.page.locator(
      `//tlmv-textarea[@data-locator="description-input"]//textarea`
    );

    this.currencyTab = this.page.getByText('CURRENCY');

    this.suggestionList = this.page.locator(`//tlmv-suggestion-list`);

    this.saveMessagePopup = this.page.getByRole('alert');

    this.quickFilterField = this.page.locator(
      `.tlmrecs-c-quick-filter-editable span:visible`
    );

    this.filteredCurrency = this.page.locator(
      `//span[@data-locator="currency-code-lookup"]`
    );

    this.dateLocator = this.page.locator(`//tlmv-list-item-date-field`);
  }

  //Navigate to Lookups
  async navigateToLookups() {
    await this.lookupButton.click();
  }

  //Navigate To Currency Tab
  async navigateToCurrencyTab() {
    await this.currencyTab.click();
  }

  //Validate the popup
  async validatePopup(message: string) {
    await expect(this.saveMessagePopup).toHaveText(message);
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
    await this.currencyTextBox.fill(currency);
    await expect(this.saveButton).toBeVisible();
    await this.decimalPlaceTextBox.pressSequentially(
      decimalPlace ? decimalPlace.toString() : ''
    );
    await this.suggestionList
      .getByText(decimalPlace ? decimalPlace.toString() : '')
      .click();

    await this.redominationCurrencyTextBox.pressSequentially(
      redominationCurrency ? redominationCurrency : ''
    );
    await this.suggestionList
      .getByText(redominationCurrency ? redominationCurrency : '')
      .click();

    await this.redenomRateTextBox.fill(
      redominationCurrencyRate ? redominationCurrencyRate.toString() : ''
    );
    await this.currencyDescriptionTextarea.fill(description ? description : '');

    this.dateString = new Date().toLocaleDateString(
      'en-US',
      this.currencyCreationDate
    );

    await this.saveButton.click();

    await this.page.locator('tlmv-inspector i').first().click();
  }

  //Filter currency
  async quickFilter(currency: string) {
    await this.quickFilterField.click();
    await this.quickFilterTextBox.fill(currency);

    await this.filteredCurrency.getByText(currency).waitFor();
  }

  //Verify and validate date
  async verifyDateForActiveFrom(dateString = this.dateString) {
    await expect(this.dateLocator).toHaveText(dateString);
  }
}

export { CurrencyPage, CurrencyDetails };
