function getFullName(person: { firstName: string; lastName: string }): string {
    return `${person.firstName} ${person.lastName}`;
}
let person = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log(getFullName(person));

interface Person1 {
    firstName: string;
    lastName: string;
}

function getFullName1(person: Person1): string {
    return `${person.firstName} ${person.lastName}`;
}

let jane = {
    firstName: 'Jane',
    middleName: 'K.',
    lastName: 'Doe',
    age: 22
};
console.log(getFullName1(jane));

//middleName có thể có hoặc không
interface Person2 {
    firstName: string;
    middleName?: string;
    lastName: string;
}
function getFullName2(person: Person2) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

interface Person3 {
    readonly ssn: string;
    firstName: string;
    lastName: string;   
}
let pr2 : Person3;
pr2 = {
    ssn: '171-28-0926',
    firstName: 'John',
    lastName: 'Doe'
}
console.log(pr2.ssn); //
// pr2.ssn = '123445'; //compiler error



//function
interface StringFormat{
    (str: string, isUpper: boolean): string;
}

let format : StringFormat;
format = function (str: string, isUpper: boolean): string {
    return isUpper ? str.toLocaleUpperCase  () : str.toLocaleUpperCase();
}
console.log(format('hi', true)); //HI

let lowerCase: StringFormat;
lowerCase = function (str: string): string {
    return str.toLowerCase();
}
console.log(lowerCase('Hi', false)); //hi

interface Json{
    convert:() => string;
}
class Person4 implements Json {
    constructor(private firstName: string, private lastName: string) {
    }
    convert(): string {
        return JSON.stringify(this);
    }
}
let pr4 = new Person4('John', 'Doe');
console.log(pr4.convert());
export { }