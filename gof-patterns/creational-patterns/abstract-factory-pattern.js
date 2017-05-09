// in OOP a factory is an object that creates other objects
// an abstract factory creates objects related by a common theme

// using ES6 classes because it looks more OO
class Employee {
  // constructor methods appear on all instances
  constructor(name){
    this.name = name;
  }
  // prototype method
  say() {
    console.log(`Hello I'm ${this.name}`);
  }
}

class EmployeeFactory {
  // create method which simply instantiates Employees
  // saves one from calling 'new' all the time
  create(name) {
      return new Employee(name);
  }
} 

/**********************************************************************************************/

// usage
const employeeFactory = new EmployeeFactory;
employeeFactory.create('employee_1');