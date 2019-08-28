export {}

enum Color {Red = 5, Green, Blue};


function add(num1:number, num2: number = 10):number {
   
    return num1 + num2;
}

add(5);


interface Person {
    firstName: string;
    lastName: string;
}

class Employee {
    employName: string;
    constructor (name: string) {
        this.employName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employName}`);
    }
}

let emp1 = new Employee('Vishwas');
console.log(emp1.employName);
emp1.greet();

class Manager extends Employee {
    constructor (managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();

