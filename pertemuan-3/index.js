// rabu, 4 juni 2025
// 1

// js function

// // 1. function declaration
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

// 2. function expression
// // version 1
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

// 3. iife (immediately invoked function expression) = self-executing anonymous function
// version 1
(function (fullName) { // anonymous function karena tidak ada nama fungsi
    console.log("Hello " + fullName) // version 1
    return "Hello " + fullName; // version 2
})("Iife");

// 4. callback function = a function passed as an argument to another function
function sayHello3(callback){
    callback()
};

// 2 cara taruh function sebagai argumen
// pertama
function hello() {
    console.log("Hello Callback");
};

sayHello3(hello);

// kedua
sayHello3(function () {
console.log("Hello Callback")
});

// note: serapi
