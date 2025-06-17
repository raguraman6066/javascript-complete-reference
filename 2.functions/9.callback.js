//call once done it
function callback(id) {
  console.log("hello " + id);
}
function sayHello(id, myfunref) {
  console.log("hello world ", id);
  id++;
  myfunref(id);
}
sayHello(2, callback);
