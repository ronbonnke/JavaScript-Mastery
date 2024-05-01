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
