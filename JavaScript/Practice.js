function x() {
  let i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log(`Hello Js`);
}
x();
