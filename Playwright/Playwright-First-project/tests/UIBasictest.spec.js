import { test, expect } from '@playwright/test';

//1st way
test('Browser Playwright test', async function ({ browser }) {
  //Write your playwright code.....
  //chrome - plugins/cookies
  const context = await browser.newContext(); //create fresh browser instance
  const page = await context.newPage(); //create actual page for automate

  const userName = page.locator('#username');
  const signIn = page.locator('//input[@id="signInBtn"]');
  const cartTitle = page.locator('//div[@class="card-body"]//a');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  //css selector
  await userName.fill('rahulshetty');
  //Xpath selector
  await page.locator('//input[@id="password"]').fill('learning');

  await signIn.click();

  console.log(await page.locator('[style*="block"]').textContent());
  await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
  console.log(await page.title());

  //to remove text from input field
  await userName.fill('');
  await userName.fill('rahulshettyacademy');
  await signIn.click();
  console.log(await cartTitle.nth(1).textContent()); //'iphone X'

  //to extract all titles
  const allTitles = await cartTitle.allTextContents(); //[ 'iphone X', 'Samsung Note 8', 'Nokia Edge', 'Blackberry' ]
  console.log(allTitles);
});

//2nd way
test('Page Playwright test', async function ({ page }) {
  //No need to create context and page variable it comes from fixers
  await page.goto('https://google.com');
  console.log(await page.title());
  await expect(page).toHaveTitle('Google');
});
