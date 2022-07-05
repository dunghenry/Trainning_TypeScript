class Employee{
    public static headcount: number = 0;
    constructor(public firstName: string,private lastName: string,private jobName: string){
        Employee.headcount++;

    }
    public static getHeadcount(): number{
        return Employee.headcount;
    }
}
let john = new Employee('John', 'Doe', 'Front-end Developer');
let jane = new Employee('Jane', 'Doe', 'Back-end Developer');
console.log(Employee.headcount);
console.log(Employee.getHeadcount());
console.log(john.firstName); 
export {}