var customer = {
  id: 343,
  name: "prabu",
  place: "tpt",
  // myfun: function () {
  //   this.id++;
  // },
};
var myfun = function () {
  this.id++;
};
console.log(customer.id);

// myfun(customer);
myfun.call(customer);
console.log(customer.id);
