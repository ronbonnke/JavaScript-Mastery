var b = 10;

try {
  var c = a * b;
  console.log(c);
} catch (error) {
  console.log(error, "ERROR FOUND");
} finally {
  console.log("Executes all the time");
}
var x = 50;
console.log(x);
