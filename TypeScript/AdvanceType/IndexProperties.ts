interface ErrorContainer {
  [props: string]: string; //Set property and value string type
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character!',
  //   age: 22, //Type 'number' is not assignable to type 'string'.
};
