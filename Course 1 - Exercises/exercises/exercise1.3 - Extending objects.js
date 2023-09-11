// 1) Factory functions and concatenative inheritance. (Hint: Use the spread syntax.)
//
// 2) Constructors and prototypal inheritance

// TODO ask teacher about this
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    constructor(name) {
        this.name = name;
    }

    getName = () => this.name;
    setName = (name) => this.name = name;

    getAge = () => this.age;
    setAge = (age) => this.age = age;

    toString = () => this.name + ", " + this.age;

    equals = (person) => this.age === person.age && this.name === person.name;
}

class Employee {
    constructor(name, age, salary) {
        this.person = new Person(name, age);
        this.salary = salary;
    }

    constructor(name, salary) {
        this.person = new Person(name);
        this.salary = salary;
    }

    getSalary = () => this.salary;
    setSalary = (salary) => this.salary = salary;

    toString = () => this.person.toString() + ", salary: " + this.salary;

    equals = (employee) => this.person.equals(employee.person) && this.salary === employee.salary;
}
