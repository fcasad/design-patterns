// the multiton pattern is similar to a singleton, only instead of one instance it returns
// a set ammount of instances 
// useful for managing a limited resource ie (server/DB)

function Multiton(limit) {
  let instances = [];
  // instance Constructor scoped to outer Constructor
  function Instance() {
    this.prop = 'value';
    this.someMethod = function () {
      /* ... */
    }
  }
  return {
    getInstance() {
      // instantiate n objects one time only
      if (instances.length === 0) {
        for (let i = 0; i < limit; i++) {
          instances.push(new Instance());
        }
      }
      // randomly access on of the instances
      // could easily be modified to return a specific instance (directory of singletons)
      const random = Math.floor(Math.random() * limit);
      return instances[random];
    }
  }
}

/**********************************************************************************************/

// usage
const multiton = new Multiton(3);
m1 = multiton.getInstance();
m2 = multiton.getInstance();
m3 = multiton.getInstance();
m1.someMethod();