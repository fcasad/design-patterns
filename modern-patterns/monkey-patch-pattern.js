// with monkey patching you can modify code at runtime without changing the original source
// (useful for hacks involving 3rd party libs)

const library = { 
    prop1: 'value 1',
    aMethod() {
        /* ... */
    }
};

// use IIFE to leave global scope intact
(function () {
  // store reference to original method 
  const oldMethod = library.aMethod;
  
  // re-assign method 
  library.aMethod = function () {
    // make changes (this points to library obj)
    this.prop1 = 'new value';
    // call original method
    oldMethod.call(this);
    // post execution revert source back 
    this.prop1 = 'value 1'
  }
}());

/**********************************************************************************************/

// slight modification for constructor and protoype

const Library = function () { 
    this.prop1 = 'value 1';
}; 
Library.prototype.aMethod = function () {
  /* ... */
}

(function () {
  const oldMethod = Library.prototype.aMethod;

  Library.prototype.aMethod = function () {
    this.prop1 = 'new value';
    oldMethod.call(this);
    this.prop1 = 'value 1';
  }
}());