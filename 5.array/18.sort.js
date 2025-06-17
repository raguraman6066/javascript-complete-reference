var prices = [1, 2, 6, 8, 10, 3, 4];
prices.sort((a, b) => a - b);
console.log(prices);
var names = [
  { name: "john" },
  { name: "mari" },
  { name: "arthi" },
  { name: "amar" },
];
names.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log(names);
