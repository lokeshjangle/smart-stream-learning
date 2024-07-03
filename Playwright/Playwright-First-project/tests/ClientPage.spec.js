import test from '@playwright/test';

test.only('Browser Context-Validating Error Login', async ({ page }) => {
  const productName = 'IPHONE 13 PRO';
  const products = page.locator('//div[@class="card-body"]');
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill('lokeshjangle@gmail.com');
  await page.locator('#userPassword').fill('Lokesh@123');
  await page.locator("[value='Login']").click();
  //   await page.locator('.card-body b').first().textContent();
  //   await page.waitForLoadState('networkidle');
  await page.locator('.card-body b').first().waitFor();
  const titles = await page.locator('.card-body b').allTextContents();
  const count = await products.count();
  console.log(count);
  for (let i = 0; i < count; ++i) {
    const productText = await products.nth(i).locator('b').textContent();
    console.log(productText);
    if (productText === productName) {
      //Add that product to cart
      await products.nth(i).locator('//button[text()=" Add To Cart"]').click();
      break;
    }
  }
  await page.locator('//button[@routerlink="/dashboard/cart"]').click();
  await page.pause();

  //Zara coat 4
});
