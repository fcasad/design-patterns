// The Command pattern encapsulates actions as objects. Command objects separate the 
// objects that issue a request from the objects that actually process the request

// these functions will be encapsulated by a command obj
function _add(a, b) { return a + b };
function _subtract(a, b) { return a - b };
function _multiply(a, b) { return a * b };
function _divide(a, b) { return a / b };

// the calculator's undo function is simply the inverse of the current function 
function Command(execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
}

function add(value) {
  return new Command(_add, _subtract, value);
};
function subtract(value) {
  return new Command(_subtract, _add, value);
};
function multiply(value) {
  return new Command(_multiply, _divide, value);
};
function divide(value) {
  return new Command(_divide, _multiply, value);
};

// receiver obj processes commands
function Calculator() {
  let current = 0;
  let commands = [];
  return {
    execute(command) {
      current = command.execute(current, command.value);
      commands.push(command);
      return this;
    },
    undo() {
      const command = commands.pop();
      current = command.undo(current, command.value);
      return this;
    }
  }
}
/**********************************************************************************************/

// usage
const calculator = new Calculator();
calculator.execute(add(100))
          .execute(subtract(24))
          .execute(multiply(6))
          .execute(divide(2))
          .undo()
          .undo();








