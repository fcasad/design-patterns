// the state pattern represents different states as objects, where each object could
// have properties (state) and methods (rules for state transitions)

// context
function TrafficLight() {
  let count = 0;
  // maintains ref to current state obj, passes ref of self to state obj
  let currentState = new Red(this);
  // interface for state object to change it's current state
  this.change = function (state) {
    // simply limited to prevent program from running infinitely
    if (count++ >= 10) return;
    currentState = state;
    currentState.transition();
  };
  this.start = function () {
    currentState.transition();
  };
}

// states
// notice it takes a ref to the the context obj as a param 
function Red(light) {
  // determines state transition
  this.transition = function () {
    console.log('Red --> for 1 minute');
    // updates current state of context obj
    light.change(new Green(light));
  };
};
function Yellow(light) {
  this.transition = function () {
    console.log('Yellow --> for 10 seconds');
    light.change(new Red(light));
  };
};
function Green(light) {
  this.transition = function () {
    console.log('Green --> for 1 minute');
    light.change(new Yellow(light));
  };
};

/**********************************************************************************************/

// usage
const trafficLight = new TrafficLight();
trafficLight.start();