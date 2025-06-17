let todaydate = new Date();
console.log(todaydate);
console.log(todaydate.toLocaleDateString());
console.log(todaydate.toLocaleTimeString());
console.log(todaydate.getTime());
console.log(todaydate.getDate());
console.log(todaydate.getDay());
console.log(todaydate.getMonth() + 1);
console.log(todaydate.getFullYear());
console.log(todaydate.getHours());
console.log(todaydate.getMilliseconds());
console.log(todaydate.getSeconds());
//set datetime
var customdate = new Date();
customdate.setFullYear(1995);
customdate.setMonth(4);
customdate.setDate(19);
console.log(customdate.toLocaleDateString());
