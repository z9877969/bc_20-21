"use strict";
/*
 * Чисті та з побічними ефектами функції
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   const totalArr = [...numbers];
//   totalArr.push(...args);
//   return totalArr;
// };
// const pushNumbers = (...args) => [...numbers, ...args];

// const newArr = pushNumbers(9, 6, 8);

// console.log("numbers:>> ", numbers);
// console.log("newArr :>> ", newArr);

//? Clear function

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function
// const doubleMulti = (arr) => {
//   const total = [...arr];
//   for (let i = 0; i < total.length; i += 1) {
//     total[i] *= 2;
//   }
//   return total;
// };

// const doubleMultiArr = doubleMulti(numbers);

// console.log(numbers);
// console.log(doubleMultiArr);
