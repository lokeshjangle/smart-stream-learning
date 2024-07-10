import { test, expect, request } from '@playwright/test';
import APiUtils from './utils/APiUtils';
const loginPayLoad = {
  userEmail: 'lokeshjangle@gmail.com',
  userPassword: 'Lokesh@123',
};

const orderPayLoad = {
  orders: [{ country: 'Cuba', productOrderedId: '6581cade9fd99c85e8ee7ff5' }],
};

let response;

test.beforeAll(async () => {
  //Login API
  const apiContext = await request.newContext();
  // const loginResponse = await apiContext.post(
  //   `https://rahulshettyacademy.com/api/ecom/auth/login`,
  //   {
  //     data: loginPayLoad,
  //   }
  // );
  // expect(loginResponse.ok()).toBeTruthy(); //assertion for check response return 200,201 status code
  // const loginResponseJson = await loginResponse.json();
  // token = loginResponseJson.token;
  // console.log(token);

  //
  // const orderResponse = await apiContext.post(
  //   `https://rahulshettyacademy.com/api/ecom/order/create-order`,
  //   {
  //     data: orderPayLoad,
  //     headers: {
  //       Authorization: token,
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );
  // expect(orderResponse.ok()).toBeTruthy();
  // const orderResponseJson = await orderResponse.json();
  // console.log(orderResponseJson);
  // orderId = orderResponseJson.orders[0];

  const apiUtils = new APiUtils(apiContext, loginPayLoad); //performing above using object utils
  response = await apiUtils.createOrder(orderPayLoad);
});

test.beforeEach(() => {});

test('Client App login', async ({ page }) => {
  //code to insert item in local storage
  await page.addInitScript(value => {
    window.localStorage.setItem('token', value);
  }, response.token);
  await page.goto('https://rahulshettyacademy.com/client');

  await page.locator('//button[@routerlink="/dashboard/myorders"]').click();

  const orderList = await page.locator('//tr[@class="ng-star-inserted"]');
  console.log(orderList);
  await page.locator('//tbody').waitFor();
  for (let i = 0; i < (await orderList.count()); ++i) {
    const oid = await orderList.nth(i).locator('//th').textContent();
    console.log(oid);
    if (orderId.includes(oid)) {
      await orderList
        .nth(i)
        .locator('//button[normalize-space(text())="View"]')
        .click();
      console.log('view button clicked');
      await page.pause();
      break;
    }
  }

  const orderIdDetails = await page.locator('.col-text').textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();
  await page.pause();
  page.pause();
});
