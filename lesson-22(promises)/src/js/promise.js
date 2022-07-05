'use strict';

/*
 * Промисы
 */

// console.log('Start');

// const fetchUser = cb => {
//   cb();
// };

// const asyncRequest = () => {};

// fetchUser(asyncRequest);

// console.log('End');

//? конструктор new Promise(callback(resolve, reject));

// const promise = new Promise((resolve, reject) => {
//   console.log('Promise');

//   setTimeout(() => {
//     const random = Math.random();

//     if (random < 0.5) {
//       resolve(['Done!', 'Bob', 'Nick']); // Done!
//     } else {
//       reject('Error'); // Error
//     }
//   }, 1500);
// });

// console.log(promise);
// console.log('Loader On');
// promise
//   .then(users => {
//     console.log(object); // new Error -> catch
//     return users.map((el, i) => {
//       return { id: i + 1, name: el };
//     });
//   }) // new-promise -> promiseResult = arrUserssWithId
//   .then(arrUsersWithId =>
//     console.log(JSON.stringify(arrUsersWithId, null, '\n'))
//   )
//   .catch(err => console.log(err))
//   .finally(() => {
//     console.log('Loader Off');
//   });

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?

// const promise = new Promise((resolve, reject) => {
//   resolve(1); // fullfield

//   console.log('after resolve');

//   setTimeout(() => {
//     console.log('setTimoute');
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде в консолі?

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // 1
//     return undefined;
//   })
//   .then(data => {
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // 2
//   });

// const fetchUser = () => {
//   //    ..........
//   //    ..........
//   //    ..........
//   //    ..........
//   return fetch('url'); // -> promise
// };

// fetchUser().then(data => console.log(data));

//? TASK 03
// Що буде в консолі?

// const promise = new Promise((resolve, reject) => {
//   //   reject('error');
//   resolve(0);
// });

// promise
//   .then(data => {
//     console.log(data); // 0
//   })
//   .then(data => {
//     a + 1;
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); //2
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });
