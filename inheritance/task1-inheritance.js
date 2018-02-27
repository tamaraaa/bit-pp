/*
Create constructor functions with properties representing the following:
Employee: name, surname, specialization, salary
Manager: name, surname, department, salary

All employees should inherit method:
getSpecialization which prints out the name of the specialization

All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

All employees and managers should inherit methods:
getData which prints out the name and surname 
getSalary which prints out the salary
increaseSalary which increases the salary by 10%  */


(function () {

    function Person(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }
    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }
    Person.prototype.getSalary = function () {
        return this.salary;
    }
    Person.prototype.increaseSalary = function (salary) {
        var newSalary = salary + salary* 0.1;
        return newSalary;
    }

    function Employee(name, surname, specialization, salary) {
        Person.call(this, name, surname);
        this.specialization = specialization;
        this.salary = salary;
    }

    function Manager(name, surname, department, salary) {
        Person.call(this, name, surname);
        this.department = department;
        this.salary = salary;

    }
    Employee.prototype.getSpecialization = function () {
        return this.specialization;
    }
    Manager.prototype.getDepartment = function () {
        return this.department;
    }
    Manager.prototype.changeDepartment = function (dep) {
        this.department = dep;
    }

    Employee.prototype = Object.create(Person.prototype);
    Employee.prototype.constructor = Employee;

    Manager.prototype = Object.create(Manager.prototype);
    Manager.prototype.constructor = Manager;

    var tamara = new Manager("Tamara", "Milosavljevic", "IT", 1000);
    console.log(tamara);
    console.log(tamara.increaseSalary(1000));
})();