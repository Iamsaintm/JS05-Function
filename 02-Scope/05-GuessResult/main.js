// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// let message = "Welcome to Thailand";

// function logMessage(message) {
//   message = "Hello everybody";
//   console.log(message); // *
// }

// logMessage(message);
// console.log(message); // **
// ```

// ```js
let name = "John";

function sayHi(input) {
  console.log(name); // ***
  name = input;
}

sayHi();
console.log(name); // ****
// ```

// *     Hello everybody เพราะมีการแทนค่าใน message
// **    Welcome to Thailand เพราะเป็นการเรียกใช้ message จาก Global
// ***   John เพราะเป็นการกำหนดค่าตั้งแต่แรก
// ****  undefined เพราะไม่ได้ return ค่าออกมา
