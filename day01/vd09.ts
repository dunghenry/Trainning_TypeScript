type typeNumber = number;
let num : typeNumber;
num = 1;
console.log(num);

type alphanumeric = number | string;
let input : alphanumeric;
input = 'a';
input = 10;
// input = false; error

type Animal = {
    name : string;
    legs: number;
}

let dogs: Animal;
dogs = {
    name : 'Dog',
    legs: 4
}
console.log(dogs);

type Bear = Animal & {
    honey: boolean;
}

let bear : Bear;
bear = {
    name : 'Bear',
    legs: 4,
    honey: true
}

console.log(bear);

let un : unknown;
un = 'a';
un = true;

console.log(un);


let click: 'click';
click = 'click';
// click = 'dbclick'; //error

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click'; // valid
// mouseEvent = 'mouseover'; // compiler error

type MouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent1: MouseEvent;
mouseEvent1 = 'click'; // valid
// mouseEvent1 = 'mouseover'; // compiler error

//default value
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}
console.log(applyDiscount(100,)); // 95

export { }