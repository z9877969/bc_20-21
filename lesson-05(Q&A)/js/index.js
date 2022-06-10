"use strict";

/* 
Функция принимает на вход массив или объект, подобный массиву. Функция возвращает массив, полученный 
из аргумента удалением триплов. Триплом будем считать элемент, которые повторяется 3 и более раз. 
*/

// const fnA = function () {
//   console.log(1 + 2);
// };

// const fnB = () => {}

// const a = fnA() // undefined
// fnA()

// const b = 6 + fnA() // NaN

// const a = 2;

// const fnB = function () {
//   // const a = 25;
//   function fnA() {
//     // const a = 5;
//     console.log(arguments);
//     console.log([]);
//     console.log("a :>> ", a);

//     if (true) {
//       const a = 0;
//     }
//   }
// };

// fnA(1, 2, 3);

// const fnA = function () {
//   console.log("fnA");
// };

// const fnB = function () {
//   console.log("fnB");
//   fnA();
// };

// console.log("some prev code"); // "some prev code"
// fnB(); // -> call fnA
// console.log("some next code");

// function fn(){
//   console.log("Hello fn");
//   fn();
// }

// console.log(false ** false); // 0 ** 0 -> 1 -> true
// fn();

// const factorial = function (n) {
//   let total = 1;
//   for (let i = 1; i <= n; i += 1) {
//     total *= i;
//   }
//   return total;
// };

// const factorial = function (n) {
//   if (n > 1) {
//     return n * factorial(n - 1);
//   }
//   return 1;
// };

// // factorial(3)

// console.log(factorial(10));

/* 
Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони 
присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в 
параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в 
обох вихідних масивах.
ТЕСТИ 
*/

Math.max(1, 25, 6); // 25

// const fn = function (str) {
//   const strArr = str.split(" ");
//   const lengthArr = [];
//   for (const verb of strArr) {
//     lengthArr.push(verb.length);
//   }
//   const max = Math.max(...lengthArr);
//   const indexofMax = lengthArr.indexOf(max);
//   const verb = strArr[indexofMax];
//   console.log("verb :>> ", verb);
// };

// const fn = function (str) {
//   const strArr = str.split(" ");
//   let ethaloneWord = strArr[0];
//   for (const word of strArr) {
//     if(word.length > ethaloneWord.length){
//       ethaloneWord = word;
//     }
//   }
//   return ethaloneWord;
// };

// function findLongestWord(string) {
//   let maxWord = "";

//   string.split(" ").forEach((word) => {
//     maxWord = word.length > maxWord.length ? word : maxWord;
//   });
//   return maxWord;
// }

// const fn = function (str) {
//   return str
//     .split(" ")
//     .map((el) => ({ str: el, length: el.length }))
//     .sort((a, b) => (a.length === b.length ? 0 : a.length > b.length ? 1 : -1))
//     .pop().str;
// };

// console.log(fn("DF mnbmnbnbb yruyr"));

// function includes(array, value) {
//   // Change code below this line
//   for (i = 0; i < array.lenght; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
