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

// new examples
function a() {
  console.log(b);
}
var b = 10;
a();

console.log(x);
var x = 5;
console.log(x);
