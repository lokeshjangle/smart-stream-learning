import { test, expect } from '@playwright/test';

//1st way
test('Browser Playwright test', async function ({ browser }) {
  //Write your playwright code.....
  //chrome - plugins/cookies
  const context = await browser.newContext(); //create fresh browser instance
  const page = await context.newPage(); //create actual page for automate

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  console.log(await page.title());
});

//2nd way
test('Page Playwright test', async function ({ page }) {
  //No need to create context and page variable it comes from fixers
  await page.goto('https://google.com');
  console.log(await page.title());
  await expect(page).toHaveTitle('Google');
});
