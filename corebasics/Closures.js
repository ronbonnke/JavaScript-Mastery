function x() {
  var a = 16;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
