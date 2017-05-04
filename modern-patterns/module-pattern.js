// the module pattern is used to keep units of code self contained (like GOF singleton)
// since JS doesn't have private vars, this is done with IIFE's and closures 

const module = (function (global, $) {
  // private area hidden in function closure
  let count = 0;
  const increment = function () { /* ... */ };
  const getCount = function () { /* ... */ };
  //uses globals in module
  const doc = global.document /*  || fake DOM */;
  const someElem = $(/* some selector */);
  
  // public area returned in object
  return {
    //revealing methods
    increment,
    getCount
  };
  // uses dependency injection to explicitly import globals
}(window, jQuery ));

/**********************************************************************************************/

// another variation is the partial module pattern (like CommonJS modules)
// useful for splitting module into separate files without worrying about the order they are imported

const module = (function (self) {
  const num = 10;

  // returns obj composed from self, decorated with new methods/props
  return Object.assign(
    {}, 
    self, 
    {
      getNum() {/* ... */},
      addToNum(num2) {/* ... */},
      randomProp: 'value'  
    }
  );
// existing module of same name passed in, otherwise empty obj
}(module || {}));
 