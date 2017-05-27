// the strategy pattern allows a method (strategy) to be swapped out at runtime 
// by any other method  without the client realizing it

// context
function Shipping() {
  // maintains ref to current strategy obj
  this.company = '';
}

Shipping.prototype = {
  // allows client to change strategy
  setStrategy(company) {
    this.company = company;
  },
  // allows client to req strategy calculations
  calculate(package) {
    return this.company.calculate(package);
  }
}

// strategy 
function UPS() {
  // implement algorithm using strategy interface
  this.calculate = function(package) {
    /* calculations */
    return '$39.40';
  }
};
function Fedex() {
  this.calculate = function(package) {
    /* calculations */
    return '$43.20';
  }
};

/**********************************************************************************************/

// usage
const shipping = new Shipping();
const ups = new UPS();
const fedex = new Fedex();

shipping.setStrategy(ups);
const package = { from: '92869', to: '10001', weight: '1.2lbs' };
shipping.calculate(package)
