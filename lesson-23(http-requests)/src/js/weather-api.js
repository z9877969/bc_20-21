'use strict';

// fetch(
//   'https://api.openweathermap.org/data/2.5/weather?units=metric&q=kyiv&appid=2d54b3b63f81db73612f5bb99397c739'
// ).then(response => {
//   console.log(response.json());
// });

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '2d54b3b63f81db73612f5bb99397c739';

const endPoint = {
  WEATHER: 'weather',
};

export const fetchWeatherByCityName = city => {
  return fetch(
    `${BASE_URL}/${endPoint.WEATHER}?units=metric&q=${city}&appid=${API_KEY}`
  )
    .then(response => {
      console.log('response', response);
      if (!response.ok) {
        throw new Error('no weather by your search');
      }

      console.log('after');
      return response.json();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};
