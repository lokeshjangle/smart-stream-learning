"use strict";
//typeOf :
function greet(name) {
    if (typeof name === 'string') {
        console.log(`Hello, ${name.toUpperCase()}!`);
    }
    else {
        console.log(`Number, ${name}!`);
    }
}
greet('John');
greet(42);
//instancof
class Car {
    drive() {
        console.log('Driving a truck ...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck ...');
    }
    loadCargo(amount) {
        console.log('Loading cargo...' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        //instanceof is check given variable is instanceof of that class or not
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//in
const checkIn = {
    name: 'lokesh',
    age: 22,
};
console.log('name' in checkIn); //true
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving with speed ${speed}`);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 }); //Moving with speed 10
