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

  //to block loading images or css
  // page.route('**/*.{jpg,png,jpeg}', route => route.abort());

  page.on('request', request => console.log(request.url()));
  page.on('response', response =>
    console.log(response.url(), response.statusCode())
  );
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

test('UI control', async function ({ page }) {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  //Handling dropdown selector
  console.log('Dropdown selector');
  const userName = page.locator('#username');
  const signIn = page.locator('//input[@id="signInBtn"]');
  const dropdown = page.locator('//select[@class="form-control"]');
  await dropdown.selectOption('consult');

  //Handling radio button selector
  const userRadioButton = page.locator('.radiotextsty');
  console.log('Radio button selector');
  await userRadioButton.last().click();
  await page.locator('#okayBtn').click(); //after selecting radio button one web-base popup is open so we click that popup
  console.log(await userRadioButton.last().isChecked()); //checking radio button is checked or not
  await expect(userRadioButton.last()).toBeChecked(); //this assertion will throw error and failed test case if radio button is not checked

  //Handle checkbox selector
  const checkbox = page.locator('#terms');
  await checkbox.click();
  await expect(checkbox).toBeChecked();
  await checkbox.uncheck();
  expect(await checkbox.isChecked()).toBeFalsy();
  await page.pause();

  //Handling Blinking text sectector
  const documentLink = page.locator('//*[contains(@href,"documents-request")]');
  await expect(documentLink).toHaveAttribute('class', 'blinkingText');
});

test('@Child window Handling', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const userName = page.locator('#username');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const documentLink = page.locator('//*[contains(@href,"documents-request")]');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'), //listen for any new page pending , rejected , fulfilled
    documentLink.click(),
  ]); //new page is opened
  const text = await newPage.locator('.red').textContent();
  console.log(text);
  const arrayText = text.split('@');
  const domain = arrayText[1].split(' ')[0];
  console.log(domain);
  await userName.fill(domain);
  await page.pause();
  console.log(await userName.textContent());
});

//Code generated by codegen tool

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('rahul shetty');
  await page.getByLabel('Search', { exact: true }).press('ArrowDown');
  await page.getByLabel('Search', { exact: true }).press('ArrowDown');
  await page.goto('https://rahulshettyacademy.com/');
  await page.getByRole('link', { name: 'NEW Learning paths' }).click();
  await page.getByText('Javascript', { exact: true }).click();
  await page.getByText('Python', { exact: true }).click();
  await page.getByRole('link', { name: ' Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('lokeshjangle@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Lukky@1208');
  await page.getByTestId('login-button').click();
  await page
    .frameLocator(
      'iframe[title="Widget containing a Cloudflare security challenge"]'
    )
    .getByLabel('Verify you are human')
    .check();
  await page.goto(
    'https://sso.teachable.com/secure/9521/identity/login/password'
  );
  await page.goto('https://rahulshettyacademy.com/learning-path');
  await page.locator('.logo > a').first().click();
  await page.getByText('why we are').click();
});
