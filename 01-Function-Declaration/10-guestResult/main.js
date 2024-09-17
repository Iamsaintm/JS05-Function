// บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
// console.log(sayHi); // *
// console.log(sayHi(10)); // **

// console.log(sayHi); // *
// ใส่ฟังก์ชันไม่ครบ ไม่แสดงค่าออกมา

// console.log(sayHi(10)); // **
// undefined เพราะไม่มีค่าที่ส่งออกมา แต่มี alert("Hi kid")
