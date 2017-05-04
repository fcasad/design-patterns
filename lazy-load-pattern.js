// the lazy load pattern is used to only load information when necessary
// can be useful to minimize network requests

const LazyObject = {
  prop: 'value',
  // prop initially set to null
  lazyProp: null,
  
  getLazyProp() {
    if (!lazyProp) {
      // assuming lazyProp is falsy, initialize it
      this.lazyProp = this.initialize()
    }
    return lazyProp;
  },
  // lazyProps future value (if called) 
  initialize() {
    // this could be done asynchronously
    return {
      prop1: 'some value',
      prop2: 'another value',
    }
  }
}

/**********************************************************************************************/

// another variation is the ghost pattern where a partially loaded object is shown initally
// ie a list of items, where clicking an item, loads a full 'detail view'

const Employee = function (name, img) {
  this.name = name;
  this.img = img;
  // the ghost prop signifies that the object is not yet fully loaded  
  this.ghost = true;
  this.getDepartment = function () {
    if (this.ghost) this.load();
    return this.department;
  },
  this.getSalary = function () {
    if (this.ghost) this.load();
    return this.salary;
  }
  // get data asynchronously (ie fetch here)
  this.load = function() {
    fetch(/* url */)
      .then(res => {
        // add props to calling obj from response
        this.department = res.department;
        this.salary = res.salary;
        // reset ghost flag since obj is now loaded
        this.ghost = false;
      })
      .catch(err => {
        /* handle error case */
      })
  }
}
 