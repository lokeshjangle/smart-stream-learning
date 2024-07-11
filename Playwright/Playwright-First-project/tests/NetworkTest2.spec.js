import { expect, default as test } from '@playwright/test';

test('@Security test request intercept', async function ({ page }) {
  //Login and reach orders page

  const email = 'lokeshjangle@gmail.com';
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill('Lokesh@123');
  await page.locator("[value='Login']").click();
  await page.locator('.card-body b').first().waitFor();

  await page.getByRole('button', { name: 'ORDERS' }).click();
  await page.route(
    'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
    route =>
      route.continue({
        url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6683f974ae2afd4c0b147202',
      })
  );
  await page.getByRole('button', { name: 'View' }).first().click();

  await expect(page.getByRole('paragraph').last()).toHaveText(
    'You are not authorize to view this order'
  );
  await page.pause();
});
