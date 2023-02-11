//Objects Advanced Syntax

const obj = {
  name: 'pavan',
  age: 20,
  gender: 'male'
};

// To use different variable names for same key name and if variable name already exists

let name = 'teja';
let { name: n, age, gender } = obj;

console.log(n, age, gender);
