"use strict";
// function Logger(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor.toString());
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log('LOGGER-FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate() {
    console.log('TEMPLATE-FACTORY');
    return function (constructor) {
        console.log('Rendering template');
    };
}
// @Logger
let Person = class Person {
    constructor() {
        this.name = 'Lokesh';
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING - PERSON'),
    WithTemplate()
], Person);
const pears = new Person();
console.log(pears);
// ----- Property Decorator
function PropertyDec(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
function AccessorDec(target, name, descriptor) {
    console.log('Accessor Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function MethodDec(target, name, descriptor) {
    console.log('Method Decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function ParameterDec(target, name, position) {
    console.log('Paramter Decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    set price(val) {
        if (val > 0)
            this._price = val;
        else
            throw new Error('Invalid price - should be positive!');
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        //Parameter Decorator
        return this._price * (1 + tax);
    }
}
__decorate([
    PropertyDec //Property decorator
], Product.prototype, "title", void 0);
__decorate([
    AccessorDec //Accessor decorator
], Product.prototype, "price", null);
__decorate([
    MethodDec //Method Descriptor
    ,
    __param(0, ParameterDec)
], Product.prototype, "getPriceWithTax", null);
