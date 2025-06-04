// rabu, 4 juni 2025
// exercise 1

// menghitung bmi (body mass index)

// // iife
// let output = (function (weight, height) {
//     return "Your BMI is " + (weight/(height*height))
// })(50, 1.6);

// console.log(output);

// callback function
function calculateBMI(data) {
    let result = data(50, 1.6)
    return result
};

let output = calculateBMI(function (weight, height) {
    return "Your BMI is " + (weight / (height * height));
});

console.log(output);
