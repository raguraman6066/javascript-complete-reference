//scope of variables
var b = 10; //global variable
let a = 20; //global variable
function myFunction() {
  var c = 30; //local variable
  let d = 40; //local variable
  if (c < d) {
    var e = 50; //local variable
    let f = 60; //block level
  }
  console.log(e);
  // console.log(f);//error
}
myFunction();
