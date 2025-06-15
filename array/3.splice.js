//splice(index_to_target,number_of_element_to_remove,add_element)
var prices = [1, 2, 3, 4];
prices.splice(1, 1); //remove 1st index element
console.log(prices);
prices.splice(3, 0, 5, 6); //add to specific item
console.log(prices);
prices.splice(1, 1, 33);
console.log(prices); //replace specific item
