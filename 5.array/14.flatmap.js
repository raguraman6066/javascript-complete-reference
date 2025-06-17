var prices = [1, 2, 4, 6, 8, 10];
let result = prices.flatMap((price) => [price, price + 2]);
console.log(result);
//return multiple value
