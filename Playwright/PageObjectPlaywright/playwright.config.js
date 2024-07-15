// @ts-check
import { defineConfig, devices } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 30 * 1000, // 30 sec for whole test
  expect: {
    timeout: 5000, //5 sec for assertion,
    toHaveScreenshot: {
      maxDiffPixels: 10,
    },
  },
  // workers: 3, //By default 5 worker executed by playwright
  fullyParallel: true, //Run test in parallel Mode
  forbidOnly: true, //it is avoid test.only
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',
    // browserName: 'firefox',
    // browserName: 'webkit', //default playwright specific engine
    headless: false,
    screenshot: 'on', //To take screenshot of all action which will perform
    video: 'retain-on-failure', //capture viedo on failure
    // trace: 'on', //Trace all action
    trace: 'retain-on-failure', //Trace only on failure
    // viewport: { width: 720, height: 720 }, //setting browser window size
    // ...devices['Galaxy S9+'], //setting dimension for particular mobile
    ignoreHTTPSErrors: true, //Ignore HTTPS error or bypass SSL certification
    permissions: ['geolocation'], //Allow location popup
  },

  // /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },

  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
