
console.log("Hello".length); //5
console.log("Hello".toUpperCase()); //HELLO
//Primitive types: string, number, boolean, null, undefined, symbol
//Object types: functions, arrays, classes
// const heading : HTMLHeadingElement | null = document.querySelector('h1');

let count: number = 0;
// count = 'hi';//error

let str: string = 'Xin chao';

let isActive: boolean = false;

let courses: string[] = [];

courses = ['JS', "TS"];

let person: {
    id: number,
    name: string,
}

person = {
    id: 1,
    name: 'John Smith',
}

let greeting: (name: string) => string;

greeting = (name: string) => {
    return `Hi ${name}!`;
}

let logger: (msg: string) => void;

//C1
logger = (msg: string) => {
    console.log(msg);
}

//C2
logger = function (msg: string) {
    console.log(msg);
};

logger("Hi")

export { }