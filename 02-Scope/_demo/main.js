// {
//   // GLOBAL - SCOPE

//   let message = "Hi";
//   function sayHi() {
//     // Function SCOPE
//     let message = "Hello";
//     console.log(`## ${message}`);
//   }

//   sayHi();
//   console.log(message);
// }

// variable : message = identifier
// let message = "h";
// // let message = "a"; // ไม่ได้
// message = "a"; // ได้

// const NUM = 5;
// // const NUM = 5 // ไม่ได้

// var a = 1;
// var a = 2;

// // function : sayHi == identifier
// function satHi(m) {
//   let message = "a";
//   console.log(m);
// }

// let vvv = "tot";

// {
//   let vvv = "oto"; // ถ้ามีสนใจข้างในก่อน
//   console.log(vvv); // ถ้าไม่มีดูตามข้างนอก
// }

// console.log(vvv); // สนใจค่าข้างนอก ไม่สนข้างใน

// Global
let message = "GB:Welcome";
function sayHi(user) {
  // Function SCOPE
  //   let message = "welcome";
  if (user == "admin") {
    // Block-IF
    // let message = "WELCOME";
    console.log(message + "admin");
  } else {
    // Block-ELSE
    console.log(message + "guest");
  }
}
sayHi("ad");
