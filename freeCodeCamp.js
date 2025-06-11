// rabu, 11 juni 2025
// javascript algorithms and data structures

// notes
// cari dpe lesson, assignment operator = "="

// 1. comment your javascript code
// comment = to let know what the code does

// this is an in-line comment (hanya satu baris)
/* this is a multi-line comment
bisa di beberapa baris */

// 2. declare javascript variables
// 8 data types: undefined, null, boolean, string, symbol, bigint, number, object
// data is stored in variables
// var = declare a variable
// variables cannot have spaces or start with a number
// ; used to end statements

var ourName;
var myName;

// 3. storing values iwth the assignment operator
// a have a value of 7
var a;
a = 7;

// 4. assigning the value of one variable to another
var a;
a = 7;
var b;
b = 7;
b = a;

// 5. initializing variables with the assignment operator
var a = 9;

// 6. declare string variables
// string = characters in single or double quotes

var myFirstName = "Syeela";
var myLastName = "Putri";

// 7. understanding uninitialized variables
// uninitialized variable = variable that has been declared but not assigned a value
// hasilnya? undefined
var a;
a = 5
var b;
b = 10
var c;
c = "I am a"

a = a + 1;
b = b + 5;
c = c + " String!";

// 8. understanding case sensitivity in variables
// saran: gunakan camelCase untuk nama variable
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9. explore differences between the var and let keywords
var camper = "James";
var camper = "David";
console.log(camper); // output: david

let catName = "Oliver";
let catSound = "Meow!";
console.log(catName);
console.log(catSound);

// let camper = "James";
// let camper = "David";
// console.log(camper); // output: error, krn ada 2 camper

// 10. declare a read-only variable with the const keyword
// const = variable that cannot be reassigned
// use uppercase variable names for immutable values (tidak bisa diubah)
// use camelCase variable names for mutable values (bisa diubah) 

// const FAV_PET = "Cats";
// FAV_PET = "Dogs";
// console.log(FAV_PET); // output: error, krn FAV_PET tidak bisa diubah

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// 11. add two numbers with javascript
const sum = 10 + 10;

// 12. subtract one number from another with javascript
const difference = 45 - 33;

// 13. multiply two numbers with javascript
const product = 8 * 10;

// 14. divide one number by another with javascript
const quotient = 66 / 33;

// 15. increment a number with javascript
// i++ is the same as i = i + 1

let myVar = 87;
myVar++; // the same as myVar = myVar + 1

// 16. decrement a number with javascript
// i-- is the same as i = i - 1

let myVar2 = 11;
myVar2--; // the same as myVar2 = myVar2 - 1

// 17. create decimal numbers with javascript
// decimal numbers = floati
const ourDecimal = 5.7;
const myDecimal = 5.7;

// 18. multiply two decimals with javascript
const product2 = 2.0 * 2.5;

// 19. divide one decimal by another with javascript
const quotient2 = 4.4 / 2.0;

// 20. finding a remainder in javascript
// remainder = modulus operator = % = sisa bagi

const remainder = 11 % 3;

// 21. compound assignment with augmented addition
let myVar3 = 1;
myVar3 += 5;
console.log(myVar3); // output: 6

let d = 3;
let e = 17;
let f = 12;

d += 12;
e += 9;
f += 7;

// 22. compound assignment with augmented subtraction
let g = 11;
let h = 9;
let i = 3;

g -= 6;
h -= 15;
i -= 1;

// 23. compound assignment with augmented multiplication
let j = 5;
let k = 12;
let l = 4.6;

j *= 5;
k *= 3;
l *= 10;

// 24. compound assignment with augmented division
let m = 48;
let n = 108;
let o = 33;

m /= 12;
n /= 4;
o /= 11;

// 25. escaping literal quotes in strings
// use BACKLASH \ to ESCAPE end of string

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 26. quoting strings with single quotes
// single and double quotes work the same in js
// you can use single quotes inside double quotes and vice versa (without backslash)
// be consistent (use one type of quotes throughout your code)

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

