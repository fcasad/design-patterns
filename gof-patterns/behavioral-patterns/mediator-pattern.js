// the mediator pattern encspsulates how a set of objects interract.
// useful for useful for managing complex conditions where every object is aware 
// of any state change in any other object

// collegues managed by mediator
function User(name) {
  this.name = name;
  // will hold reference to mediator
  this.chatroom = null;
}

User.prototype = {
  send(message, to) {
    // notice this method goes through the mediators interface
    this.chatroom.send(message, this, to);
  },
  receive(message, from) {
    console.log(`${from.name} to ${this.name} : ${message}`);
  }
}

// mediator manages collegues
function Chatroom() {
  // registry of collegues
  let users = {};
  return {
    register(user) { 
      // this refers to containing obj 
      user.chatroom = this;
      users[user.name] = user;
    },
    send(message, from, to) {
      if (to) {
        // notice mediator controls collegues behavior here and ln 40
        to.receive(message, from)
      }
      else {
        Object.keys(users).forEach(key => {
          if (users[key] != from) {
            users[key].receive(message, from);
          }
        });
      }
    }
  };
}

/**********************************************************************************************/

// usage
const jane = new User('Jane');
const bob = new User('Bob');
const john = new User('John');

const chatroom = new Chatroom();
chatroom.register(jane);
chatroom.register(bob);
chatroom.register(john);

jane.send('Hi everyone');
bob.send('Hello Jane', jane);
