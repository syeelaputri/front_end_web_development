// jumat, 13 juni 2025
// 3

// notes: nama file tidak harus index
// index hanya nama lain untuk main/utama

// front-end
const fullName = "John Doe";

// back-end
// module.exports = {
//     fullName
// };

const numbers = [1, 2, 3, 4, 5];

const john = {
    fullName: "John Doe",
    age: 30
};

const sayGreetings = () => {
    console.log("Hello World!");
};

export {fullName, numbers as angka, john}; // bisa ganti nama "as" saat akan export, namun hanya bisa di 1 export saja
export default sayGreetings; // export default hanya bisa 1 kali. bisa juga export biasa