// 27. escape sequences in strings
// \' single quote
// \" double quote
// \\ backslash
// \n newline
// \t tab
// \r carriage return
// \b backspace
// \f form feed

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

// 28. concatenating strings with plus operator
// + = concatenating (menggabungkan)

const myStr4 = "This is the start." + " This is the end.";

// 29. concatenating strings with the plus equals operator
let myStr5 = "This is the first sentence.";
myStr5 += " This is the second sentence.";

// 30. constructing strings with variables
// Only change code below this line
const myName2 = "Syeela";
const myStr6 = "My name is " + myName2 + " and I am well!";

// 31. appending variables to strings
const someAdjective = "awesome!";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

// 32. find the length of a string
// .length = return length of string, including spaces
let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

// 33. use bracket notation to find the first character in a string
// bracket notation = [] = get a character at specific index within strings
// index starts at 0
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

firstLetterOfLastName = lastName2[0];

// 34. understand string immutability
let myStr8 = "Bob";
myStr8[0] = "J"; // output: Bob, karena string tidak bisa diubah

let myStr9 = "Bob";
myStr9 = "Job"; // output: Job, karena string bisa diubah dengan assignment operator

let myStr10 = "Jello World";
myStr10 = "Hello World";

// 35. use bracket notation to find the nth character in a string
const lastName3 = "Lovelace";

const thirdLetterOfLastName = lastName3[2];

// 36. use bracket notation to find the last character in a string
const lastName4 = "Lovelace";

const lastLetterOfLastName = lastName4[lastName4.length - 1];

// 37. use bracket notation to find the nth-to-last character in a string
const lastName5 = "Lovelace";

const secondToLastLetterOfLastName = lastName5[lastName5.length - 2];

// 38. word blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "I saw a " + myAdjective + " " + myNoun + " " + myVerb + " to the park very " + myAdverb;

// 39. store multiple values in one variable using javascript arrays
// arrays are always accessed with bracket notation

const myArray = ["Blacky", 1];

// 40. nest one array within another array
// this is called multi-dimensional array
const myArray2 = [["Blacky", 1], ["Niggs", 2]];

// 41. access array data with indexes
const myArray3 = [50, 60, 70];
const myData = myArray3[0];

// 42. modify array data with indexes
// unlike strings, you ccan change the value in an array by using its index, even if it was declared with const
const myArray4 = [18, 64, 99];

myArray4[0] = 45

// 43. access multi-dimensional arrays with indexes
const myArray5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData2 = myArray5[2][1];

// 44. manipulate arrays with push method
// push() = add an item to the end of an array

const myArray6 = [["John", 23], ["cat", 2]];

myArray6.push(["dog", 3])

// 45. manipulate arrays with pop method
// pop() = remove the last item from an array and return it
const myArray7 = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray7.pop();

// 46. manipulate arrays with shift method
// shift() = remove the first item from an array and return it

const myArray8 = [["John", 23], ["dog", 3]];

const removedFromMyArray2 = myArray8.shift();

// 47. manipulate arrays with unshift method
const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();

myArray9.unshift(["Paul", 35]);

// 48. shopping list
const myList = [["silverqueen", 1], ["apel", 10], ["alpukat", 1], ["pisang", 1], ["mie cakalang", 1]];

// 49. write reusable javascript with functions
// function = reusable

function reusableFunction() {
  console.log("Hi World")
};

reusableFunction();

// 50. passing values to functions with arguments
// parameters = variables in functions definition
// arguments = values passed to the function when called
// but does parameter = argument? nope

function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

// 51. return a value from a function with return
// return = send a value back out of a function

function timesFive(a) {
  return a*5
};

timesFive(5);
timesFive(2);
timesFive(0);

// 52. global scope and functions
// scope = visibility of variables
// global scope = variables defined outside of a function (can be seen everywhere)
// global scope = variables declared without let, const
// that's why, always declare variables with let or const

