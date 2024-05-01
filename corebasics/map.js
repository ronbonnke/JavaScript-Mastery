data = [
  { name: "ron", num: 10 },
  { name: "boogie", num: 20 },
  { name: "doggie", num: 30 },
  { name: "saggie", num: 40 },
];

data.map((item) => {
  console.log(item);
});

//
//
// example 1:
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => {
  return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//
//example 2:
const words = ["apple", "banana", "orange"];
const upperCasedWords = words.map((word) => {
  return word.toUpperCase();
});
console.log(upperCasedWords); // Output: ['APPLE', 'BANANA', 'ORANGE']

//
// example 3:
const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 21 },
];
const studentNames = students.map((student) => {
  return student.name;
  //   console.log(student.name);
});
console.log(studentNames); // Output: ['Alice', 'Bob', 'Charlie']
