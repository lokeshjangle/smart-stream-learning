import test from '@playwright/test';
import { POManager } from '../PageObject-TS/POManager';
import { LoginPage } from '../PageObject-TS/LoginPage';
import { DashboardPage } from '../PageObject-TS/DashboardPage';
import { PlaceOrderPage } from '../PageObject-TS/PlaceOrderPage';
import { OrdersPage } from '../PageObject-TS/OrdersPage';

const dataset = JSON.parse(
  JSON.stringify(require('../Utils-TS/PlaceorderTestData.json'))
);
console.log(dataset);
for (const data of dataset) {
  test(`@TS Client App Login For ${data.productName}`, async ({ page }) => {
    let orderId: string | null;
    const poManager: POManager = new POManager(page);
    //Login Page
    const loginPage: LoginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.email, data.password);
    // await page.pause();

    //Dashboard page
    const dashboardPage: DashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCard(data.productName);
    await dashboardPage.navigateToCart();

    //Place Order Page
    const placeOrderPage: PlaceOrderPage = poManager.getPlaceOrderPage();
    await placeOrderPage.verifyProductAndCheckOut(data.productName);
    await placeOrderPage.selectCountryAndVerifyEmail(
      data.email,
      data.countryName
    );
    await placeOrderPage.placeOrderClick();
    orderId = await placeOrderPage.verifyOrderSuccessful();
    console.log(orderId);

    //Orders Page
    const ordersPage: OrdersPage = poManager.getOrdersPage();
    await ordersPage.navigateToOrders();
    await ordersPage.searchOrderByOrderId(orderId);
    await ordersPage.orderSummary(orderId);
    // await page.pause();
  });
}
