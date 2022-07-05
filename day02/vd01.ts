class Person{
    public ssn: string;
    private firstName: string;
    protected lastName: string;
    constructor(ssn: string, firstName: string, lastName: string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    public changeFirstName(firstName: string){
        this.firstName = firstName;
    }
    public changeLastName(lastName: string){
        this.lastName = lastName;
    }
}
let person = new Person('171280926', 'John', 'Doe');
console.log(person.getFullName());
person.ssn = '123445'
console.log(person);//Person { ssn: '123445', firstName: 'John', lastName: 'Doe' }

person.changeFirstName("Tran"); //changeFirstName
console.log(person); //Person { ssn: '123445', firstName: 'Tran', lastName: 'Doe' }

person.changeLastName("Dung"); //changeLastName
console.log(person); //Person { ssn: '123445', firstName: 'Tran', lastName: 'Dung' }
// console.log(person.ssn); // error : 'ssn' is private


export { }