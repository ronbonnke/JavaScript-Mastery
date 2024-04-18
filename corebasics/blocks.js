var a = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // prints 10 because var is modified and it's global variable
  console.log(b);
  console.log(c);
}
console.log(a); // prints 10 because VAR is modified and it's global variable

console.log(" \n");

// LET has different properties
// let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // prints 10 because var is modified and it's global variable
  console.log(b);
  console.log(c);
}
// console.log(b);

console.log(" \n");
// CONST has different properties
const c = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a); // prints 10 because var is modified and it's global variable
  console.log(b);
  console.log(c);
}
console.log(c);

//shadowing eg using function
// const d = 100;
// function x() {
//   const d = 30;
//   console.log(c);
// }
// x();
// console.log(d);

// illegal shadowing
let e = 20;
{
  var e = 20; // illegal shadowing
  console.log(e);
}
// it prints the answer but gives you error
