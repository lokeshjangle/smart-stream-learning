import test, { expect } from '@playwright/test';

test('Browser Context-Validating Error Login', async ({ page }) => {
  const productName = 'IPHONE 13 PRO';
  const email = 'lokeshjangle@gmail.com';
  const products = page.locator('//div[@class="card-body"]');
  const loginPage = new LoginPage();
  await page.goto('https://rahulshettyacademy.com/client');

  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill('Lokesh@123');
  await page.locator("[value='Login']").click();
  //   await page.locator('.card-body b').first().textContent();
  //   await page.waitForLoadState('networkidle');
  await page.locator('.card-body b').first().waitFor();
  const titles = await page.locator('.card-body b').allTextContents();
  const count = await products.count();
  console.log(count);
  //identify item
  for (let i = 0; i < count; ++i) {
    const productText = await products.nth(i).locator('b').textContent();
    console.log(productText);
    if (productText === productName) {
      //Add that product to cart
      await products.nth(i).locator('//button[text()=" Add To Cart"]').click();
      break;
    }
  }
  //Open cart
  const checkOutButton = page.locator(
    "//div[contains(@class,'subtotal')]//button[normalize-space()='Checkout']"
  );
  await page.locator('//button[@routerlink="/dashboard/cart"]').click();

  await checkOutButton.waitFor();
  const productVisible = await page
    .locator(`h3:has-text("${productName}")`)
    .isVisible(); //not have auto wait
  expect(productVisible).toBeTruthy();
  console.log(productVisible);

  await checkOutButton.click();
  await page
    .locator("//input[@placeholder='Select Country']")
    .pressSequentially('india');

  const dropdown = page.locator('//*[contains(@class,"ta-results")]');
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator('//button').count();
  console.log(optionsCount);
  for (let i = 0; i < optionsCount; ++i) {
    const text = await dropdown.locator('//button').nth(i).textContent();
    if (text.trim() === 'India') {
      await dropdown.locator('//button').nth(i).click();
      break;
    }
  }

  await expect(page.locator('.user__name [type="text"]').first()).toHaveText(
    email
  );
  await page
    .locator('//div[@class="actions"]//*[normalize-space()="Place Order"]')
    .click();
  await expect(page.locator('//h1[@class="hero-primary"]')).toHaveText(
    ' Thankyou for the order. '
  );
  const orderId = await page
    .locator('//label[@class="ng-star-inserted"]')
    .textContent();

  console.log(orderId);
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
});
