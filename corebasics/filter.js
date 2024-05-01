const names = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Anna" },
  { name: "David" },
  { name: "Amy" },
];

names.filter((item) => {
  if (item.name.startsWith("A")) {
    console.log(item);
  }
});

//
//
// // same example
// const names = ["Alice", "Bob", "Anna", "David", "Amy"];

// const namesStartingWithA = names.filter((name) => {
//   return name.startsWith("A");
// });

// console.log(namesStartingWithA); // Output: ['Alice', 'Anna', 'Amy']

//example 1:
const students = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 18 },
];

const olderStudents = students.filter((student) => {
  return student.age > 20;
});

console.log(olderStudents);
// Output: [{ name: 'Alice', age: 22 }, { name: 'Charlie', age: 25 }]

//
//
// example 2:
const values = [10, 0, "", "Hello", false, true, undefined, null, NaN];
const truthyValues = values.filter((value) => {
  return Boolean(value);
});
console.log(truthyValues); // Output: [10, 'Hello', true]
