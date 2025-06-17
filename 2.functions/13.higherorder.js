//fun which is take another fun as arg or return any fun
function dowork(id, myfunref) {
  myfunref(id);
}
function printId(id) {
  console.log(id);
}
dowork(66, printId);
