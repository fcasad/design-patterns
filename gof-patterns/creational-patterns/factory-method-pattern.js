// a Factory Method creates new objects as instructed by the client
// usefull in casas where the client doesn't/shouldn't know exactly which object
// to instantiate

class Factory {
  // this is the actual factory method
  createEmployee(type) {
    let employee;
    // switch on type and instantiate appropriate new object
    switch(type) {
      case 'fullTime':
        employee = new FullTime;
        break;
      case 'partTime':
        employee = new PartTime;
        break;
    }
    // add properties/methods and return the object
    employee.type = type;
    return employee;
  }
}

class FullTime {
  constructor() {
    this.salary = '$100,000'
  }
}

class PartTime {
  constructor() {
    this.salary = '$30/hr'
  }
}

/**********************************************************************************************/

// usage
const factory = new Factory;
const anEmployee = factory.createEmployee('fullTime');