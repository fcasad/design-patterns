// the protoype pattern is useful for creating objects with properties that are initialized
// yet easy to override (where the prototype has the default values)

// obviously obtuse in JS, but how it might be done in a classical language
class CustomerPrototype {
  //the prototype class takes a proto object to inherit from
  constructor (proto) {
    this.proto = proto;
  }
  clone() {
    // instantiate an object, overwrite the defaults using the proto object, and return it
    let customer = new Customer;
    customer.first = proto.first;
    customer.last = proto.last;
    return customer;
  }
}

class Customer {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
 }

/**********************************************************************************************/

// usage
// create a proto obj
const proto = new Customer('default_first', 'default_last');
// create prototype obj using the proto obj
const prototype = new CustomerPrototype(proto);
// use protoypes clone method to instantiate new objects
const customer = prototype.clone();

/**********************************************************************************************/

// more relevant JS implementation is very simple because JS uses prototypical inheritance
// could use ES6 classes, but that seemed contradictory so I used constructor functions

function Customer(first, last) {
  this.first = first;
  this.last = last;
}

Customer.prototype = {
  first: 'default_first',
  last: 'default_last'
}

// usage
const customer1 = new Customer();