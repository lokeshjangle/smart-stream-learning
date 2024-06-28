"use strict";
///<reference path="NamespaceDemo.ts"/>
var Demo;
(function (Demo) {
    class Calculator {
        div(a, b) {
            return a / b;
        }
        mul(a, b) {
            return a * b;
        }
        add(a, b) {
            return a + b;
        }
        sub(a, b) {
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
})(Demo || (Demo = {}));
