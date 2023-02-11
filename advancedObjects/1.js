//Advanced Object Syntax

//Looping through objects
const obj = { a: 1, b: 2, c: 3 };
//Use for in
for (let key in obj) {
  console.log(`${key} ${obj[key]}`);
}
//Can use Object.keys() and Object.values()
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.table(obj); //prints object in table form
