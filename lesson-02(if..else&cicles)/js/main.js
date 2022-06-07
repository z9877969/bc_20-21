"use strict";

// Розгалуження if

// if (умова) {
//     // тіло if
//   }

// if (true) {
//   console.log("true");
// }
// const a = 5

// if (a === 4) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// const a = 4

// if( a > 5 ) {
//   console.log("a > 5");
// } else if (a < 5) {
//   console.log("a < 5");
// }

/**
 - Дана строка яка складається з символів "qwerty"
 - Перевірте що першим символом є буква "q". 
 - Якщо це так, то виведіть - Так, якщо ні, то виведіть Ні
*/

// const str = "qwerty";
// if (str[0] === "q") {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

/*
 - Запрсоти у користувача число
 - Якщо число дорівнює 10, то вивести "Вірно"
 - Інакше - вивести "Не вірно"
*/
// const num = Number(prompt("Input num"));

// if (num === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Не вірно");
// }

/*
 - В змінній min знаходиться число від 0 до 59
 - Визначте в яку четверть години входить дане число(I, II, III, IV)
 - [0-14] -> I-четверть
 - (14-29] -> II-четверть
 - (29-44] -> III-четверть
 - (44-59] -> IV-четверть
*/
// const num = Number(prompt("Input num from 0 to 59"));
// if (num >= 0 && num <= 14) {
//   console.log("I-четверть");
// } else if (num > 14 && num <= 29) {
//   console.log("II-четверть");
// } else if (num > 29 && num <= 44) {
//   console.log("III-четверть");
// } else {
//   console.log("IV-четверть");
// }

/*
 - Напишіть код який буде запитувати "Яка "офіційнa" назву JavaScript?"
 - Якщо користувач вводить ECMAScript, то показать "Вірно"
 - Інакше показать "Не знаєте? ECMAScript"
*/
// const input = prompt('Яка "офіційнa" назвa JavaScript?').toLowerCase();
// if (input === "ECMAScript".toLowerCase()) {
//   console.log("Вірно");
// } else {
//   console.log("Не знаєте? ECMAScript");
// }

/*
 - Напишіть код, який буде запитувати у користувача "Введіть число", а потім виводить в консоль:
    1 - якщо більше нуля
    -1 - якщо менше нуля
    0 - якщо дорівнює нулю
    користувач вводить тільки числа
*/
// const inputNum = Number(prompt("Введіть число"));
// if (inputNum > 0) {
//   console.log(1);
// } else if (inputNum < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }

/*
    switch/case
*/

/*
    switch (змінна) {
      case значення:
        інструкції;
        break;
          
      case значення:
        інструкції;
        break;
          
      default:
        інструкції;
    }
*/

// const str = "qwe654";

// switch (str) {
//   case "qwe":
//     console.log("qwe");
//     break;
//   default:
//     console.log("Значення не вірне");
// }

/*
 - Напишіть код який буде описувати роботу світлофора
 - Якщо в значення приходить "red" - покажіть "Зараз горить червоний"
 - Якщо в значення приходить "orange" - покажіть "Зараз горить жовтий"
 - Якщо в значення приходить "green" - покажіть "Зараз горить зелений"
 - Інакше покажіть "Перехрестя не ругульоване"
*/
// const color = "green";
// switch (color) {
//   case "red":
//     console.log("Зараз горить червоний");
//     break;
//   case "orange":
//     console.log("Зараз горить жовтий");
//     break;
//   case "green":
//     console.log("Зараз горить зелений");
//     break;
//   default:
//     console.log("Перехрестя не ругульоване");
// }

/*
 - Тернарний оператор
*/

/*
    ?
    :
*/

// const a = 1 > 3 ? "a" : "Not found";
// console.log("a :>> ", a);

// Приклад

/*
 - Перепишіть код з if..else за допомогою тернарного оператора
*/

// const num = Number(prompt("Input num"));

// if (num === 10) {
//   console.log("Вірно");
// } else {
//   console.log("Не вірно");
// }

// num === 10 ? console.log("Вірно") : console.log("Не вірно");

// const newNum = num > 0 ? num : 0

// console.log(newNum);
// let newNum;

// if (num > 0) {
//   newNum = num;
// } else {
//   newNum = 0;
// }
// const newNum = num > 0 ? num : 0

// console.log(newNum);

/*
 - Перепишіть код з if..else if за допомогою тернарного оператора
*/
// const inputNum = Number(prompt("Введіть число"));
// if (inputNum > 0) {
//   console.log(1);
// } else if (inputNum < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }
// inputNum > 10
//   ? console.log(">10")
//   : inputNum < 0
//   ? console.log("<0")
//   : inputNum === 0
//   ? console.log(0)
//   : console.log(">0 && <10");

/*
    Область видимості
*/

// const a = 0;

// if (true) {
//   const localA = "a"
//   console.log(a); // a

//   const b = "b"
// }

// console.log(b);
