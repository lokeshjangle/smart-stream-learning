import { DivMul } from './ES_module_Demo'; //When we exporst without default
import AddSub from './ES_module_Demo'; //When we export as default
import { checkRun } from './CheckRun';

class Calculator implements AddSub, DivMul {
  div(a: number, b: number): number {
    return a / b;
  }
  mul(a: number, b: number): number {
    return a * b;
  }
  add(a: number, b: number): number {
    return a + b;
  }
  sub(a: number, b: number): number {
    return a - b;
  }
}

const cal = new Calculator();
let a = 20;
let b = 10;
checkRun();
console.log(`Addition       : ${a} + ${b} = ${cal.add(a, b)}`);
console.log(`Sustraction    : ${a} - ${b} = ${cal.sub(a, b)}`);
console.log(`Multiplication : ${a} * ${b} = ${cal.mul(a, b)}`);
console.log(`Division       : ${a} / ${b} = ${cal.div(a, b)}`);
