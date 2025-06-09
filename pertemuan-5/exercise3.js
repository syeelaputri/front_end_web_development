// selasa, 10 juni 2025
// exercise 3

// mengubah syntax es5 ke es6

// 1 (es5)
// function calculateAge(birthYear){
// 	return 2019 - birthYear;
// }

// function yearUntilRetirement(object){
// 	var age = calculateAge(object.year);
// 	var retirement = 60 - age;

// 	if(retirement > 0){
//     	console.log(object.firstName + ' retires in '+ retirement + ' years');
// 	} else {
//     	console.log(object.firstName + ' is already retired.');
// 	}
// }

// yearUntilRetirement({year: 1987, firstName: 'John'});

// 1 (es6)
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = (object) => {
    const age = calculateAge(object.year);
    const retirement = 60 - age;

	if (retirement > 0) {
		console.log(`${object.firstName} retires in ${retirement} years.`);
	} else {
		console.log(`${object.firstName} is already retired.`);
	}
};

yearUntilRetirement({year: 1987, firstName: 'John'});

// 2 (es5)
// const addNumber = (a, b, c, d, e, f, g) => {
//  	var numbers = [a, b, c, d, e, f, g];
//  	var sum = 0;
//     //Change to map function
//  	for(var i=0;i<numbers.length;i++){
//      		sum += numbers[i];
//  	}
//  	return sum;
//  }

// console.log(addNumber(1,2,3,4,5,6,7));

// 2 (es6)
const addNumber1 = (a, b, c, d, e, f, g) => {
    const numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    numbers.map(num => {
        sum += num;
    });
    return sum;
};

console.log(addNumber1(1,2,3,4,5,6,7));

// 3 (es5)
// var phi = 3.14;
// var power = 2;
// var radius = 0;

// var calculateArea = function (obj) {
//   return phi * Math.pow(obj.radius, obj.power);
// };

// radius = 21;
// var area21 = calculateArea({radius: radius, power: 2 });

// radius = 7;
// var area7 = calculateArea({radius: radius, power: 2 });

// console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);

// 3 (es6)
const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = function (obj) {
    return phi * Math.pow(obj.radius, obj.power);
};

radius = 21;
const area21 = calculateArea({radius: radius, power});

radius = 7;
const area7 = calculateArea({radius: radius, power})

console.log(`Area with 21 radius: ${area21} and area with 7 radius: ${area7}`)

// 4 (es5)
// const makeAjaxRequest = (url, method) => {
// if(!method){
//    	method = 'GET'
// }
// console.log(url, method);
// }

// makeAjaxRequest('www.google.com');

// 4 (es6)
const makeAjaxRequest = (url, method = 'GET') =>
    console.log(url, method)

makeAjaxRequest('www.google.com');
