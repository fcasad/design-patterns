// unrelated to partial functions, the partial object pattern is popular in .NET to split a 
// class across files
// typically one partial classes contains core functionality, and another is custom code

// file1 (generated code)
const ClickableControl = function () {
  const handlers = [];
  this.register = function (handler) {
    handlers.push(handler);
  }
  // when called, trigger handlers
  this.click = function (x, y) {
    handlers.forEach(handler => {
      handler.apply(this, [x, y]);
    })
  }
}
const control = new ClickableControl();

// file2 (dev code)
// create handler
function showClick(x, y) {
  console.log(x, y);
}
// use control interface to register handler
control.register(showClick);

/**********************************************************************************************/

// user/browser generated event
control.click(120, 250);