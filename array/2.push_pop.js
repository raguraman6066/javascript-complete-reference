//array push
var prices = [1, 2, 3, 4];
prices.push(5); //add last
console.log(prices);
let last_element = prices.pop(); //remove last
console.log(prices, last_element);

let students = [
  { id: 1, name: "ram" },
  { id: 2, name: "krish" },
  { id: 3, name: "hari" },
];
students.push({ id: 4, name: "hema" });
console.log(students);
