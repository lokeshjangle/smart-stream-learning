///<reference path="NamespaceDemo.ts"/>

namespace Demo {
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
  let a = 10;
  let b = 20;
  console.log(`Addition       : ${a} + ${b} = ${cal.add(a, b)}`);
  console.log(`Sustraction    : ${a} - ${b} = ${cal.sub(a, b)}`);
  console.log(`Multiplication : ${a} * ${b} = ${cal.mul(a, b)}`);
  console.log(`Division       : ${a} / ${b} = ${cal.div(a, b)}`);
}
