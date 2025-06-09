// kamis, 5 juni 2025
// 1

// array dan object

// deklarasi array
// cara 1
let numbers = [1, 2, 3, 4, 5];

// cara 2
let numbers2 = new Array(1, 2, 3, 4, 5);

// bisa pilih cara 1 atau 2. sama saja.

// tipe data array
let numbers3 = [1, 2, 3, 4, 5]; // numbers
let students = ["John", "Jane", "Bob"]; // strings
let john = ["John", 30, true, [80, 90, 100]]; // mixed (ada array lagi juga boleh)

console.log(numbers3);
console.log(students);
console.log(john);

// akses elemen array
console.log(students[1]);
console.log(john[3]);
console.log(john[3][1]); // akses elemen dalam array

john[1] = 31; // update data bisa
console.log(john);

console.log(students.length); // panjang array
console.log(students[students.length - 1]); // data terakhir

// array method
let array = [1, 2, 3, "halo", false, true, [1, 2, 3]];
console.log(array.toString()) // ubah data ke string
console.log(array.join(" - ")) // ubah penghubung menjadi "-"

array.pop() // hapus data di akhir
console.log(array)

array.push("data akhir") // tambah data di akhir
console.log(array);

array.shift() // hapus data di awal
console.log(array);

array.unshift("data awal") // tambah data di awal
console.log(array);

array.splice(3, 0, 4, 5) // tambah data di tengah [mulai, hapus, tambah data]
console.log(array);

array.splice(3, 4, 4, 5) // hapus data di tengah [mulai, hapus, tambah data]
console.log(array);

let arrayNumbers = array.slice(1, 5); // ambil data dan pindahkan ke array baru [mulai, akhir + 1]
console.log(arrayNumbers);

let numbers5 = [1, 2, 3, 4, 5];
let numbers6 = [6, 7, 8, 9, 10];
let joinNumbers = numbers5.concat(numbers6); // gabung 2 array
console.log(joinNumbers);

// object
let doe = { // di dalam objek bisa ada berbagai tipe data, termasuk objek dan fungsi
    fullName: "John Doe",
    age: 20,
    isStudent: true,
    grade: [91, 93, 95],
    address: {
        street: "Jl. Arnold Mononutu",
        city: "Manado",
        postalCode: "95371"
    },
    sayGreetings: function() {
        console.log("Hello");
    }
};

console.log(doe);

// akses elemen dalam objek
// cara 1 (dot notation)
console.log(doe.fullName);

// cara 2 (bracket notation)
console.log(doe["fullName"]);

// cara 1 dan 2 sama. prefer yang mana ja.

// john.status = "active"; // tambah data baru

console.log(doe.address.city);

console.log(doe.function)

delete john.grade;
console.log(john);

// array dengan objek sebagai elemen
let students1 = [
    {
        id: 1,
        name: "John",
        status: "active",
    },
    {
        id: 2,
        name: "Jane",
        status: "inactive",
    },
    {
        id: 3,
        name: "Bob",
        status: "active",
    }
];

console.log(students1);

// looping
// cara 1 (for)
for (let i = 0; i < students1.length; i++) {
    console.log(students1[i].name)
}

// cara 2 (built-in method array) -recommended
students1.forEach(function(item) {
    console.log(item.name);
});

// cara 3 (map) -recommended juga
let output = students1.map(function(item) {
    return item.name;
});

console.log(output);

// berhubungan dengan exercise2
students.forEach(function(item, index) {
    console.log(index, item);
});
