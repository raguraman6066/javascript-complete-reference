//each properties of obj

var student = {
  name: "demo",
  email: "demo@gmail.com",
  branch: "delhi",
};
console.log(student["name"]);
for (let prop in student) {
  console.log(`key: ${prop} value: ${student[prop]}`);
}
