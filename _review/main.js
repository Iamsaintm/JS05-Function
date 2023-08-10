/*
### การเขียนฟังก์ชันมี 2 แบบหลัก ๆ

1. Function Declaration / Named Function
2. Function Expression / มักจะถูกเขียนในรูปของ Anonymous Function
*/

/*
- การใช้งานฟังก์ชันต้อง
1. ประกาศฟังก์ชัน => กำหนดชื่อ, input
2. เรียกใช้งาน
*/
// Define
function sayHi(name, lastname) {
  console.log(`Hello ${name} ${lastname}`);
}

// 2 Call
sayHi("John", "Doe");
sayHi("Saint", "Lee");

// RETURN VALUE ผลลัพธ์ที่ได้จากการ run function จนเสร็จ
// add(5, 6) == RETURN Value, FN Result

function add(x, y) {
  // 0 sec.
  let result = x + y;

  // 5 sec.
  return result;
}

console.log(11 === add(5, 6)); // DONE : add(5, 6) === result done

let r = add(5, 6); //เก็บค่าไว้ได้ สามารถเอามาใช้ใหม่โดยไม่ต้องคิดใหม่อีกครั้ง
console.log(add(5, 6)); // one time use ใช้ 1 ครั้งคิดใหม่ 1 ครั้ง

function isEven(n) {
  //   if (n % 2 == 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   if (n % 2 == 0) {
  //     return true;
  //   }
  //   return false;
  //   return n % 2 == 0;
  //   retuen <expression>
}

console.log(isEven(5));

// CheckPoint
// - Declare : ประกาศเป็น
// - Params : รับ Input
// - Return : เข้าใจเรื่อง Return // ไม่ใส่จะได้ค่าเป็น undefined
// - Call : รับฟังก์ชัน

// ### FN EXPRESSION

let a = 5 * 2 + 7;
// FORMAT : variable = expression
/*
expression : อะไรก็ได้ที่คอมตอบกลับมาได้
- single value : 7
- combine expression : 7 + 2
- FN result : add(7,2)
*/

let myFunc = add;
// FORMAT : variable = FN (FN Expression)
// FN Expression : การ assign FN ให้กับ variable

console.log(myFunc(5, 2));

//  Anonymous FN

// SYNTAX : FN EXPRESSION
// อธิบาย : กำลัง assign Anonymous fn ให้กับตัวแปร sayHello
const sayHello = function (name) {
  console.log("Hi" + name);
};

sayHello("Expression");

// 1.  function add() {}
// 2A. let add = function () {}
// 2B. let add = () => {}

const minus = (a, b) => {
  return a - b;
};
const minusTwo = (a) => a - 2;
