//create test data as a fixture

import { test } from '@playwright/test';
export const customTest = test.extend({
  testDataForOrder: {
    email: 'lokeshjangle@gmail.com',
    password: 'Lokesh@123',
    productName: 'IPHONE 13 PRO',
    countryName: 'India',
  },
});
