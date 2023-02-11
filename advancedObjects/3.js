//Objects Advanced Syntax

const obj = {
  name: 'pavan',
  age: 20,
  gender: 'male'
};

//To create variables of object keys

// let name = obj.name;
// let age = obj.age;
// let gender = obj.gender;
// console.log(name); //pavan
// console.log(age); //20
// console.log(gender); //male

//Advanced Syntax

let { name, age, gender } = obj;
console.log(name); //pavan
console.log(age); //20
console.log(gender); //male
