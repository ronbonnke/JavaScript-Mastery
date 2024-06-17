// eg1
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

number.filter((items) => {
  if (items % 2 !== 0) {
    console.log(items);
  }
});

// eg2
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);
