var student = {
  id: 2,
  name: "Phone",
};
function getmark(s1, s2, s3) {
  console.log("mark ", s1 + s2 + s3);
  console.log("student name ", this.name);
}
getmark.apply(student, [81, 56, 78]);
