// the memento pattern is useful to capture a snapshot of an object’s state 
// so that changes can be undone.  
// in JS object (de)serialization is simple with JSON

// originator:  can create mementos of itself
function Person(name, address, state) {
  this.name = name;
  this.address = address;
  this.state = state;
}

Person.prototype = {
  // create memento
  hydrate() {
    // memento: the JSON representation of Person
    const memento = JSON.stringify(this);
    return memento;
  },
  // restore Person's state by overwriting props, using memento
  dehydrate(memento) {
    const m = JSON.parse(memento);
    for (let prop of m) this[prop] = m[prop];
  }
}

// caretaker: repo for storing mementos
function Caretaker() {
  let mementos = {};
  return {
    show() {
      console.log(mementos);
    },
    add(prop, memento) {
      mementos[prop] = memento;
    },
    get(prop) {
      return mementos[prop];
    }
  }
}

/**********************************************************************************************/

// usage
const jane = new Person('Jane Doe', '100 Main St.', 'CA');
const john = new Person('John Doe', '100 Main St.', 'CA');
const caretaker = new CareTaker();

caretaker.add('jane', jane.hydrate());
caretaker.add('john', john.hydrate());

john.name = 'unintended change';
john.dehydrate(caretaker.get('john'));
