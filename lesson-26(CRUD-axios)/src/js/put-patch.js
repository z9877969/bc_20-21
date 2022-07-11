'use strict';

/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

// const updateUser = (id, userData) => {
//   return fetch(BASE_URL + '/users/' + id, {
//     method: 'PATCH',
//     body: JSON.stringify(userData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

const updateUser = (id, userData) => {
  return axios({
    method: 'patch',
    baseURL: BASE_URL,
    url: '/users/' + id,
    data: userData,
  })
    .then(response => response.data)
    .catch(err => console.log(err));
  // return axios
  //   .patch(BASE_URL + '/users/' + id, userData)
  //   .then(response => response.data)
  //   .catch(err => console.log(err));
};

// updateUser(16, {
//   name: 'Don Fuller',
//   email: 'meh@sokuklod.ky',
// })
//   // .then(response => {
//   //   if (!response.ok) {
//   //     throw new Error(response.status);
//   //   }

//   //   return response.json();
//   // })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
