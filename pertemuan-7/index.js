// kamis, 12 juni 2025
// 1

// REST DAN SPREAD OPERATOR
// rest dan spread memiliki sintaks yang sama (...), namun beda kegunaan

// rest operator

// tanpa rest parameter (tidak efisien kalau banyak parameter)
const func1 = (param1, param2, param3) => {
    console.log(param1, param2, param3);
};

func1(1, 2, 3); // output: 1 2 3
func1(1, 2, 3, 4, 5); // output: 1 2 3

// pakai rest parameter (efisien kalau banyak parameter, tipe data array, rest = sisa, harus di akhir)
const func2 = (...params) => {
    console.log(params);
};

func2(1, 2, 3); // output: [1, 2, 3]
func2(1, 2, 3, 4, 5); // output: [1, 2, 3, 4, 5]

const func3 = (param1, param2, ...params) => {
    console.log(...params);
};

func3(1, 2, 3, 4, 5); // output: 3 4 5

// spread operator (dipakai pada array dan object)
const numbers = [1, 2, 3, 4, 5];

console.log(numbers); // output: [1, 2, 3, 4, 5]
console.log(...numbers); // output: 1 2 3 4 5

// kegunaan spread operator:
// 1. array
// 1.1 duplikasi array
const numbers1 = [...numbers, 6, 7, 8];
console.log(numbers);
console.log(numbers1); // output menjadi 2 baris karena array panjang

// 1.2 menggabungkan array
const numbers2 = [1, 2, 3];
const numbers3 = [7, 8, 9];
const numbers4 = [10, 11, 12]

const combineNumbers = numbers2.concat(4, 5, 6, numbers3, numbers4); // concat krg efisien jika banyak array
console.log(combineNumbers);

const combineNumbers2 = [...numbers2, 4, 5, 6, ...numbers3, ...numbers4]; // lebih efisien
console.log(combineNumbers2);

// 2. object
// 2.1. duplikasi object
const john = {
    name: 'John',
    age: 30
};

const john1 = {...john, address: 'Airmadidi'};
console.log(john1);

// 2.2. menggabungkan object
const object = {a: 1, b: 2};
const object1 = {c: 3, d: 4};

const combineObjects = {...object, ...object1, e: 5, f: 6};
console.log(combineObjects);

// DESTRUCTURING ARRAY DAN OBJECT
// array
// tanpa destructuring es6 (tidak efisien, khususnya data yang terlalu banyak jajaja)
const numbers5 = [1, 2, 3, 4, 5];

// note penting: a, b, c, d, e adalah variabel yang bisa diubah nama, bisa diatur sendiri
// a = numbers5[0];
// b = numbers5[1];
// c = numbers5[2];
// d = numbers5[3];
// e = numbers5[4];

// console.log(a, b, c, d, e); // output: 1 2 3 4 5

// dengan destructuring es6 (lebih efisien)
// const [f, g, h, i, j] = numbers5;

// console.log(f, g, h,i, j); // output: 1 2 3 4 5

const [f, , h, , j] = numbers5;

console.log(f);
console.log(h);
console.log(j); // output: 1 3 5

// destructuring dengan rest operator
const [a, ...rest] = numbers5;

console.log(a); // output: 1
console.log(...rest); // output: 2 3 4 5
console.log(a, ...rest); // output: 1 2 3 4 5

// object
const john2 = {
    fullName: "John Doe",
    age: 30,
    status: "active",
    address: "Airmadidi"
};

// tanpa destructuring
// const fullName = john2.fullName;
// console.log(fullName); // output: John Doe

// dengan destructuring
const {fullName, age, address: alamat} = john2;
console.log(fullName, age, alamat); // output: John Doe 30 Airmadidi

// kegunaan
// versi 1
const sayGreetings = (obj) => { // obj berarti parameter yang akan dipanggil adalah object
    console.log(obj.fullName, obj.age, obj.address);
};

sayGreetings(john2);

// versi 2
const sayGreetings2 = ({fullName, age, address}) => { // bisa langusung destructuring di parameter
    console.log(fullName, age, address);
};

sayGreetings2(john2);
