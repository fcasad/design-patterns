// the extend (mixin) pattern is used to copy properties from one object to another.
// Object.assign returns a shallow copy, while this is a naive implementation on a deep clone

function deepExtend (target, ...sources) {
  sources.forEach(source => {
    //iterate over object keys to avoid copying from prototype
    // could also use 'for in' loop along with Object.hasOwnProperty()
    Object.keys(source).forEach(key => {
      // check whether key is nested obj
      if (typeof source[key] === 'object') {
        // check whether source key is arr, returns empty structure
        target[key] = Array.isArray(source[key]) ? [] : {};
        // recursively call deepExtend on nested arr or obj
        deepExtend(target[key], source[key]);
        // if key isn't an obj, simply add to target
      } else {
        target[key] = source[key];
      }
    });
  })
  return target;
}

/**********************************************************************************************/

// usage
const person = {
    name: "Jane",
    address: {
       address: "123 Main St.",
       email: "janedoe@fake.email"
    },
    interests: ['netflix', 'cats', 'tacos'],
};
const employee = { salary: "$45,000" };
deepExtend(employee, person);

//or
const john = deepExtend({}, person, {name: 'John', interests: ['netflix', 'programming', 'sports']}) 