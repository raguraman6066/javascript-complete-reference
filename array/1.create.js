let prices = [1, 2, 3];
console.log(prices);
console.log(prices.length);
console.log(prices[1]);
console.log("element using loop:");
for (let i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}

//array of objects

let students = [
  { id: 1, name: "ram" },
  { id: 2, name: "krish" },
  { id: 3, name: "hari" },
];

console.log("length,", students.length);
console.log("element using loop:");
for (let i = 0; i < students.length; i++) {
  // console.log(students[i]);
  console.log(
    `student id: ${students[i].id}, student name: ${students[i].name}`
  );
}
