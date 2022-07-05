interface IEmployee{
    empCode: number;
    name: string;
    getSalary:(empCode: number) => number;
}

class Employee implements IEmployee{
    empCode: number;
    name: string;
    constructor(empCode: number, name: string) {
        this.empCode = empCode;
        this.name = name;
    }
    getSalary(): number {
        return 20000;
    }
}

let emp = new Employee(1, "Steve");
console.log(emp);
console.log(emp.getSalary());


interface Mailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}
class Mail implements FutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} ms.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}`);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }

}

interface A {
    a(): void
}

interface B extends A {
    b(): void
}
interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}


class Control {
    private state: boolean;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }

// Error: cannot implement
// class Chart implements StatefulControl {
//     enable() { }

// }


export { }