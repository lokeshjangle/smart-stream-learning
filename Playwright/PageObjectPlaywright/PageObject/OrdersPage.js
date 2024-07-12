'use strict';
import { expect } from '@playwright/test';

class OrdersPage {
  constructor(page) {
    this.page = page;
    this.orders = this.page.locator(
      '//button[@routerlink="/dashboard/myorders"]'
    );
    this.orderList = this.page.locator('//tr[@class="ng-star-inserted"]');
    this.viewButton = '//button[normalize-space(text())="View"]';
    this.orderIdDetailsLocator = this.page.locator('.col-text');
  }

  async navigateToOrders() {
    await this.orders.click();
  }

  async searchOrderByOrderId(orderId) {
    await this.orderList;
    console.log(this.orderList);
    await this.page.locator('//tbody').waitFor();
    for (let i = 0; i < (await this.orderList.count()); ++i) {
      const oid = await this.orderList.nth(i).locator('//th').textContent();
      console.log(oid);
      if (orderId.includes(oid)) {
        await this.orderList.nth(i).locator(this.viewButton).click();
        console.log('view button clicked');
        await this.page.pause();
        break;
      }
    }
  }

  async orderSummary(orderId) {
    const orderIdDetails = await this.orderIdDetailsLocator.textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
  }
}

export { OrdersPage };
