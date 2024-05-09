// Javascript does not wait for anyone
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Hello Js"); // print first be'coz it won't for others
}
x();

// if we use var we get 66666 because of var and its a closure

// if we use let/const we get 12345 because let has a block scope
