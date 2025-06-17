let myinterval = setInterval(function () {
  console.log("im here");
}, 1000);
//setInterval(callback,millisecond)

setTimeout(() => {
  clearInterval(myinterval);
}, 10000);
//clear interval