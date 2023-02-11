//Object destructuring

function abc() {
  return 'abc';
}
function def() {
  return 'def';
}

//Ecporting Functions in Objects

const fun = {
  abc: abc,
  def: def
};
console.log(fun.abc());
console.log(fun.def());
//if key and value are equal then we can use one name
const funs = {
  abc,
  def
};
console.log(funs.abc());
console.log(funs.def());
