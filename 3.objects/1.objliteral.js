//every physical thing is object
//properties and methods
let variable = {
  a: 10,
  myfun: function () {
    return this.a;
  },
};

console.log(variable);
console.log(variable.myfun());
