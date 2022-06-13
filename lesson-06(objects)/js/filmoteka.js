"use strict";

const filmoteka = [
  {
    id: 1,
    title: "Duna",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore!",
    rating: 10,
    actors: ["Bim Bom", "Met Link", "Don Hit"],
    hasTrailer: true,
  },
  {
    id: 2,
    title: "Venom",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore!",
    rating: 8.5,
    actors: ["Pete Mill", "Den Buck", "Hot Els"],
    hasTrailer: true,
  },
  {
    id: 3,
    title: "1+1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore!",
    rating: 10,
    actors: ["Rock Top", "Kid Morris", "Elen Stack"],
    hasTrailer: false,
  },
  {
    id: 4,
    title: "Luca",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore!",
    rating: 8,
    actors: ["Jim Bold", "Craft Norton", "Siera Duglas"],
    hasTrailer: false,
  },
  {
    id: 5,
    title: "Leon",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore!",
    rating: 9.7,
    actors: ["Stan Corner", "Jordon Break", "Miranda Willson"],
    hasTrailer: true,
  },
];

/* 
  Напишіть функцію getAllTitleOfFilms() яка повертає масив з назвами всіх фільмів.
  Напишіть функцію findFilmByName(filmName) яка шукає фільм по назві.
  Напишіть функцію getFilmsWithTrailer() яка повертає масив всіх фільмів з трейлерами.
*/

// const getAllTitleOfFilms = function () {
//   const filmesTitles = [];
//   for (const film of filmoteka) {
//     console.log("film :>> ", film.title);
//     filmesTitles.push(film.title);
//   }
//   return filmesTitles;
// };

// console.log(getAllTitleOfFilms());

// const findFilmByName = function (filmName) {
//   // let findedFilm = null;
//   for (const film of filmoteka) {
//     if (film.title === filmName) {
//       // findedFilm = filmName;
//       // break;
//       return film;
//     }
//   }

//   console.log("Film not found");
// };

// console.log(findFilmByName("jhgjhg"));

// const getFilmsWithTrailer = function () {
//   const filmsWithTrailers = [];

//   for (const film of filmoteka) {
//     if (film.hasTrailer) {
//       filmsWithTrailers.push(film);
//     }
//   }
//   return filmsWithTrailers;
// };

// console.log(getFilmsWithTrailer());