const myGlobal = 10

function fun1() {
  oopsGlobal = 5
};

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 53. local scope and functions
// local scope = variables declared within a function (can only be seen inside the function)

// function myTest() {
//   const loc = "foo";
//   console.log(loc);
// }

// myTest();
// console.log(loc); // output: error, karena loc tidak bisa diakses di luar fungsi

function myLocalScope() {
  const myVar = "Hello World"

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);

// 54. global vs local scope in functions
// it's possible to have both local and global variables with the same name
// functinon will use the local variable if it exists

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater"

  return outerWear;
}

myOutfit();

// 55. understanding undefined value returned from a function
let sum2 = 0;

function addThree() {
  sum2 = sum2 + 3;
}

function addFive() {
  sum2 += 5
}

addThree(); // output: undefined, karena fungsi tidak mengembalikan nilai
addFive(); // output: undefined, karena fungsi tidak mengembalikan nilai

// 56. assignment with a returned value
// right of equal sign = resolved before the value is assigned

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

// 57. stand in line
// queue = items are kept in order
function nextInLine(arr, item) {
  arr.push(item)
  return arr.shift()
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// 58. understanding boolean values
// boolean = true or false (only these 2 values)
function welcomeToBooleans() {

  return true;

}

// 59. use conditional logic with if statements
// if statement = boolean conditions defined in parentheses
// true = inside if statement
// false = inside else statement/outside if statement

function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true"
  }
  return "No, that was false"

}

trueOrFalse(true)
trueOrFalse(false)

// 60. comparison with the equality operator
// ==  = equality operator (compares values and return true or false)
// = = assignment operator (assigns a value to a variable)
// == ignores data type

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// 61. comparison with the strict equality operator
// === = strict equality operator (compares values and data types)

3 ===  3  // true
3 === '3' // false

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
testStrict(7);
testStrict("7");

// 62. practice comparing different values
// typeof operator = returns the data type of a value

function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
compareEquality(20, "20");

// 63. comparison with the inequality operator
// != = inequality operator (compares values and return true or false)

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
testNotEqual(99);
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");

// 64. comparison with the strict inequality operator
// !== = strict inequality operator (compares values and data types)

3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
testStrictNotEqual(17);
testStrictNotEqual(12);
testStrictNotEqual("bob");

// 65. comparison with the greater than operator
// > = compares the values of two numbers
// if left > right, return true
// if left <= right, return false

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(0);
testGreaterThan(10);
testGreaterThan(11);
testGreaterThan(99);
testGreaterThan(100);
testGreaterThan(101);
testGreaterThan(150);

// 66. comparison with the greater than or equal to operator
// if left >= right, return true
// if left < right, return false

6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }

  if (val >= 10) {
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(0);
testGreaterOrEqual(9);
testGreaterOrEqual(10);
testGreaterOrEqual(11);
testGreaterOrEqual(19);
testGreaterOrEqual(100);
testGreaterOrEqual(21);

// 67. comparison with the less than operator
// if left < right, return true
// if left >= right, return false

2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

function testLessThan(val) {
  if (val < 25) {
    return "Under 25";
  }

  if (val < 55) {
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(0);
testLessThan(24);
testLessThan(25);
testLessThan(54);
testLessThan(55);
testLessThan(99);

// 68. comparison with the less than or equal to operator
// if left <= right, return true
// if left > right, return false

4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(0);
testLessOrEqual(11);
testLessOrEqual(12);
testLessOrEqual(23);
testLessOrEqual(24);
testLessOrEqual(25);
testLessOrEqual(55);

// 69. comparisons with the logical and operator
// && = logical and operator
// if both conditions are true, return true
// if one or both conditions are false, return false

function testLogicalAnd(val) {

  if (val >= 25 && val <= 50) {
      return "Yes";
    }

  return "No";
}

testLogicalAnd(0);
testLogicalAnd(24);
testLogicalAnd(25);
testLogicalAnd(30);
testLogicalAnd(50);
testLogicalAnd(51);
testLogicalAnd(75);
testLogicalAnd(80);

// 70. comparisons with the logical or operator
// || = logical or operator
// if one or both conditions are true, return true
// ifone or both conditions are false, return false

// difference between && and ||
// && = both conditions must be true
// || = one or both conditions must be true

function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(0);
testLogicalOr(9);
testLogicalOr(10);
testLogicalOr(15);
testLogicalOr(19);
testLogicalOr(20);
testLogicalOr(21);
testLogicalOr(25);

// 71. introducing else statements
// else = opposite of if

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else
    result = "5 or Smaller";

  return result;
}

testElse(4);

// 72. introducing else if statements
// else if (elif)= multiple conditions

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";
}}

