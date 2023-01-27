// Function currying is a technique in functional programming where a function is partially applied
// to some of its arguments, creating a new function with fewer arguments. This new function can then 
// be applied to the remaining arguments at a later time.


// 1. by using bind method

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

// by using closures

let addition = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let addByTwo = addition(2);
addByTwo(50);
