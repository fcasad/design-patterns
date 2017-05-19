// the Flyweight pattern factors out common properties into immutable shared 
// flyweight objects (similar to data model normalization)
// useful for conserving memory in utility apps (rarely used in data driven apps)

// flyweight factory uses IIFE so flyweights are private (therefore immutable)
const FlyweightFactory = (function () {
  // registry of flyweights
  let flyweights = {};
  // flyweight constructor
  function Flyweight(make, model) {
    this.make = make;
    this.model = model;
  }
  return {
    get(make, model) {
      // if flyweight isn't in registry create it, return it
      if (!flyweights[make + '-' + model]) {
        flyweights[make + '-' + model] = new Flyweight(make, model);
      }
      return flyweights[make + '-' + model];
    }
  }
}());

// client
function ComputersCollection() {
  // registry of computers
  let computers = {};
  let count = 0;
  function Computer(processor, memory) {
    this.processor = processor;
    this.memory = memory;
  }
  return {
    add(make, model, processor, memory, sku) {
      // gets a flyweight and sets it as the prototype of the computer constructor
      Computer.prototype = FlyweightFactory.get(make, model);
      // create new computer using constructor and store in registry
      computers[sku] = new Computer(processor, memory);
    },
    get(sku) {
      return computers[sku];
    },
    count() {
      return count;
    }
  }
}

/**********************************************************************************************/

// usage 

const computers = new ComputersCollection();  
computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P');
computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T');
computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80');
computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701');
computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283');
computers.get('Y755P');