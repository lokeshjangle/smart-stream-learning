import test from '@playwright/test';

test.only('Browser Context-Validating Error Login', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator('#userEmail').fill('lokeshjangle@gmail.com');
  await page.locator('#userPassword').fill('Lokesh@123');
  await page.locator("[value='Login']").click();
  //   await page.locator('.card-body b').first().textContent();
  //   await page.waitForLoadState('networkidle');
  await page.locator('.card-body b').first().waitFor();
  console.log(await page.locator('.card-body b').allTextContents());
});
