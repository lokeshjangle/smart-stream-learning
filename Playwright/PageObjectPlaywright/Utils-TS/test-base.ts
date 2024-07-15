//create test data as a fixture

import { test as baseTest } from '@playwright/test';

interface TestDataForOrder {
  email: string;
  password: string;
  productName: string;
  countryName: string;
}
export const customTest = baseTest.extend<{
  testDataForOrder: TestDataForOrder;
}>({
  testDataForOrder: {
    email: 'lokeshjangle@gmail.com',
    password: 'Lokesh@123',
    productName: 'IPHONE 13 PRO',
    countryName: 'India',
  },
});
