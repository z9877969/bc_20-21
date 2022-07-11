'use strict';
/*
 * Method(DELETE)
 */
// const axios = require('axios').default;
import axios from 'axios';
import { fetchUsers } from './get';
import createUsersList from '../templates/users.hbs';

const BASE_URL = 'http://localhost:3000';

const usersListEl = document.querySelector('.js-users');

usersListEl.innerHTML = createUsersList();

const removeUser = id => {
  return axios
    .delete(BASE_URL + '/users/' + id)

    .catch(err => console.log(err));

  //   return fetch(BASE_URL + '/users/' + id, {
  //     method: 'DELETE',
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(response.status);
  //       }

  //       return id;
  //     })
  // .catch(err => console.log(err));
};

fetchUsers().then(users => {
  console.log(users);
  usersListEl.innerHTML = createUsersList(users);
});

usersListEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;

  const itemEl = event.target.closest('li');

  const itemId = itemEl.dataset.id;

  removeUser(itemId).then(id => {
    // const itemsEl = usersListEl.children;

    // [...itemsEl].forEach(el => {
    //   if (el.dataset.id === id) {
    //     el.remove();
    //   }
    // });

    itemEl.remove();
  });
});

// removeUser(13)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
