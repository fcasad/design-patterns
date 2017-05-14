// the Decorator pattern uses a 'decorator' object to wrap another object adding
// behavior at runtime.  in JS a good example would be the extend/mixin pattern 
// (see '../../modern-patterns/extend-pattern') 

function User(name) {
  this.name = name;
  this.say = function () {
    /* ... */
  }
}

function SuperUser(user, credentials) {
  this.user = user;
  this.logIn = function () {
    /* ... */
  }
  // ensure interface stays the same
  this.name = user.name;  
  this.say = user.say;
}

/**********************************************************************************************/

// usage
const user = new User("Kelly");
const superUser = new SuperUser(user, '0sght59aag');

// usage is simpler with the deep extend function (wouldn't need SU constructor):
const user = new User("Kelly");
deepExtend(user, { user, login() {/* ... */} })

