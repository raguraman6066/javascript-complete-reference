var student = {};
student.name = "Hari";
student.id = 1;
student.mark = 80;
student.myfun = function () {
  if (this.mark > 50) {
    return "pass";
  } else {
    return "fail";
  }
};
console.log(student);
console.log(student["id"]);
console.log(student.myfun());
