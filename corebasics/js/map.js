// eg1
const array = [{ name: "ron", age: 20, rollNo: 30, loc: "bangalore" }];

const result = array.map((data) => data);
console.log(result);

// eg2
const numbers = [10, 20, 30, 40];

const newNum = numbers.map((item) => item + 5);
console.log(newNum);

// eg3
const stringNum = ["1", "2", "3"];

stringNum.map((item) => {
  console.log(item);
});

// eg4
const users = [
  { name: "bob", age: 21 },
  { name: "alice", age: 17 },
];

const res = users.map((item) => item.name);
console.log(res);

// eg5
const stringNumbers = ["1", "2", "3", "4"];
stringNumbers.map((str) => {
  console.log(parseInt(str, 10));
});

// eg6
const numeric = ["1", "2", "3", "4", "5"];

const collect = numeric.map((item) => item);
console.log(collect);
