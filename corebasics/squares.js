var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

// passing n as an argument here down below
var square2 = square(n);

// passing 4 in the arguments directly here down below
var square3 = square(4);

console.log("Square of", n, "is", square2);

//  a brand new execution context will  be created here when the function call is made
console.log("Square of 4 is", square3);
