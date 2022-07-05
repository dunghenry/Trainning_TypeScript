abstract class Employee{
    constructor(private firstName: string, private lastName: string){

    }
    abstract getSalary(): number
    get fullName(): string{
        return `${this.firstName} ${this.lastName}`
    }
    public compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
class FullTimeEmployee extends Employee{
    constructor(firstName: string, lastName: string, private salary: number){
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.salary;
    }
}
let john = new FullTimeEmployee('John', 'Doe', 12000);
console.log(john.getSalary());

class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}
let jane = new Contractor('Jane', 'Doe', 100, 160);
console.log(john.compensationStatement());
console.log(jane.compensationStatement());
console.log(jane.getSalary());
export {}