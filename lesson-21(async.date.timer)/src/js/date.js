'use strict';
// Створення новой дати

// const date = new Date(2022, 6, 4, 12, 12, 12);
// const date = new Date('2022/03/13 12:12:31');

// Методи дати get,set

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());

// date.setFullYear(2021);
// date.setMonth(5);
// date.setDate(21);

// console.log(date);

//? TASK 01
// Створіть об'єкт Date для даты: 20 лютого 2012 года, 3 години 12 хвилин. Часова зона – місцева.

// const date = new Date("2012-02-20 3:12");
// const year = 2012;
// const date = new Date(year, 1, 20, 3, 12);

// console.log(date);

//? TASK 02
// Напишіть функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   const newDate = new Date(date);
//   const day = newDate.getDay();
//   return days[day];
// };

// const date = new Date("2022");
// console.log(getWeekDay(date));
// console.log(date);

//? TASK 03
// Напишіть функцію getLastDayOfMonth(year, month), яка повертає останнє число місяця.
// Інколи це 30, 31 або навіть лютневі 28/29.
// Параметри:
// year – рік з четирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const date = new Date(2022, -1, -1); // "2021-11-29"
// const date = new Date(2022, -1, 35); // "2022-01-04"

// console.log(date);
// console.log(date.getMonth());

// const getLastDayOfMonth = (year, month) => {
//     const date = new Date(year, (month - 1) + 1, 0);

//     return date.getDate()
// }

// console.log(getLastDayOfMonth(2022, 4));

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає к-сть секунд до завтрашньої дати.

// const getSecondsToTomorrow = () => {
//   const now = new Date();
//   const tomorrow = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1
//   );

//   const diff = tomorrow - now;

// //   console.log('now :>> ', now);
// //   console.log('tomorrow :>> ', tomorrow);
// //   console.log('diff :>> ', diff / 1000 / 60 / 60 / 24);
//   console.log('diff :>> ', diff / 1000);
// };

// setInterval(() => {
//   getSecondsToTomorrow();
// }, 1000);
