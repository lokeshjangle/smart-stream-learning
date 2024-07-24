import { expect, Locator, Page } from '@playwright/test';

type CurrencyType = {
  currency: string;
  decimalPlace?: 0 | 1 | 2 | 3;
  redenominationCurrency?: string;
  redenominationCurrencyRate?: number;
  description?: string;
};

class CurrencyPage {
  private readonly page: Page;
  private readonly lookupButton: Locator;
  private readonly createCurrencyButton: Locator;
  private readonly saveButton: Locator;
  private readonly currencyTextBox: Locator;
  private readonly decimalPlaceTextBox: Locator;
  private readonly redenominationCurrencyTextBox: Locator;
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

  //Update Currency
  private readonly currencyEditBtn: Locator;
  private readonly inpector: Locator;
  private readonly revertBtn: Locator;

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

    this.redenominationCurrencyTextBox = this.page.locator(
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

    //Update currency Locator
    this.currencyEditBtn = this.page.locator(
      `//tlmrecs-currency-list[@data-locator="currency-list"]//button`
    );

    this.inpector = this.page.getByText(' Inspect ');
    this.revertBtn = this.page.getByRole('button', { name: ' Revert ' });
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
    await this.page.locator('tlmv-inspector i').first().click();
  }

  //Get current date
  private async getCurrentDate() {
    return new Date().toLocaleDateString('en-US', this.currencyCreationDate);
  }

  //DropDown selection Method
  private async dropDownSelection(
    textBoxLocator: Locator,
    textBoxValue: string
  ) {
    await textBoxLocator.pressSequentially(textBoxValue);
    await this.suggestionList.getByText(textBoxValue).click();
  }

  //Fill redomination currency rate
  private async fillRedeomCurrencyRate(redenominationCurrencyRate: string) {
    await this.redenomRateTextBox.fill(
      redenominationCurrencyRate ? redenominationCurrencyRate.toString() : ''
    );
  }

  //Create new currency
  async createCurrency(currencyDetails: CurrencyType) {
    const {
      currency,
      decimalPlace,
      redenominationCurrency,
      redenominationCurrencyRate,
      description,
    }: CurrencyType = currencyDetails;

    await this.createCurrencyButton.click();
    await this.currencyTextBox.fill(currency);
    await expect(this.saveButton).toBeVisible();

    await this.dropDownSelection(
      this.decimalPlaceTextBox,
      decimalPlace ? decimalPlace.toString() : ''
    );

    await this.dropDownSelection(
      this.redenominationCurrencyTextBox,
      redenominationCurrency ? redenominationCurrency : ''
    );

    await this.fillRedeomCurrencyRate(
      redenominationCurrencyRate ? redenominationCurrencyRate.toString() : ''
    );

    await this.currencyDescriptionTextarea.fill(description ? description : '');

    this.dateString = await this.getCurrentDate();
    await this.saveButton.click();
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

  //Get previous value
  async getPreviousValue() {
    return {
      currency: await this.currencyTextBox.inputValue(),
      decimalPlace: await this.decimalPlaceTextBox.inputValue(),
      redenominationCurrency:
        await this.redenominationCurrencyTextBox.inputValue(),
      redenominationCurrencyRate: await this.redenomRateTextBox.inputValue(),
      description: await this.currencyDescriptionTextarea.inputValue(),
    };
  }
  //Revert button validation
  async revertButtonValidation(currencyDetails: CurrencyType) {
    //Get Previous value for validation
    const previousValues = await this.getPreviousValue();
    console.log(previousValues);

    //Modify feild
    await this.modifyField(currencyDetails);

    await this.revertBtn.click(); //Revert button click

    await this.isHaveValueInElement(
      this.decimalPlaceTextBox,
      previousValues.decimalPlace
    );
    await this.isHaveValueInElement(
      this.redenominationCurrencyTextBox,
      previousValues.redenominationCurrency
    );
    await this.isHaveValueInElement(
      this.redenomRateTextBox,
      previousValues.redenominationCurrencyRate
    );
    await this.isHaveValueInElement(
      this.currencyDescriptionTextarea,
      previousValues.description
    );
  }

  private async isHaveValueInElement(element: Locator, value: string) {
    await expect(element).toHaveValue(value);
  }
  //Check Element is editable or not
  private async isElementEditable(...elements: Locator[]) {
    // await expect(element).toBeEditable();
    for (const element of elements) {
      await expect(element).toBeEditable();
    }
  }

  //Modify field
  async modifyField(currencyDetails: CurrencyType) {
    const {
      decimalPlace,
      redenominationCurrency,
      redenominationCurrencyRate,
      description,
    }: CurrencyType = currencyDetails;

    await this.dropDownSelection(
      this.decimalPlaceTextBox,
      decimalPlace ? decimalPlace.toString() : ''
    );

    await this.dropDownSelection(
      this.redenominationCurrencyTextBox,
      redenominationCurrency ? redenominationCurrency : ''
    );

    await this.fillRedeomCurrencyRate(
      redenominationCurrencyRate ? redenominationCurrencyRate.toString() : ''
    );

    await this.currencyDescriptionTextarea.fill(description ? description : '');
  }

  //Update Currency
  async updateCurrency(currencyDetails: CurrencyType) {
    const {
      decimalPlace,
      redenominationCurrency,
      redenominationCurrencyRate,
      description,
    }: CurrencyType = currencyDetails;

    await this.currencyEditBtn.click();
    await this.inpector.click();

    //check currency is disable
    await expect.soft(this.currencyTextBox).toBeDisabled();

    //check remaining feild are editable
    await this.isElementEditable(
      this.decimalPlaceTextBox,
      this.redenominationCurrencyTextBox,
      this.redenomRateTextBox,
      this.currencyDescriptionTextarea
    );

    //Revert button validation
    await this.revertButtonValidation(currencyDetails);

    //Dropdown selection for redeonomination currency
    await this.dropDownSelection(
      this.redenominationCurrencyTextBox,
      redenominationCurrency ? redenominationCurrency : ''
    );

    await this.fillRedeomCurrencyRate(
      redenominationCurrencyRate ? redenominationCurrencyRate.toString() : ''
    );
    await this.currencyDescriptionTextarea.fill(description ? description : '');
    this.dateString = await this.getCurrentDate();

    await this.saveButton.click();
    // await this.page.pause();
  }
}

export { CurrencyPage, CurrencyType };
