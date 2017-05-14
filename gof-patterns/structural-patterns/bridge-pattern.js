// the Bridge pattern (double-adapter) allows a client and a service to work together 
// with each component having its own interface - It's rare in JS...

// the abstractions (input devices for this ex)
// (notice how the abstraction maps the implementors properties to it's own)
function Gestures(output) {
  this.output = output;
  this.tap = function () { this.output.click(); }
  this.swipe = function () { this.output.move(); }
  this.pan = function () { this.output.drag(); }
  this.pinch = function () { this.output.zoom(); }
}

function Mouse(output) {
  this.output = output;
  this.click = function () { this.output.click(); }
  this.move = function () { this.output.move(); }
  this.down = function () { this.output.drag(); }
  this.wheel = function () { this.output.zoom(); }
}

// the implementors (output devices)
// (notice both have the same interface despite doing different things)
function Screen() {
  this.click = function () { console.log("Screen select"); }
  this.move = function () { console.log("Screen move"); }
  this.drag = function () { console.log("Screen drag"); }
  this.zoom = function () { console.log("Screen zoom in"); }
};

function Audio() {
  this.click = function () { console.log("Click sound"); }
  this.move = function () { console.log("Move sound"); }
  this.drag = function () { console.log("Drag sound"); }
  this.zoom = function () { console.log("Zoom sound"); }
};

/**********************************************************************************************/

// usage 
const screen = new Screen();
const audio = new Audio();

const hand = new Gestures(screen);
const mouse = new Mouse(audio);