//object
let employee: object;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);

let employee1: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};

employee1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

// let vacant: {};
// vacant.firstName = 'John'; error

let vacant: {} = {};

console.log(vacant.toString()); //[object Object]
export { }