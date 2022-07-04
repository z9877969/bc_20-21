'use strict';
/*
 * Синхронний vs Асинхронний JS
 */

console.log('Start');

// setTimeout(() => {
//   console.log('start loop');
//   let count = 0;

//   for (let i = 0; i <= 1000000000; i += 1) {
//     count += 1;
//   }

//   console.log('end loop', count);
//   //   alert('Hello!');
// }, 3000);

// console.log('Middle');

// setTimeout(() => {
//   console.log('3000');
// }, 3000);

// setTimeout(() => {
//   console.log('0');
// }, 0);
// console.log('End');

// setTimeout(() => {
//   console.log('1000');
// }, 1000);

// Стек виклику функцій

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// console.log(window.setTimeout());

// Очистка інтервалів и таймаутів clearInterval(intervalID), clearTimeout(timeoutID)

// let intervalId = null;

// setTimeout(() => {
//   console.log('Hello');
//   intervalId = setInterval(() => {
//     console.log('Hello');
//   }, 2000);

//   console.log('intervalId :>> ', intervalId);
// }, 5000);

// document.addEventListener('click', () => {
//   clearInterval(intervalId);
// });
