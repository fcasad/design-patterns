// the observer pattern (Pub/Sub) offers a subscription model where objects subscribe 
// to an event and get notified when the event occurs

// subject: the observable object
function Click() {
  // list of observers
  this.handlers = [];
}

Click.prototype = {
  subscribe(callback) {
    this.handlers.push(callback);
  },
  unsubscribe(callback) {
    this.handlers = this.handlers.filter(handler => handler != callback);
  },
  fire(event, thisObj) {
    const context = thisObj || Window;
    this.handlers.forEach(handler => handler.call(context, event));
  },
}

/**********************************************************************************************/

// usage
// observer: gets invoked when event occurs
function clickHandler(event) {
  console.log(event);
}

const click = new Click();
click.subscribe(clickHandler);
click.fire('event #1');

click.unsubscribe(clickHandler);
click.fire('event #2');

click.subscribe(clickHandler);
click.fire('event #3');