// the Facade pattern is useful for creating an interface which shields clients 
// from complex functionality in subsystem(s).  Also useful in refactoring

// this is the facade
function Mortgage(name) {
  this.name = name;
}

// somewhat hidden on prototype, business logic happens here:
Mortgage.prototype.applyFor = function (ammount) {
  let result = 'approved';
    if (!new Bank().verify(this.name, amount)) {
      result = 'denied';
    } 
    if (!new Credit().get(this.name)) {
      result = 'denied';
    } 
    if (!new Background().check(this.name)) {
      result = 'denied';
    }
  return `${this.name} has been ${result} for a ${ammount} mortgage`;
}

// subsystems the client is unaware of
function Bank() {
  this.verify = function(name, amount) {
    /* return true || false */
  }
}

function Credit() {
  this.get = function(name) {
    /* return true || false */
  }
}

function Background() {
  this.check = function(name) {
    /* return true || false */
  }
}

/**********************************************************************************************/

// usage (notice how simple it is from the client's perspective)
const mortgage = new Mortgage('John Doe');
const result = mortgage.applyFor('$200,000');