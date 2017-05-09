// a singleton is an object that has only one (and never more) instance;
// this pattern is useful where system wide actions need to coordinate from a central place
// (ie a DB connection)

const Singleton = (function () {
  let instance;
  // the function that builds the instance
  function createInstance() {
    return {/* ... */}
  }
  // revealing module pattern returns obj with getinstance prop
  return {
    // if instance doesn't exist yet create it, then return it
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
}());

/**********************************************************************************************/

// usage
// both obj1 and obj2 here refer to the same instance
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();