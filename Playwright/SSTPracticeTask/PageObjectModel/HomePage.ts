import { Locator, Page } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  private readonly lookupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lookupButton = this.page.locator(`//a[@ui-sref="recs.lookups"]//div`);
  }

  async navigateToLookups() {
    await this.lookupButton.click();
  }
}
