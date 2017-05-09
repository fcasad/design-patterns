// the Adapter pattern is used for programming components that otherwise wouldn't 
// work together because of mismatched interfaces

// due to current limitations with ES6 classes (lack of private vars), going back to 
// constructor functions

// old interface
function Shipping() {
  this.request = function(destination, weight) {
    /* ... */
  }
}

// new interface (adaptee)
function NewShipping() {
  this.login = function(authentication) {
    /* ... */
  }
  this.setDestination = function(destination) {
    /* ... */
  }
  this.calculate = function(weight) {
    /* ... */
  }
}

// adapter interface
function ShippingAdapter(credentials) {
  // instantiate new interface and handle new methods
  const shipping = new NewShipping();
  shipping.login(credentials);
  // return obj with same interface as original
  return {
    // match function signature to original method 
    request: function(destination, weight) {
      // internally implement with new interface (client doesn't need to be aware of this) 
      shipping.setDestination(destination);
      shipping.calculate(weight);
    }  
  }
}

/**********************************************************************************************/

// usage with old interface (just for demonstration)
const shipping = new Shipping;
const total = shipping.request('92869', '2.6 lbs' )

// usage with new interface (this call would smoothly swap out the previous)
const credentials = {token: "30a8-6ee1"};
const adapter = new ShippingAdapter(credentials);
const total = adapter.request('92869', '2.6 lbs' )