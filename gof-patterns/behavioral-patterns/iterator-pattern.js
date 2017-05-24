// the iterator pattern enables looping over a collection. It can be more flexible and 
// sophisticated than the built in for, for-in, while etc...

// iterator takes a collection and maintains a reference to current index
function Iterator(items) {
  this.index = 0;
  this.items = items;
}

Iterator.prototype = {
  first() {
    this.reset();
    return this.next();
  },
  next() {
    return this.items[this.index++];
  },
  hasNext() {
    return this.index <= this.items.length;
  },
  reset() {
    this.index = 0;
  },
  each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

/**********************************************************************************************/

// usage
const items = ["one", 2, "circle", true, "Applepie"];
const iterator = new Iterator(items);

iterator.each(item => console.log(item))
