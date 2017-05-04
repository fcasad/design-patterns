// the extend (mixin) pattern is used to copy properties from one object to another.
// Object.assign returns a shallow copy, while this is a naive implementation on a deep clone

function deepExtend (target, ...sources) {
  sources.forEach(source => {
    //iterate over object using a 'for of' loop to avoid copying from prototype
    // could also use 'for in' loop along with Object.hasOwnProperty()
    for (let prop of source) {
      // check whether prop is nested obj
      if (typeof source[prop] === 'object') {
        // check whether source prop is arr, returns empty structure
        target[prop] = Array.isArray(source[prop]) ? [] : {};
        // recursively call deepExtend on nested arr or obj
        deepExtend(target[prop], source[prop]);
        // if prop isn't an obj, simply add to target
      } else {
        target[prop] = source[prop];
      }
    }
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
const john = deepExtend({}, person, {name: 'John', email: 'thedoe@fake.email'}) 