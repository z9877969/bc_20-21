'use strict';

/*
 * async/await
 * асинхронна(async) функція ЗАВЖДИ повератє проміс.
 * await заставляє функцію чекати виконання проміса.
 * await не можна використати поза асинхронними функціями.
 * try/catch для відлова помилок
 */

const fn = async username => {
  return `Hello ${username}`;
};

console.log(fn('Bill'));

fn('Bob').then(data => {
  console.log(data);
});

const BASE_URL = 'https://jsonplaceholder.typicode.com/use';

// const fetchPosts = async () => {
//   try {
//     const response = await fetch(BASE_URL); // pause!

//     console.log(response);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     const data = await response.json(); // pause!

//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

// fetchPosts()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//? TASK 01
// Перепеши на async/await

// const loadPosts = async url => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     // const posts = await response.json();

//     // console.log(posts);

//     return response.json(); // promise
//   } catch (error) {
//     throw error;
//   }
//   // return fetch(url).then(response => {
//   //   if (!response.ok) {
//   //     throw new Error(response.status);
//   //   }
//   //   return response.json();
//   // });
// };

// loadPosts('https://jsonplaceholder.typicode.com/posts')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async–функції?
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 1000)); // pause!
//   return 10; // promise result
// }

// function f() {
//   // ...що тут написать?
//   // щоб викликать wait() и дочекатись результат "10" від async–функції
//   // не забувайте, що тут не можна використовувати "await"
//   wait().then(data => console.log(data));
// }

// f();
