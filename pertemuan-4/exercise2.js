// kamis, 5 juni 2025
// exercise 2

// array dan object

// array
let people = ["Greg", "Mary", "Devon", "James"];

// 1, for-loop to iterate
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
};

// 2, forEach() to iterate
people.forEach(function(item) { // "item" bisa diganti. ini hanya placeholder
    console.log(item)
});

// 3, remove "Greg"
people.shift();
console.log(people);

// people.splice(0, 1); // bisa pakai splice juga
// console.log(people);

// 4, remove "James"
people.pop();
console.log(people);

// people.splice(2, 3); // bisa pakai splice juga
// console.log(people);

// 5, add "Matt"
people.unshift("Matt");
console.log(people);

// people.splice(0, 0, "Matt"); // bisa pakai slice juga
// console.log(people);

// 6, add "Syeela"
people.push("Syeela");
console.log(people);

// people.splice(3, 0, "Syeela"); // bisa pakai splice juga
// console.log(people);

// 7, exit from the loop
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if (people[i] === "Mary") {
        break
    }
};

// 8, slice to copy
let copyPeople = people.slice(2, 4);
console.log(copyPeople);

// 9, remove and add elements
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

// 10, concat
let withBob = people.concat("Bob");
console.log(withBob);

// object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1, add "Go" to languages
programming.languages.push("Go");
console.log(programming.languages);

// 2, change difficulty to 7
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3, delete jokes
delete programming.jokes;
console.log(programming);

// 4, add "isFun" key
programming.isFun = true;
console.log(programming);

// 5, map() to iterate
let output = programming.languages.map(function(item, index) {
    return index + " - " + item;
});

console.log(output);
