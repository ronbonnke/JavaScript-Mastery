function counter() {
  var count = 0;
  this.increment = function () {
    count++;
    console.log(count);
  };
  this.decrement = function () {
    count--;
    console.log(count);
  };
}
var count1 = new counter();
count1.decrement();
count1.increment();
count1.increment();
count1.increment();
count1.increment();
