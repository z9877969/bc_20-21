"use-strict";

/*
 * forEach() як заміна циклів for и for...of для масивів
 */

// const numbers = [1, 2, 3, 4, 5];

/*
? Виконайте рефакторинг кода використовуючи метод forEach та стрілочні функції.
*/

// const logItems = function (items) {
//   console.log(items);

//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Выполните рефакторинг кода используя метод forEach и стрелочные функции.
*/

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }

// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Выполните рефакторинг кода используя метод forEach и стрелочные функции.
*/

// function calсulateAverage(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
