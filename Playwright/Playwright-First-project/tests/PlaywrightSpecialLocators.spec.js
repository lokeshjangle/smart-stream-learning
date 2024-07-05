import test from '@playwright/test';

test('Playwright Special Locators', async function ({ page }) {
  await page.goto(`https://rahulshettyacademy.com/angularpractice/`);

  //.getByLabel()
  await page.getByLabel(`Check me out if you Love IceCreams!`).check();
  await page.getByLabel('Employed').check();
  await page.getByLabel('Gender').selectOption('Female');

  //.getByPlaceholder()
  await page.getByPlaceholder('Password').fill('abc123');

  //.getByRole()
  await page.getByRole('button', { name: 'Submit' }).click();

  //.getByText()
  await page
    .getByText('Success! The Form has been submitted successfully!.')
    .isVisible();
  await page.pause();
});
