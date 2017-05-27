// the template method pattern provides a structure of multiple steps, where 
// each step can be modified or redefined (useful for frameworks)

// abstract class
const dataStore = {
  // template method which defines primitive steps
  process() {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  }
}

/**********************************************************************************************/

// usage

// concrete class
const mySql = Object.create(dataStore); 

// steps
mySql.connect = () => console.log("MySQL: connect step");
mySql.select = () => console.log("MySQL: select step");
mySql.disconnect = () => console.log("MySQL: disconnect step");

mySql.process();

/**********************************************************************************************/

// example of template pattern for delimiting requests (ie autocomplete input)
function Autocomplete(delay) {
  let timeout = null;
  this.delay = delay;
}

Autocomplete.prototype = {
  clearPreviousRequests() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  },
  search(...args) {
    this.clearPreviousRequests();
    this.timeout = setTimeout(() => {
      // template method
      this.request(...args);
    }, this.delay);
  }
}

// client
const autocomplete = new Autocomplete(500)
autocomplete.request = function(term, options) {
  fetch(`https://jsonplaceholder.typicode.com${term}`, options)
    .then(({body}) => console.log(body))
    .catch(error => console.error(error));
};
autocomplete.search('/posts', { method: 'PATCH', data: { title: 'foo', body: 'bar' } });
