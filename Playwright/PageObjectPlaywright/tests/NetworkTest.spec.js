import { test, expect, request } from '@playwright/test';
import { APiUtils } from './utils/APiUtils';
const loginPayLoad = {
  userEmail: 'lokeshjangle@gmail.com',
  userPassword: 'Lokesh@123',
};

const orderPayLoad = {
  orders: [{ country: 'Cuba', productOrderedId: '6581cade9fd99c85e8ee7ff5' }],
};
const fakePayLoadOrders = {
  data: [],
  message: 'No Orders',
};
let response;

test.beforeAll(async () => {
  //Login API
  const apiContext = await request.newContext(); //create context from request
  const apiUtils = new APiUtils(apiContext, loginPayLoad); //performing above using object utils
  response = await apiUtils.createOrder(orderPayLoad);
});

test.beforeEach(() => {});

test('Fake Payload Order', async ({ page }) => {
  //code to insert item in local storage
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);
  await page.goto('https://rahulshettyacademy.com/client');
  await page.route(
    `https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6683f974ae2afd4c0b146202`,
    async route => {
      const response = await page.request.fetch(route.request());

      let body = JSON.stringify(fakePayLoadOrders);
      route.fulfill({
        response,
        body,
      });
      //Intercepting a response - API response -> {Playwright fakeresponse}-> browser -> render data on front end
    }
  );
  await page.locator('//button[@routerlink="/dashboard/myorders"]').click();
  await page.pause();
});