testElseIf(7);

// 73. logical order in if else statements
// if else statements are executed in order (top to bottom)

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

// 74. chaining if else statements
function testSize(num) {
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return "Large"
  } else
    return "Huge"
}

testSize(7);

// 75. golf code
// par = average number of strokes a golder is expected to make in order to sink the ball the hole to complete the game
// your function will be passed par and strokes arguments
// par and strokes will always be numberic and positive

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!"
  } else if (strokes <= par -2) {
    return "Eagle"
  } else if (strokes === par - 1) {
    return "Birdie"
  } else if (strokes === par) {
    return "Par"
  } else if (strokes === par + 1) {
    return "Bogey"
  } else if (strokes === par + 2) {
    return "Double Bogey"
  } else {
    return "Go Home!"
  }
}

golfScore(5, 4);

// 76. selecting from many options with switch statements
// switch statement = match one value against many options
// will run the first option that matches the value until break statement is reached

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}

caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);

// 77. adding a default option in switch statements
// default statement = else = if no case matches the value

function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a":
      answer = "apple"
      break
    case "b":
      answer = "bird"
      break
    case "c":
      answer = "cat"
      break
    default:
      answer = "stuff"
      break
  }
  return answer;
}

switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
switchOfStuff(4);

// 78. multiple identical options in switch statements
// if you have multiple cases with the same output

function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low"
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid"
      break;
    case 7:
    case 8:
    case 9:
      answer = "High"
      break;
  }
  return answer;
}

sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);

// 79. replacing if else chains with switch
// use switch instead of of else if you have many conditions/options to check

function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break
    case 42:
      answer = "The Answer";
      break
    case 1:
      answer = "There is no #1";
      break
    case 99:
      answer = "Missed me by this much!";
      break
    case 7:
      answer = "Ate Nine";
      break
  }
  return answer;
}

chainToSwitch("bob");
chainToSwitch(42);
chainToSwitch(1);
chainToSwitch(99);
chainToSwitch(7);
chainToSwitch("John");
chainToSwitch(156);

// 80. returning boolean values from functions
// from this
// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }

// to this
// function isEqual(a, b) {
//   return a === b;
// }

function isLess(a, b) {
  return a < b
}

isLess(10, 15);
isLess(15, 10);

// 81. return early pattern for functions
function myFun() {
  console.log("Hello");
  return "World"; // after return, the function stops
  console.log("byebye") // so this line will never be executed
}
myFun();

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
abTest(-2,2); // output: undefined, karena a < 0
abTest(2,-2); // output: undefined, karena b < 0
abTest(2,8);
abTest(3,3);
abTest(0,0);

// 82. counting cards
// card counting = keep track of the relative numbers of high and low cards remaining in the deck
// more high cards = favors the player
// when count is positive, player should bet high
// when count is zero or negative, player should bet low

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// 83. build javascript objects
// object are similar to arrays
// but instead of using indexes to access data, you use properties
// you can also use numbers as properties, but it's not recommended
// if you have non-string properties, js will convert them to strings

const myDog = {
  name: "Hachi",
  legs: 4,
  tails: 1,
  friends: ["Blacky", "Niggs"],
};

