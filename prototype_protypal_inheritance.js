// In JavaScript, every object has a prototype, which is an object itself. 
// The prototype is used to define properties and methods that can be inherited by 
// objects that are created from it. This is known as prototypal inheritance.
// The prototype is an object that is linked to another object, called the 
// "prototype object." The prototype object, in turn, has its own prototype, 
// and so on, forming a chain of prototypes, also known as the "prototype chain."
// When an object is created, it has access to the properties and methods of its
//  prototype and all of the prototypes in its prototype chain. If an object does 
//  not have a property or method defined on it, JavaScript will look for it in the
//   object's prototype. If it is not found there, it will look in the prototype's 
//   prototype, and so on, until it is found or the end of the prototype chain is reached.
// JavaScript provides a special property called __proto__ which is used to access
//  the prototype of an object.
// The prototype property is used to add new properties and methods to all 
// objects that inherit from it. For example, if we add a new method to the 
// Array.prototype, all arrays will have access to that method.


Array.prototype.newMethod = function() {
  console.log("This is a new method");
}

let arr = [1, 2, 3];
arr.newMethod();

