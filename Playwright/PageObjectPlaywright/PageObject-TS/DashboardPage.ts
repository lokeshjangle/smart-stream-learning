import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly products: Locator;
  readonly productTitles: Locator;
  readonly cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = this.page.locator('//div[@class="card-body"]');
    this.productTitles = this.page.locator('.card-body b');
    this.cart = this.page.locator('//button[@routerlink="/dashboard/cart"]');
  }

  async searchProductAddCard(productName: string | null) {
    const titles: string[] = await this.productTitles.allTextContents();
    console.log(titles);
    const count: number = await this.products.count();
    console.log(count);
    //identify item
    for (let i: number = 0; i < count; ++i) {
      const productText: string | null = await this.products
        .nth(i)
        .locator('b')
        .textContent();
      console.log(productText);
      if (productText === productName) {
        //Add that product to cart
        await this.products
          .nth(i)
          .locator('//button[text()=" Add To Cart"]')
          .click();
        break;
      }
    }
  }

  async navigateToCart() {
    await this.cart.click();
  }
}
