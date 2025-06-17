// selasa, 17 juni 2025
// exercise 5

// es6

// 1. promise
const helloWorld = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!"); // kalau berhasil, run ini
    }, 2000);
  });
};

const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};

messages();

// 2. fetch
// const ambilDataUser= () => {
//   fetch("https://reqres.in/api/users") // fetch mengembalikan promise
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (users) {
//       // loop
//       users.data.forEach((user) => {
//         console.log(user.first_name, user.last_name); // apa yang ingin ditampilkan?
//       });
//     });
// }

// ambilDataUser();

// 3. async - await
const ambilDataUser = async () => {
  const output = await fetch("https://reqres.in/api/users");
  const json = await output.json();
  // loop
  json.data.forEach((user) => {
    console.log(user.first_name, user.last_name); // apa yang ingin ditampilkan?
  });
};

ambilDataUser();
