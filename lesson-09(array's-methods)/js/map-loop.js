"use strict";
/*
 *  Метод map()
 */

// масив.map((element, index, array) => {
//  Тіло колбек-функції
// });

//? Перемножте всі числа на 2
// const numbers = [1, 2, 3, 4, 5];

// const forEachNumbers = numbers.forEach((el) => {
//   return el * 2;
// });

// const ownMap = (arr, cb) => {
//   const total = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     total[1] = cb(arr[i], i, arr);
//   }

//   return total;
// };

// const doubleNumbers = numbers.map((el, index, array) => {
//   return el * 2;
// });

// console.log("numbers :>> ", numbers);
// console.log("doubleNumbers :>> ", doubleNumbers.length);
// console.log("forEachNumbers :>> ", forEachNumbers);

/*
? Перепишіть цикл через map
? Код нижче отримує з массива строк новий масив, який містить їх довжини:
*/

// const wordsArr = ["Есть", "жизнь", "на", "Марсе"];

// const getElementsLength = (arrOfStr) => {
//   const resultLengthArr = arrOfStr.map((el, index, arr) => {
//     return el.length;
//   });
//   return resultLengthArr;
// };

// console.log(getElementsLength(wordsArr)); // [4, 5, 2, 5]
// console.log(getElementsLength(["jhghjgjhg", "kjhkjhkjh", "hgjhg"]));

/*
? Створення масива значень Фаренгейта з масива значень Цельсія
? Для трансформаціії з Цельсій в Фаренгейти потрібна формула. F = C * 1.8 + 32
*/
// const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];
// const farenheits = celsius.map((el, index, arr) => el * 1.8 + 32);

// console.log("farenheits :>> ", farenheits);

/*
? Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.
*/
// const cars = [
//   // objRef1
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   // objRef2
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const modelList = cars.map((el, idx, arr) => el.model)

// console.log('modelList :>> ', modelList);

/*
? Нехай ф-я makeCarsWithDiscount(cars, discount) повертає масив об'єктів зі зміненим значенням властивості price
? в залежності від переданної знижки.
*/

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map((el, index, arr) => {
//     // el.price = el.price * (1 - discount);
//     // return el;
//     return {
//       ...el,
//       price: el.price * (1 - discount),
//     };
//   });
// };

// const newCars = makeCarsWithDiscount(cars, 0.2);

// console.log("cars :>> ", cars);
// console.log("newCars :>> ", newCars);
// console.log("cars === newCars :>> ", cars === newCars);
// console.log("cars === newCars :>> ", cars[0] === newCars[0]);
// console.table(makeCarsWithDiscount(cars, 0.4));
