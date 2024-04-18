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

// LET has different properties
