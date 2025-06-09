// selasa, 3 juni 2025
// 1

console.log("Hello World");

// JAVASCRIPT VARIABLE
// let firstName = "John"; // camel case (js)
// let first_name = "John"; // snake case (python)
// let FirstName = "John"; // pascal case (database)

// const firstName = "John"; // const (constant) tidak bisa diubah nilainya

// firstName = "Jane"; // error, karena sudah dideklarasikan sebagai const
// let firstName; // error, karena belum diisi nilai

// tipe data
let fullName = "John Doe"; // string
let age = 30; // number (bilangan bulat, desimal)
let isMarried = false; // boolean (true/false)

console.log(age);

// JAVASCRIPT OPERATOR
let bil1 = 10;
let bil2 = 3;

// arithmetic operator
console.log(bil1 + bil2); // tambah
console.log(bil1 - bil2); // kurang
console.log(bil1 / bil2); // bagi
console.log(bil1 * bil2); // kali
console.log(bil1 % bil2); // modulus (sisa bagi)
console.log(bil1 ** bil2); // pangkat

// assignment operator "="
// let x = 10;
// x = x + 1; // bisa x++ atau x += 1
// console.log(x);

// string operator
let firstName = "John";
let lastName = "Doe";

console.log (firstName + " " + lastName);

// equality operator
let x = 10;
let y = "10";

console.log(x == y); // tidak cek tipe data (loose equality)
console.log(x === y); // cek tipe data (strict equality)
