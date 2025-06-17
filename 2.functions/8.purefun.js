//not access any external values..except args
//not have side effects which means should not changes global variables
//pure function
let getSquare = function (n) {
  let sq = n * n;
  return sq;
};
console.log(getSquare(5));
