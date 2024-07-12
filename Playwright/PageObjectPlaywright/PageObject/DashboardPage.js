class DashboardPage {
  constructor(page) {
    this.page = page;
    this.products = this.page.locator('//div[@class="card-body"]');
    this.productTitles = this.page.locator('.card-body b');
    this.cart = this.page.locator('//button[@routerlink="/dashboard/cart"]');
  }

  async searchProductAddCard(productName) {
    const titles = await this.productTitles.allTextContents();
    const count = await this.products.count();
    console.log(count);
    //identify item
    for (let i = 0; i < count; ++i) {
      const productText = await this.products.nth(i).locator('b').textContent();
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

export { DashboardPage };
