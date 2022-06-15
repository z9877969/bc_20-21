"use strict";

/* 
    Стрілки, явне, не явне повернення, arguments, повернення об'екта
*/

// Два та більше парметрів
// const bar = (a, b, c) => {
//   return a + b + c;
// };

// Один параметр
// const foo = (param) => {
//   console.log(param);
// };

// Без парметрів

// const fn = () => {
//   console.log("Hello");
// };

// arguments
// const fn = (a, b, ...qwe) => {
//   console.log(qwe);
// };
// fn(1, 2, 3, 4, 5);

// Повернення об'єкта
// const sum = (a, b) => a + b;

// const createObj = (id) => ({
//   id,
// });

// console.log(sum(1, 2));
// console.log(createObj("hgfhgfhgfh"));

/* 
    Виконайте рефакторинг коду використовуючи стрілочні функції
*/

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// };

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: "🍎", price: 30, quantity: 3 }, (product) =>
//   console.log(product)
// );
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/* 
    Виконайте рефакторинг коду для завдання зі зміною баланса використовуючи стрілочні функції
*/

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   userName: "Bob",
//   balance: 400,

//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Кількість не повинна перевищувати ${TRANSACTION_LIMIT}`); // handleError(message)
//       return;
//     }
//     if (amount > this.balance) {
//       onError(`Кількість не може перевищувати баланс: ${this.balance}`); // handleError(message)
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Ваш баланс: ${this.balance}`);
//   },

//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Кількість не повинна перевищувати ${TRANSACTION_LIMIT}`);
//       return;
//     }
//     if (amount <= 0) {
//       onError(`Кількість не може бути менше 0`);
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Ваш баланс: ${this.balance}`);
//   },
// };

// const handleSuccess = (message) => console.log("Success!! ", message);
// const handleError = (message) => console.log("Error!! ", message);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// const mult = (value) => value * 2;
// const add = (value) => value + 10;
// const toCeil = (value) => Math.ceil(value);

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value + 10));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
