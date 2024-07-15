import { expect, Locator, Page } from '@playwright/test';

export class PlaceOrderPage {
  readonly page: Page;
  readonly checkOutButton: Locator;
  readonly selectCountry: Locator;
  readonly countryDropdown: Locator;
  readonly emailText: Locator;
  readonly placeOrderButton: Locator;
  readonly thankYouText: Locator;
  readonly orderIdLocator: Locator;
  constructor(page: Page) {
    this.page = page;
    this.checkOutButton = this.page.locator(
      "//div[contains(@class,'subtotal')]//button[normalize-space()='Checkout']"
    );

    this.selectCountry = this.page.locator(
      "//input[@placeholder='Select Country']"
    );

    this.countryDropdown = this.page.locator(
      '//*[contains(@class,"ta-results")]'
    );
    this.emailText = this.page.locator('.user__name [type="text"]');
    this.placeOrderButton = this.page.locator(
      '//div[@class="actions"]//*[normalize-space()="Place Order"]'
    );

    this.thankYouText = this.page.locator('//h1[@class="hero-primary"]');
    this.orderIdLocator = this.page.locator(
      '//label[@class="ng-star-inserted"]'
    );
  }

  async verifyProductAndCheckOut(productName) {
    await this.checkOutButton.waitFor();
    const productVisible = await this.page
      .locator(`h3:has-text("${productName}")`)
      .isVisible(); //not have auto wait
    expect(productVisible).toBeTruthy();
    console.log(productVisible);
    await this.checkOutButton.click();
  }

  async selectCountryAndVerifyEmail(email, countryName) {
    await this.selectCountry.pressSequentially(countryName);
    await this.countryDropdown.waitFor();
    const optionsCount = await this.countryDropdown.locator('//button').count();
    console.log(optionsCount);
    for (let i = 0; i < optionsCount; ++i) {
      const text: string | null = await this.countryDropdown
        .locator('//button')
        .nth(i)
        .textContent();
      if (text?.trim() === countryName) {
        await this.countryDropdown.locator('//button').nth(i).click();
        break;
      }
    }

    await expect(this.emailText.first()).toHaveText(email);
  }

  async placeOrderClick() {
    await this.placeOrderButton.click();
  }

  async verifyOrderSuccessful() {
    await expect(this.thankYouText).toHaveText(' Thankyou for the order. ');
    const orderId = await this.orderIdLocator.textContent();
    return orderId;
  }
}
