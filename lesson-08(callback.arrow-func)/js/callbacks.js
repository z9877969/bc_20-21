"use strict";

/* 
    Колбеки, функції вищого порядку.
*/

// const foo = function (callback) {
//   // callback = greeting
//   callback("Bob"); // greeting()
// };

// const greeting = function (name) {
//   // name = undefined
//   console.log("Hello ", name);
// };

// greeting("Bill");

// foo(greeting);

// foo(function (name) {
//   console.log("Good bye ", name);
// });

/* 
    Запит на сервер
*/
// const fetchUser = async function (userUrl, callback) {
//   // userUrl = "z9877969"; "apleuha"
//   // callback = showInfoAboutUser | getUserAvatar
//   const response = await fetch(`https://api.github.com/users/${userUrl}`);
//   const result = await response.json();
//   callback(result); // showInfoAboutUser(result) | getUserAvatar(result)

//   //   console.log("result :>> ", result);
// };

// const showInfoAboutUser = function (user) {
//   // user = result
//   console.log(user); // result
// };

// const getUserAvatar = function (user) {
//   console.log(user.avatar_url);
// };

// fetchUser("z9877969", showInfoAboutUser); // pending
// fetchUser("z9877969", getUserAvatar);
// console.log(result);

/* 
    Реєстрація подій на сторінці
*/
// const userEmail = document.querySelector(".input-email");

// console.log(userEmail);

// const logValues = function () {
//   console.log("Hello");
// };

// userEmail.addEventListener("input", logValues);

/* 
    Напишіть ф-ю each(array, callback), яка першим параметром очікує масив, а другим ф-ю, яка 
    застосується для кожного елемента масива.
    Ф-я each повинна повернути новий масив елементами якого будуть результати виклику
    ф-ї callback.
*/

// const fn = function (el) {
//   return el * 2;
// };

// const each = function (array, callback) {
//   const totalArr = [];

//   //   const fn = function (el) {
//   //     return el * 2;
//   //   };

//   for (let i = 0; i < array.length; i += 1) {
//     // totalArr[i] = array[i] * 2;
//     totalArr[i] = callback(array[i]);
//   }

//   return totalArr;
// };

// const getArr = function () {
//   return [1, 2, 3, 4, 5, 6];
// };

// console.log(each(getArr(), fn));

// const arr = [1, 2, 3, 4, 5];

// const multi = function (el) {
//   return el * 2;
// };

// console.log(each(arr, multi));

// const add = function (el) {
//   return el + 2;
// };

// console.log(each(arr, add));

// const logElements = (el) => {
//   console.log(el);
// };

// each(arr, logElements);

// const numbers = [1, 2, , 4, 5];

/* 
    Напишіть наступні ф-ї:
    - createProduct(product, callback) - приймає обЇект товара без id, а також колбек. Ф-я створює 
    обʼєкт товара, додаючи йому унікальний ідентифікатор в властивість id та викликає колбек,
    передаючи йому створений об'єкт.
    - logProduct(product) - колбек який приймає об'єкт продукта та виводить його в консоль
    - logTotalPrice(product) - колбек який приймає об'єкт продукта та виводить в консоль 
    загальну вартість товара
*/

// const createProduct = function (product, callback) {
//   const newProduct = {
//     id: Date.now(),
//     ...product,
//   };
//   callback(newProduct); // console.log(newProduct)
// };

// const logProduct = function (product) {
//   console.log(product);
// };

// const logTotalPrice = function (product) {
//   const { quantity, price } = product;
//   const totalPrice = quantity * price;
//   console.log(totalPrice);
// };

// createProduct({ name: "apple", price: 30, quantity: 15 }, logProduct);
// createProduct({name: "apple", price: 30, quantity: 15}, logTotalPrice)
// createProduct({ name: "lemon", price: 35, quantity: 10 }, logProduct);
// createProduct({name: "lemon", price: 35, quantity: 10}, console.log)
// createProduct({name: "lemon", price: 35, quantity: 10}, logTotalPrice)

/* 
    Додайте об'єкту account методи withdraw(amount, onSuccess, onError) та 
    deposit(amount, onSuccess, onError)
    метод withdraw викликає:
     - onError(`Кількість не повинна перевищувати ${TRANSACTION_LIMIT}`), 
     якщо amount більше ніж TRANSACTION_LIMIT;
     - onError(`Кількість не може перевищувати баланс: ${this.balance}`), 
     якщо amount більше ніж this.balance;
     - інакше знімаем кошти з баланса та викликаєм onSuccess('Ваш баланс: ${this.balance}')

    метод deposite викликає:
     - onError(`Кількість не повинна перевищувати ${TRANSACTION_LIMIT}`), 
     якщо amount більше ніж TRANSACTION_LIMIT;
     - onError(`Кількість не може бути менше 0`), якщо amount менше або дорівнює нулю;
     - інакше додаєм кошти до баланса та викликаєм onSuccess('Ваш баланс: ${this.balance}')
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

// const handleSuccess = function (message) {
//   console.log("Success!! ", message);
// };

// const handleError = function (message) {
//   console.log("Error!! ", message);
// };

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);

// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);
