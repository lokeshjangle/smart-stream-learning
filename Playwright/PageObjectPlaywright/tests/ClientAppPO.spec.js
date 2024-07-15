import test from '@playwright/test';
import { POManager } from '../PageObject/POManager';
const dataset = JSON.parse(
  JSON.stringify(require('../Utils/PlaceorderTestData.json'))
);
console.log(dataset);
for (const data of dataset) {
  test(`Client App Login For ${data.productName}`, async ({ page }) => {
    let orderId;
    const poManager = new POManager(page);
    //Login Page
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.email, data.password);
    // await page.pause();

    //Dashboard page
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCard(data.productName);
    await dashboardPage.navigateToCart();

    //Place Order Page
    const placeOrder = poManager.getPlaceOrderPage();
    await placeOrder.verifyProductAndCheckOut(data.productName);
    await placeOrder.selectCountryAndVerifyEmail(data.email, data.countryName);
    await placeOrder.placeOrderClick();
    orderId = await placeOrder.verifyOrderSuccessful();
    console.log(orderId);

    //Orders Page
    const ordersPage = poManager.getOrdersPage();
    await ordersPage.navigateToOrders();
    await ordersPage.searchOrderByOrderId(orderId);
    await ordersPage.orderSummary(orderId);
    // await page.pause();
  });
}
