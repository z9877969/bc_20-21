'use strict';
// https://protest-backend.goit.global/api-docs/#/
// https://jsonplaceholder.typicode.com/ (query -> _limit)

const fetchFotos = page => {
  const searchParams = new URLSearchParams({
    _limit: 5,
    _page: page,
  });

  return fetch(
    // `https://jsonplaceholder.typicode.com/photos?_limit=5&_page=${page}`
    `https://jsonplaceholder.typicode.com/photos?${searchParams.toString()}`
  ).then(response => {
    if (!response.ok) {
      throw new Error('Error message');
    }

    // console.log(response.json()); // -> promise
    return response.json();
  });
};

fetchFotos(2)
  .then(users => users.map(el => el))
  .then(usersName => console.log(usersName))

  .catch(err => console.log(err.message));

// console.dir(new Error('Erroro message'));

//? TASK 01
// Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub,
// запитує у GitHub інформацію про них та повертає масив об'єктів-користувачів.
// Інформація про користувача GitHub з логіном USERNAME доступна за
// посиланням: https://api.github.com/users/USERNAME.

// const BASE_URL = 'https://api.github.com';
// const userLogins = ['luxplanjay', 'z9877969', 'salikovskyi'];