// 84. accessing object properties with dot notation
// 2 ways access properties of an objek: dot notation and bracket notation

const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// 85. accessing object properties with bracket notation
// property name ust be in quotes

const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj2["an entree"];
const drinkValue = testObj2["the drink"];

// 86. accessing object properties with variables
// you can also use bracket notation to access properties

const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;
const player = testObj3[playerNumber];

// 87. updating object properties
const myDog2 = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog2.name = "Happy Coder";

// 88. add new properties to a javascript object
// you can use dot notation or bracket notation

const myDog3 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// these two are the same (both works)
myDog3.bark = "woof";
myDog3["bark"] = "woof";

// 89. delete properties from a javascript object
// keyword = delete

const myDog4 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog4.tails;

// 90. using objects for lookups
// objects = key/value storage, like a dictionary

function phoneticLookup(val) {
  let result = "";

  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  result = lookup[val]

  return result;
}

phoneticLookup("alpha");
phoneticLookup("bravo");
phoneticLookup("charlie");
phoneticLookup("delta");
phoneticLookup("echo");
phoneticLookup("foxtrot");
phoneticLookup("");

// 91. testing objects for properties
// .hasOwnProperty() = check if an object has a property
// it returns true or false

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  } else {
    return "Not Found"
  }
}

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")
checkObj({city: "Seattle"}, "city")
checkObj({city: "Seattle"}, "district")
checkObj({pet: "kitten", bed: "sleigh"}, "gift")

// 92. manipulating complex objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Benson Boone",
    "title": "Nights Like This",
    "release_year": 2022,
    "formats": [
      "CD",
      "8T",
      "LP"
    ]
  }
];

// 93. accessing nested objects
// sub-properties of objects can be accessed by chaining dot or bracket notation

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// 94. accessing nested arrays
// you can use dot or bracket notation

const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// 95. record collection
// record collection = stored musical album collection
// each album has a unique id as the property name
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else {
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [];
    }
    records[id]["tracks"].push(value);
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");

// 96. iterate with javascript while loops
// while
const myArray10 = [];

let i2 = 5
while (i2 >= 0) {
  myArray10.push(i)
  i--;
}

// 97. iterate with javascript for loops
// for
// declared with 3 optional expressions (separated by semicolons):
// 1. initialization (let i = 0), executed one before the loop starts
// 2. condition (i < 5), will continue as long as it's true, until false
// 3. final expression (i++), used to update (increement/decrement)

const myArray11 = [];

for (let i = 1; i <= 5; i++) {
  myArray11.push(i);
}

// 98. iterate odd numbers with a for loop
const myArray12 = [];

for (let i = 1; i <= 9; i += 2) {
  myArray12.push(i);
};

// 99. count backwards with a for loop
const myArray13 = [];

for (let i = 9; i >= 1; i -= 2) {
  myArray13.push(i);
};

// 100. iterate through an array with a for loop
const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// 101. nesting for loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// 102. iterate with javascript do...while loops
// Setup
const myArray14 = [];
let i3 = 10;

// Only change code below this line
do {
  myArray14.push(i3);
  i3++;
} while (i3 < 5);

// 103. replace loops using recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// 104. profile lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

// 105. generate random fractions with javascript
function randomFraction() {
  return Math.random();
}

// 106. generate random whole numbers with javascript
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// 107. generate random whole numbers within a range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// 108. use the parseInt function
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// 109. use the parseInt function with a radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// 110. use the conditional (ternary) operator
function checkEqual(a, b) {
  if (a === b) {
    return "Equal";
  } else {
    return "Not Equal";
  }
}

checkEqual(1, 2);

// 111. use multiple conditional (ternary) operators
function checkSign(num) {
  return num > 0 ? "positive" 
       : num < 0 ? "negative" 
       : "zero";
}

checkSign(10);

// 112. use recursion to create a countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// 113. use recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    return [startNum].concat(rangeOfNumbers(startNum + 1, endNum));
  }
}
