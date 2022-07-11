'use strict';

/*
 * Method (GET).
 */

import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchUsers = () => {
  return axios
    .get(BASE_URL + '/users')
    .then(response => {
      if (response.data.length === 0) {
        throw new Error('Not found');
      }
      return response.data;
    })
    .catch(err => console.log(err));
};

// export const fetchUsers = () => {
//   return (
//     fetch(BASE_URL + '/users')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(response.status);
//         }

//         return response.json();
//       })
//       //   .then(data => console.log(data))
//       .catch(err => console.log(err))
//   );
// };
