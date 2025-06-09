// rabu, 4 juni 2025
// 1

// 4 JAVASCRIPT FUNCTION
// declaration (fungsi berdiri sendiri)
// version 1
// function sayHello(fullName){
//     console.log("Hello " + fullName)
// };

// sayHello("John");

// version 2
function sayHello(fullName){
    return "Hello " + fullName
};

let output = sayHello("John"); // call/invoke
console.log(output);

// expression (fungsi disimpan dalam variabel)
// version 1
// let sayHello2 = function(fullName) {
//     console.log("Hello " + fullName)
// };

// sayHello2("Bob");

// version 2
let sayHello2 = function(fullName) {
    return "Hello " + fullName;
};

let output2 = sayHello2("Bob"); // call/invoke
console.log(output2);

// iife (immediately invoked function expression) (fungsi anonim yang dapat langsung dijalankan)
// version 1
// (function (fullName) { // anonymous function
//     console.log("Hello " + fullName)
// })("IIFE");

// version 2
let output3 = (function (fullName) {
    return "Hello " + fullName
})("IIFE 1");

console.log(output3);

// callback function (fungsi yang dikirim sebagai argumen ke fungsi lain)
// version 1
// function sayHello3(callback){
//     callback()
// };

// function hello() {
//     console.log("Hello Callback");
// };

// sayHello3(hello);

// version 2
function sayHello3(callback) {
  let result = callback("Callback 1");
  return result;
}

let output4 = sayHello3(function (fullName) {
  return "Hello " + fullName;
});

console.log(output4);
