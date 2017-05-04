// Partial Application  is providing some args to a function which returns a function
// which expects the remaining args
// useful for reusing functions, or when paet of a function requires heavy processing, where 
//the results are saved (ie caching a dataset from a server)

function getCustomer(query, id) {
  if (typeof id ==='undefined') {
    // assuming no id is passed, call fetch customers and cache results
    const cache = fetchCustomers(query);
    // return a partial function that takes the remaining args 
    return function (id) {
      return cache[id];
    }
  }
  // if id is passed in, call full function
  return fetchCustomers(query)[id];

  // this would be an async call to the DB
  function fetchCustomers(query) {
    return {
      0: 'customer1',
      1: 'customer2',
      2: 'customer3'
    }
  }
}


/**********************************************************************************************/

// usage with all args passed
retrieve('customers', 2);      

// usage with partial application 
const partial = retrieve('customers');    
partial(0);        
partial(1);        