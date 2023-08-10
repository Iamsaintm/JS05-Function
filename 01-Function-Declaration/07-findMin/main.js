// - ให้สร้างฟังก์ชัน max ซึ่งจะคืนค่าพารามิเตอร์ที่มีค่ามากที่สุด
// - พารามิเตอร์มีได้มากสุด 4 ตัว
// - หากใน argument ของฟังก์ชันมีค่าที่ไม่ใช่ตัวเลข ให้คืนค่าเป็น NaN
// - เมื่อเรียกใช้งานฟังก์ชันต้องได้ผลลัพธ์ ดังนี้

// ```js
// max(); // undefined
// max(2); // 2
// max(3, 1); // 3
// max(7, 3, 9, 2); // 9
// ```

function max(m = "", n = "", o = "", p = "") {
  if (m == "") {
    return (vmax = undefined);
  } else {
    vmax = m;
  }
  if (n == "") {
    return vmax;
  }
  if (n > vmax) {
    vmax = n;
  }
  if (o == "") {
    return vmax;
  }
  if (o > vmax) {
    vmax = o;
  }
  if (p == "") {
    return vmax;
  }
  if (p > vmax) {
    vmax = p;
  }
  return vmax;
}
console.log(max(2, 3, 1, 4));
