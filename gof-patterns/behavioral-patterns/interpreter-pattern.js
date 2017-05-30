// the interpretor pattern allows the end-user to configure an app through
// a custom scripting language (probably better to just use code generator)

// context: contains state info for interpreter
function Context(input) {
  this.input = input;
  this.output = 0;
}

Context.prototype = {
  startsWith(str) {
    return this.input.slice(0, str.length) === str;
  }
};

// terminal expression
function Expression(name, one, four, five, nine, multiplier) {
  this.name = name;
  this.one = one;
  this.four = four;
  this.five = five;
  this.nine = nine;
  this.multiplier = multiplier;
}

// one instance for each terminal expression in sentence
Expression.prototype.interpret = function(context) {
  if (context.input.length == 0) {
    return;
  } else if (context.startsWith(this.nine)) {
    context.output += 9 * this.multiplier;
    context.input = context.input.slice(2);
  } else if (context.startsWith(this.four)) {
    context.output += 4 * this.multiplier;
    context.input = context.input.slice(2);
  } else if (context.startsWith(this.five)) {
    context.output += 5 * this.multiplier;
    context.input = context.input.slice(1);
  }
  while (context.startsWith(this.one)) {
    context.output += 1 * this.multiplier;
    context.input = context.input.slice(1);
  }
};

/**********************************************************************************************/

// usage

const roman = 'MCMXXVIII';
// establish initial context
const context = new Context(roman);

// build grammer syntax tree
const tree = [];
tree.push(new Expression('thousand', 'M', ' ', ' ', ' ', 1000));
tree.push(new Expression('hundred', 'C', 'CD', 'D', 'CM', 100));
tree.push(new Expression('ten', 'X', 'XL', 'L', 'XC', 10));
tree.push(new Expression('one', 'I', 'IV', 'V', 'IX', 1));

for (let expression of tree) {
  expression.interpret(context);
}
console.log(`${roman} = ${context.output}`);
