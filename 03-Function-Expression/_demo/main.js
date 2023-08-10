console.log("anonymous");

// #1 : Named fn, FN Declaration
// Function add() {}

// #2A : Anonymous

// IIFE : Intermediate Invoke Function Expression
// (function (x, y) {
//   console.log(x + y);
// })(10, 5);

// console.log(
//   (function (x, y) {
//     return x + y;
//   })(8, 5)
// );

// let a = (function (x, y) {
//   return x + y;
// })(10, 7);
// console.log(a);

// #2B

// // VARIABLE = EXPRESSION
// let myVar = ((5 * 2 * 20) / 2) % 7;

// //VARIABLE =FN (FN == EXPRESSION) // ประกาศก่อนเรียนใช้

// // ASSIGN anonymous FN to variable
// const myFunc = function (x, y) {
//   return x + y;
// };

// console.log(myFunc(5, 10));

// // ASSIGN named FN to variable
// const a = console.log;
// a("hi");

// ### ANONYM (MODERN : ARROW SYNTAX)

let z = function (x) {
  return x ** 2;
};

// A: Shortest
let a = (x) => x + 2;
let b = (x, y) => x * y;

// B: Bracket
let c = (x, y) => {
  let result = x * y;
  return result;
};

console.log(z(3));
console.log(a(3));
console.log(b(4, 5));
console.log(c(4, 5));
