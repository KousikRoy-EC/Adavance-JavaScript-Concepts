// let a=30;

// {
//     let a=39;
//     console.log(a);
// }

// console.log(a);



const radius = [1, 2, 3, 4];
const calculateArea = function (radius) {
 const output = [];
 for (let i = 0; i < radius.length; i++) {
 output.push(Math.PI * radius[i] * radius[i]);
 }
 return output;
};
console.log(calculateArea(radius));