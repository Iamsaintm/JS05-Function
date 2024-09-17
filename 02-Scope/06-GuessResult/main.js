// ผลลัพธ์ในบรรทัดที่มี \*, **, \*** และ \*\*\*\* มีค่าเป็นอะไรและเพราะอะไร

// ```js
// const sender = "Matt";

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, "Sarah"); // *
// sendTo(null); // **
// ```

// ```js
// const sender = "Matt";

// function sendTo(to, from = "CC") {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo("Max"); // ***
// sendTo("Ben", "Jay"); // ****
// ```

// *    From Matt to Sarah เพราะ from เป็น sender มีค่าเป็น Matt  to มีค่าเป็น Sarah
// **   From null to undefined เพราะ from มีค่าเป็น null to มีค่าเป็น undefined
// ***  From CC to Max from ไม่ได้กำหนดค่า จึงเป็นค่าเริ่มต้น คือ CC  to มีค่าเป็น Max
// **** From Jay to Ben from มีค่าเป็น Jay  to มีค่าเป็น Ben
