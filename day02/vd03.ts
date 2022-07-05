class Person{
    constructor(private firstName:string, private lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public getFullName() : string{
        return this.firstName + " " + this.lastName;
    }
    public describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person{
    constructor(firstName: string, lastName: string, private jobTitle: string){
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
let employee = new Employee('John','Doe','Front-end Developer');
console.log(employee);
console.log(employee.getFullName()); //John Doe
console.log(employee.describe());
export { }