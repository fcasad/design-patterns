// the chain of responsibility pattern is useful to avoid coupling the sender of a request 
// to its receiver by giving more than one object a chance to handle the request 

// each bill object will be a receiver
function Bill(size) {
  this.billSize = size;
  this.next = null;
}

Bill.prototype = {
  get(amount) {
    const numOfBills = Math.floor(amount / this.billSize);
    // the bill handles the request if possible...
    if (numOfBills > 0) {
      console.log(`dispense ${numOfBills} $ ${this.billSize} bills`);
      amount = amount - (this.billSize * numOfBills);
    }
    // and/or passes it along to the next receiver
    amount > 0 && this.next && this.next.get(amount);
  },
  // this method sets the order of the chain!
  setNextBill(bill) {
    this.next = bill;
  }
}

function ATM() {
  const $100 = new Bill(100),
      $50 = new Bill(50),
      $20 = new Bill(20),
      $10 = new Bill(10),
      $5 = new Bill(5),
      $1 = new Bill(1);
  $100.setNextBill($50);
  $50.setNextBill($20);
  $20.setNextBill($10);
  $10.setNextBill($5);
  $5.setNextBill($1);
  this.Bills = $100;
}

// ATM is the sender, ammount is the request itself
ATM.prototype.withdraw = function(ammount) {
  this.Bills.get(ammount);
}

/**********************************************************************************************/

// usage
const atm = new ATM();
atm.withdraw(756);
