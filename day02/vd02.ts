class Person{
    readonly birthDate: Date;
    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}
let person = new Person(new Date(1990, 12, 25));
console.log(person.birthDate);

//person.birthDate = new Date(1991, 12, 25); // Compile error

class Person2{
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }
    public set fullName(name: string) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid name format: first last');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    public get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let person2 = new Person2();
// person2.age = 0; //compiler error
person2.age = (15);
console.log(person2);
person2.fullName = 'John Doe';
console.log(person2.fullName);
// console.log(person2.getFullName());
export { }