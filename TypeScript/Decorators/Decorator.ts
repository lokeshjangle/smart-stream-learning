// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor.toString());
// }

function Logger(logString: string) {
  console.log('LOGGER-FACTORY');
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate() {
  console.log('TEMPLATE-FACTORY');
  return function (constructor: any) {
    console.log('Rendering template');
  };
}

// @Logger
@Logger('LOGGING - PERSON')
@WithTemplate()
class Person {
  name = 'Lokesh';

  constructor() {
    console.log('Creating person object...');
  }
}

const pears = new Person();
console.log(pears);

// ----- Property Decorator

function PropertyDec(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

function AccessorDec(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function MethodDec(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method Decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParameterDec(target: any, name: string | Symbol, position: number) {
  console.log('Paramter Decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @PropertyDec //Property decorator
  title: string;
  private _price: number;

  @AccessorDec //Accessor decorator
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error('Invalid price - should be positive!');
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MethodDec //Method Descriptor
  getPriceWithTax(@ParameterDec tax: number) {
    //Parameter Decorator
    return this._price * (1 + tax);
  }
}
