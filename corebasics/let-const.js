var c;
c = 99; // can reassign value to var types
console.log(c);

let a;
a = 10; // "CAN" reassign value to const types
console.log(a);

const b = 100;
// b = 1200; // "CANNOT" reassign value to const types
console.log(a);
console.log(b);

// 1. var is function scoped
// 2. let and const are block scope
// 1. var is hoisted
// 2. let and const are not hoisted

// 3. var can be re-declared
// 4. let and const cannot be re-declared

// {
// eg :
// var a = 10;
// var a = 20;
// console.log(a);
// this cannot be done
// }

// 5. var can be updated
// 6. let and const cannot be updated
