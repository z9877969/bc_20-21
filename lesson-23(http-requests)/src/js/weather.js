'use strict';
// https://openweathermap.org/ - 2d54b3b63f81db73612f5bb99397c739

import { fetchWeatherByCityName } from './weather-api';
import weatherInfoTmp from '../templates/weather-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const weatherContainerEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  // 1657072450
  const date = new Date(seconds * 1000); // ms

  return `${date.getHours()}:${date.getMinutes()}`;
};

searchFormEl.addEventListener('submit', e => {
  e.preventDefault();

  const inputEl = e.target.elements.user_country;

  console.dir(inputEl.value);

  fetchWeatherByCityName(inputEl.value)
    .then(data => {
      console.log('data :>> ', data);
      const weatherData = {
        name: data.name,
        main: data.main,
        clouds: data.clouds,
        sys: {
          sunrise: convertSecondsToHoursAndMinutes(data.sys.sunrise), // sec -> data-string
          sunset: convertSecondsToHoursAndMinutes(data.sys.sunset), // sec -> data-string
        },
      };
      weatherContainerEl.innerHTML = weatherInfoTmp(weatherData);
    })
    .catch(err => (weatherContainerEl.innerHTML = err.message));
});
