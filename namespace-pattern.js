// the purpose of the namespace pattern is to encapsulate methods and properties into objects 
// to avoid polluting the global namespace, and running into naming conflicts 

const app = {
    namespace(str) {
        const parts = str.split('.');
        // this references containing app obj
        let current = this;
        
        parts.forEach(part => {
          // if app.part already exists reference itself, otherwise set to empty obj
          current[part] = current[part] || {};
          // reset current namespace to current part
          current = current[part];
        });
        
        // return current part
        return current;
    }
};

/**********************************************************************************************/

// usage with global reference to namespace part
const b = app.namespace('a.b');
b.someProp = 'value';
b.someMethod = function () { /* ... */ };


// usage without adding to global namespace (takes advantage of returned current part)
app.namespace('a').b = {
  someProp: 'value',
  someMethod() {
    /* ... */
  }
}
 
 // usage in combination with module pattern
app.namespace('a').b = (function () {
  const privateVar = 'value';
  const returnPrivateVar = function () { /* ... */ };

  return { returnPrivateVar };
}());  