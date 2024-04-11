// all types of datatypes can be used inside a var in js

var a;
console.log(a);

a = 10;
console.log(a);

a = "Hello";
console.log(a);

a = true;
console.log(a);

a = null;
console.log(a);

// never ever do this in js
// not a good practice
// a = undefined;
// console.log(a);

// Asked in Accenture interview
// give me the output
console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000);
setTimeout(function () {
  console.log(3);
}, 0);
console.log(4);
