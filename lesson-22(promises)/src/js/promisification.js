'use strict';
// https://api.github.com/users/z9877969

// function myAsyncFunction(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.addEventListener('load', () => {
//       resolve(xhr.responseText);
//     });

//     xhr.addEventListener('error', () => {
//       reject(xhr.statusText);
//     });

//     xhr.open('GET', url);

//     xhr.send();
//   });
// }

// myAsyncFunction('https://api.github.com/users/z9877969')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(console.log);

//? Запит за користувачем на колбеках
const fetchUserByName = (name, onSuccess, onError) => {
  console.log('Робимо запит на сервер...');

  setTimeout(() => {
    const isDone = Math.random();

    if (isDone > 0.5) {
      const user = {
        firstName: name,
        lastName: 'Francis',
        age: 30,
      };

      onSuccess(user);
    } else {
      onError("Користувача з таким ім'ям не знайдено");
    }
  }, 1000);
};

const handleSuccessFetch = data => {
  console.log(data);
};

const handleErrorFetch = err => {
  console.log(err);
};

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах
// const fetchUserByName = name => {
//   return new Promise((resolve, reject) => {
//     console.log('Робимо запит на сервер...');

//     setTimeout(() => {
//       const isDone = Math.random();

//       if (isDone > 0.5) {
//         const user = {
//           firstName: name,
//           lastName: 'Francis',
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject("Користувача з таким ім'ям не знайдено");
//       }
//     }, 1000);
//   });
// };

// fetchUserByName('Ida')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
