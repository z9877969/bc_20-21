//? Що виведе код в консолі?
// setTimeout(function timeout() {
//   console.log('Таймаут'); // 4
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log('Створення проміса'); // 1
//   resolve();
// });

// p.then(function () {
//   console.log('Обробка проміса'); // 3
// });

// console.log('Кінець скрипта'); // 2

//

//? Що виведе код в консолі?
// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// const p = new Promise((res, rej) => {
//     setTimeout(() => {
//         resolve("Done!")
//     }, 0)
// })

// p.then((arg) => console.log(arg))

//? Послідовність виконання асинхронного коду в event loop
// setTimeout(() => {
//   let counter = 0;

//   for (let i = 0; i < 5e9; i += 1) {
//     counter += 1;
//   }

//   console.log('Hello from setTimeout');

//   console.log(counter);
// }, 0);

// Promise.resolve('Hello from then').then(str => {
//   let counter = 0;

//   for (let i = 0; i < 5e9; i += 1) {
//     counter += 1;
//   }

//   console.log(str);

//   console.log(counter);

//   document.body.innerHTML = '<h2>Hi</h2>';
// });

// document.body.innerHTML = '<h1>Hello</h1>';

// for (let i = 0; i < 1e4; i += 1) {
//   console.log(i);
// }

//? Лічильник

// for (let i = 0; i < 1e4; i += 1) {
//   document.body.innerHTML = `<h2>${i}</h2>`;
// }

// for(let i = 0; i < 1e4; i+=1 ){
//     setTimeout(() => {
//         document.body.innerHTML = i;
//     }, 0)
// }

// let i = 0;

// const count = () => {
//   do {
//     i += 1;
//     document.body.innerHTML = i; // 20
//   } while (i % 10 !== 0); // 0

//   if (i < 1e4) {
//     setTimeout(() => {
//       count();
//     }, 0);
//   }
// };

// count();
