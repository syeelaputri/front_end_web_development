// jumat, 13 juni 2025
// 1

// MODULE IN JS
// isolasi kode dari suatu file ke dalam sebuah file terpisah

// node = backend (export dan require)
// browser = frontend (export dan import)

// front-end
import { fullName, angka, john as object } from "./data.js"; // bisa juga ganti nama "as" saat import, namun hanya bisa di 1 import saja
import sayGreetings from "./data.js"; // contoh import default, tidak pakai kurung kurawal. bisa juga import biasa

console.log(fullName, angka, object);
sayGreetings();

// back-end
// const fullName = require("data./data");

// ASYNCHRONUS JS

// antonimnya, synchronous
// synchronous = single thread (satu proses) = blocking = eksekusi perintah satu per satu

// contoh synchronous
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

// asyncronous = multi thread (banyak proses) = non-blocking = eksekusi perintah secara bersamaan

// tipe asynchronous
// 1. pararel (jalan bersamaan)
// namun kurang cocok untuk dipakai di front-end (browser)
// mulai bersamaan

// console.log("Proses 1");
// setTimeout(() => console.log("Proses 2"), 5000); // dalam ms (miliseconds)
// console.log("Proses 3");
// setTimeout(() => console.log("Proses 4"), 3000); // 3000 ms = 3 detik
// console.log("Syeela tes")
// setTimeout(() => sayGreetings(), 1000); // bisa juga panggil function

// 2. concurrent (berurutan tapi saling menunggu)
// cocok untuk dipakai di front-end (browser)
// mulai satu per satu

// versi es5
// setTimeout(() => {
//     console.log("Proses 1");
//     setTimeout(() => {
//         console.log("Proses 2");
//         setTimeout(() => {
//             console.log("Proses 3");
//             setTimeout(() => {
//                 console.log("Proses 4");
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }, 2000);

// versi es6
// analogi promise: pending, fulfilled, rejected

let condition = true;
let newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Promise Berhasil");
  } else {
    reject(" Promise Gagal");
  }
});

// cara pakai promise
// 1. then - catch
// newPromise.then((result) => console.log(result)); // then = resolve = berhasil
// newPromise.catch((error) => console.log(error)); // catch = reject = gagal

newPromise
  .then((result) => {
    console.log("Proses 1");
    return result;
  }) // jika berhasil
  .then((result2) => {
    console.log("Proses 2");
    console.log(result2);
    return result2;
  }) // jika berhasil
  .catch((error) => {
    console.log(error); // jika gagal
  });

// 2. async - await
const getData = async () => {
  // tambah async supaya tahu ini function asynchronous
  const result = await newPromise; // await karena harus tunggu promise selesai
  console.log(result);
};

getData(); // panggil function async

// dari https://jsonplaceholder.typicode.com/
// versi then - catch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// versi async - await
const getDataJSONPlaceholder = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json(); // kalau tidak pakai "await" maka akan pending
  console.log(json);
};

getDataJSONPlaceholder();

// 3. axios
// library untuk fetch data dari API, mirip promise
