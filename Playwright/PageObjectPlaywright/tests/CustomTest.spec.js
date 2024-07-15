import { customTest } from '../Utils/test-base';
import { POManager } from '../PageObject/POManager';

//Create a custom test with custom fixture
customTest(`Client App Login `, async ({ page, testDataForOrder }) => {
  let orderId;
  const poManager = new POManager(page);
  //Login Page
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(testDataForOrder.email, testDataForOrder.password);
  // await page.pause();

  //Dashboard page
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCard(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  //Place Order Page
  const placeOrder = poManager.getPlaceOrderPage();
  await placeOrder.verifyProductAndCheckOut(testDataForOrder.productName);
  await placeOrder.selectCountryAndVerifyEmail(
    testDataForOrder.email,
    testDataForOrder.countryName
  );
  await placeOrder.placeOrderClick();
  orderId = await placeOrder.verifyOrderSuccessful();
  console.log(orderId);
});
