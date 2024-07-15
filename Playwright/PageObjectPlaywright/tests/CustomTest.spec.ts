import { customTest } from '../Utils-TS/test-base';
import { POManager } from '../PageObject/POManager';
import { LoginPage } from '../PageObject/LoginPage';
import { DashboardPage } from '../PageObject/DashboardPage';
import { PlaceOrderPage } from '../PageObject/PlaceOrderPage';

//Create a custom test with custom fixture
customTest(`@TS Client App Login `, async ({ page, testDataForOrder }) => {
  let orderId: string;
  const poManager: POManager = new POManager(page);
  //Login Page
  const loginPage: LoginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(testDataForOrder.email, testDataForOrder.password);
  // await page.pause();

  //Dashboard page
  const dashboardPage: DashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCard(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  //Place Order Page
  const placeOrder: PlaceOrderPage = poManager.getPlaceOrderPage();
  await placeOrder.verifyProductAndCheckOut(testDataForOrder.productName);
  await placeOrder.selectCountryAndVerifyEmail(
    testDataForOrder.email,
    testDataForOrder.countryName
  );
  await placeOrder.placeOrderClick();
  orderId = await placeOrder.verifyOrderSuccessful();
  console.log(orderId);
});
