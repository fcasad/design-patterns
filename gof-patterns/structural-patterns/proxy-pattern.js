// the Proxy pattern uses an object as a placeholder for another object and 
// controls access to this other object.  this can be useful to deal with async 
// and caching for example 

// simulate GoogleMaps GeoCoder
function GeoCoder() {
  this.getLatLng = function(address) {
    /* return ie: '52.3700° N, 4.8900° E' */
  };
}

// proxy
function GeoProxy() {
  const geocoder = new GeoCoder();
  // assuming getLatLng is slow, we will cache results
  let geocache = {};
  return {
    getLatLng(address) {
      // assuming the address doesn't exist in the cache 
      if (!geocache[address]) {
        // make request - lets assume GeoCoder api returns promise 
        geocoder.getLatLng(address).then(latLng => {
          // add response to cache
          geocache[address] = latLng;
        })
      }
      // return the given address' LatLng
      return geocache[address];
    },
  }
}

/**********************************************************************************************/

// usage 
const geo = new GeoProxy();
geo.getLatLng('Paris');
  
