'use strict';
// https://openweathermap.org/ - 2d54b3b63f81db73612f5bb99397c739

import { fetchWeatherByCityName } from './weather-api';
import weatherInfoTmp from '../templates/weather-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const weatherContainerEl = document.querySelector('.js-weather__wrapper');

// const getAnotherCityTime = (seconds)
const getMsTimeByGrinvich = seconds =>
  new Date(seconds * 1000) - - new Date().getTimezoneOffset() * 60 * 1000;

const getAnotherCityTime = (timeMs, timeZone) =>
  new Date(timeMs + timeZone * 1000);

const convertSecondsToHoursAndMinutes = (seconds, timeZone) => {
  // 1657072450
  const date = new Date(seconds * 1000); // ms

  const msTimeByGrinvich = getMsTimeByGrinvich(seconds);
  const dateAnotherCity = getAnotherCityTime(msTimeByGrinvich, timeZone);

  return `${String(dateAnotherCity.getHours()).padStart(2, '0')}:${String(
    dateAnotherCity.getMinutes()
  ).padStart(2, '0')}`;
};

searchFormEl.addEventListener('submit', e => {
  e.preventDefault();

  const inputEl = e.target.elements.user_country;

  fetchWeatherByCityName(inputEl.value)
    .then(weatherData => {
      weatherData.sys.sunrise = convertSecondsToHoursAndMinutes(
        weatherData.sys.sunrise,
        weatherData.timezone
      ); // sec -> weatherData-string
      weatherData.sys.sunset = convertSecondsToHoursAndMinutes(
        weatherData.sys.sunset,
        weatherData.timezone
      ); // sec -> weatherData-string
      weatherContainerEl.innerHTML = weatherInfoTmp(weatherData);
    })
    .catch(err => (weatherContainerEl.innerHTML = err.message));
});
