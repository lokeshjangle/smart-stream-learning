import test from '@playwright/test';

test.beforeAll('Demo test', function () {
  console.log('BeforeAll');
});

test('A', function () {
  console.log('A');
});
test('@TS B', function () {
  console.log('B');
});
test('C @TS', function () {
  console.log('C');
});
test('D', function () {
  console.log('D');
});
test('E', function () {
  console.log('E');
});
test('F', function () {
  console.log('F');
});
