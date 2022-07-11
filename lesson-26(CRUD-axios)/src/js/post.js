'use strict';

import axios from 'axios';

/*
 * Method (POST). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

// const pushUserToDb = user => {
//   return fetch(BASE_URL + '/users', {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

const pushUserToDb = user => {
  return axios
    .post(BASE_URL + '/users', user)
    .then(response => response.data)
    .catch(err => console.log(err));
};

pushUserToDb({
  name: 'Vera Flowers',
  username: 'Antonette',
  email: 'ke@silul.nl',
  address: {
    street: 'Victor Plains',
    suite: 'Suite 879',
    city: 'Wisokyburgh',
    zipcode: '90566-7771',
    geo: {
      lat: '-43.9509',
      lng: '-34.4618',
    },
  },
  phone: '(811) 572-9923',
  website: null,
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
}).then(data => console.log(data));
// .catch(err => console.log(err));
