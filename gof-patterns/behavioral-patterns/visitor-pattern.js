// the visitor pattern allows a visitor object to operate on the original collection
// of objects (not necessary in JS b/c of the ability to make changes at runtime)

// element
function Employee(name, _salary) {
  this.name = name;
  // accept method accepts visitor objects
  this.accept = function(visitor) {
    // called with ref to element
    visitor.visit(this);
  };
  // getters and setters for salary in closure scope
  this.getSalary = function() {
    return _salary;
  };
  this.setSalary = function(salary) {
    _salary = salary;
  };
}

// visitor 
function Bonus(ammount) {
  // expects ref to element being visited
  this.visit = function (employee) {
    employee.setSalary(employee.getSalary() + ammount);
  }
}

/**********************************************************************************************/

// usage
const employees = [
  new Employee('John', 45000), 
  new Employee('Jane', 39000), 
  new Employee('The Manager', 70000)
];
const bonus = new Bonus(1500);

for (let employee of employees) {
  employee.accept(bonus);
  console.log(`${employee.name}: $${employee.getSalary()}`);
}


