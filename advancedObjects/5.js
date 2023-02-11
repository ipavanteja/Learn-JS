// Function Default arguments

function fun(a, b, c) {
  return a + b + c;
}
console.log(fun(1, 2, 3)); //6

//If insufficient parameters

console.log(fun(1, 2)); //NaN

//To overcome this we can give default paramentrs

function fun2(a, b, c = 10) {
  return a + b + c;
}
console.log(fun2(1, 2)); //13
