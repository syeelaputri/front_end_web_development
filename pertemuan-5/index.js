// selasa, 10 juni 2025
// 1

// javascript es6

// string literal
const john = {
    name: "John Doe",
    age: 30,
};

// versi lama
let intro = "Hi, nama saya " + john.name + ". Umur saya " + john.age + " tahun.";
console.log(intro);

// versi baru
let intro2 = `Hi, nama saya ${john.name}. Umur saya ${john.age} tahun.`;
console.log(intro2);

let add = `Tahun depan, saya akan berumur ${john.age + 1} tahun.`;
console.log(add);

let add2 = `Tahun depan, saya ${john.age + 1 >= 17 ? 'bisa' : 'tidak bisa'} ikut pemilu.`;
console.log(add2);

// arrow function (mirip expression)
function greetings(name) {
    return `My name, ${name}`;
}
console.log(greetings("John Doe"));

// implicit return value (hanya satu baris)
const greetings2 = (name) => `Hi, my name is ${name}`;
console.log(greetings2("Bob"));

// arrow function pada fungsi callback
const array = [1, 2, 3, 4, 5];
let output = array.map ((item) => item);
console.log(output);

// default parameter
const greetings3 = (fullName = "John", age = 30) => // default parameter value
    `Hi, nama saya ${fullName}. Umur saya ${age} tahun.`;
console.log(greetings3());
console.log(greetings3("Bob", 25));
