import test, { expect } from '@playwright/test';

test('Popup validation', async function ({ page }) {
  await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
  // await page.goto(`http://google.com`);
  // await page.goBack(); //--> it is use to go back to previous web page
  // await page.goForward(); //--> it is used to go to next web page

  //Assertion to check element in visible mode or not
  await expect(page.locator('//input[@id="displayed-text"]')).toBeVisible();
  await page.locator(`//input[@id="hide-textbox"]`).click();
  await expect(page.locator(`//input[@id="displayed-text"]`)).toBeHidden();
  // await page.pause();

  //To handle popups/dialog box
  page.on('dialog', dialog => dialog.accept()); //accept-> ok / dismiss -> reject

  await page.locator(`//input[@id="confirmbtn"]`).click();

  //To handle mousehover in playwright
  await page.locator(`#mousehover`).hover();

  //Handle iframe tags
  const framePage = page.frameLocator(`//iframe[@id="courses-iframe"]`); //framelocator() --> is use to switch frame from main to child

  await framePage.locator('a:text("All Access plan"):visible').click();
  const textCheck = await framePage
    .locator(`//h2[normalize-space(text())="Join"]`)
    .textContent();

  console.log(textCheck.split(' ')[1]);
  await page.pause();
});

test('Screenshot and Visual comparison', async function ({ page }) {
  await page.goto(`https://rahulshettyacademy.com/AutomationPractice/`);
  //Assertion to check element in visible mode or not
  await expect(page.locator('//input[@id="displayed-text"]')).toBeVisible();
  //Locator level Screenshot
  await page
    .locator(`//input[@id="displayed-text"]`)
    .screenshot({ path: './Playwright-First-project/locatorSS.png' });
  await page.locator(`//input[@id="hide-textbox"]`).click();

  //Complete page screenshot
  await page.screenshot({ path: 'Playwright-First-project/screenshot.png' }); //--> create screenshot
  await expect(page.locator(`//input[@id="displayed-text"]`)).toBeHidden();
});

//screenshot - store -> screenshot ->
test('visual', async function ({ page }) {
  await page.goto(`https://www.flightaware.com/`);
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});
