// javascript object notation using in client and server communication
// json.parse - from json to obj
// json.stringify- from obj to json
var person = { id: 2, name: "student1", age: 30 };
console.log(person);
console.log(JSON.stringify(person)); //converted to json
var jsonperson = '{ "id": 2, "name": "student1", "age": 30 }';
console.log(JSON.parse(jsonperson)); //converted to js object
