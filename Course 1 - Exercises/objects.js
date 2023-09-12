// Factory function to create a person object
function createPerson(name, age) {
    let person = {
        name,
        age,
    };

    // Method to print person's information
    person.printInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    return person;
}

// Factory function to create an employee object
function createEmployee(name, age, jobTitle) {
    let employee = createPerson(name, age);

    // Add employee-specific properties
    employee.jobTitle = jobTitle;

    // Method to print employee's information
    employee.printEmployeeInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Job Title: ${this.jobTitle}`);
    };

    return employee;
}

// Factory function to create a student object
function createStudent(name, age, grade) {
    let student = createPerson(name, age);

    // Add student-specific properties
    student.grade = grade;

    // Method to print student's information
    student.printStudentInfo = function () {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    };

    return student;
}

// Create an employee and a student
const john = createEmployee('John', 30, 'Manager');
const alice = createStudent('Alice', 20, 'A');

// Use the methods to print information
john.printEmployeeInfo(); // Output: Name: John, Age: 30, Job Title: Manager
alice.printStudentInfo(); // Output: Name: Alice, Age: 20, Grade: A
