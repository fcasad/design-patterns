// the builder is not really used in JS, but it's often used to
// encapsulate construction of Composite objects because the procedures 
// involved are often repetitive and complex.

// the director class
class Shop {
  // the director expects a builder instance with a specific interface 
  build(builder) {
    // the director assembles then returns a new product
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

// the builder class
class CarBuilder {
  constructor() {
    this.car = null;
  }
  // the builder has assembly methods and a get method
  step1() {
    this.car = new Car();
  }
  step1() {
    this.car.addParts();
  }
  get() {
    return this.car;
  }
}

// the product class
class Car {
  constructor() {
    this.wheels = 0;
  }
  addParts() {
    this.wheels += 4;
  }
}

/**********************************************************************************************/

// usage

const shop = new Shop;
const carBuilder = new CarBuilder;
const newCar = shop.build(carBuilder);