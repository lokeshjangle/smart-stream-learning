import test, { expect } from '@playwright/test';

test('Calender Validation', async function ({ page }) {
  const monthNumber = '7';
  const date = '8';
  const year = '2024';

  const expectedList = [monthNumber, date, year];
  await page.goto(`https://rahulshettyacademy.com/seleniumPractise/#/offers`);

  await page.locator(`//div[@class="react-date-picker__inputGroup"]`).click();

  const navigationLabel = `//button[@class="react-calendar__navigation__label"]`;
  // await page.locator(navigationLabel).click();
  await page.locator(navigationLabel).dblclick();
  await page.getByText(year).click();
  await page
    .locator(`//button[contains(@class,"react-calendar__year-view__month")]`)
    .nth(Number(monthNumber) - 1)
    .click();
  await page.locator(`//abbr[text()=${date}]`).click();

  const inputs = await page.locator(
    `//div[@class="react-date-picker__inputGroup"]`
  );
  for (let index = 0; index < inputs.lenght; ++index) {
    const value = inputs[index].getAttribute(value);
    expect(value).toEqual(expectedList[index]);
  }
  // await page.pause();
});
