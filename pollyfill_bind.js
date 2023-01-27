// polyfill of bind method is nothing but writing our bind function from scratch

let nameObj = {
  first_name: "Kousik",
  last_name: "Roy",
};

let pritnfullname = function (city) {
  console.log(
    this.first_name + " " + this.last_name + " " + "city is" + " " + city
  );
};

let printMyName = pritnfullname.bind(nameObj, "Kolkata");
printMyName();

// every method should have access to our mybind function so wee keep it in function.prototype
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1); //return array of all the arguments except first one so we use apply method
  return function (...args2) {
    // obj.call(args[0], params);
    obj.apply(args[0], [...params,...args2]);
  };
};

let printMyName2 = pritnfullname.myBind(nameObj);
printMyName2("Delhi");
