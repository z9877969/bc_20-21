"use strict";

/* 
    Створення об'єкту. Конструктор. Літерал.
    Властивості, ключі(іменна) та значення.
*/

// Сутність фільм (назва, опис, рейтинг, акторський склад, наявність трейлера)

const film = {
  title: "Venom",
  descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  rating: 8,
  actors: ["Bim Bom", "Pete Stone", "Jack Hill"],
  hasTrailer: true,
};

console.log(film);

/* 
    Доступ до властивостей(obj.key, obj[key])
    Додавання та зміна властивостей
*/

// console.log(film.title);
// console.log(film.hasTrailer);

// const prop = "descr";

// console.log(film["title"]);
// console.log(film[prop]);

// const showProp = function (propName) {
//   console.log("prop :>> ", film[propName]);
// //   console.log("prop :>> ", film.propName);
// };

// showProp("title");
// showProp("actors");

// console.log(film.reviews); // undefined

/* 
    Короткий запис властивостей
*/

/* <input type="text" name="userName"> */
/* <input type="text" name="email"> */

// const userName = "Bob";
// const email = "bob@mail.com";

// const user = {
//   userName,
//   email,
// };

// console.log(user);

// const userName = prompt("Input name");
// const email = prompt("Input email");

// const user = {
//   userName,
//   email,
// };

// console.log(user);

/* 
    Складний тип. Присвоєння за посиланням.
*/

// film.rating = 10;
// film.reviews = [
//   "Lorem ipsum dolor sit amet, consectetur ",
//   "Lorem ipsum dolor sit amet, consectetur ",
// ];
// console.log(film);

// const obj = film; // refFilm
// obj.title = "1+1";

// console.log("obj :>> ", obj);
// console.log("film :>> ", film);

/* 
    "Все в цьому світі об'єкти"
*/

// const arr = [
//   "Lorem ipsum dolor sit amet, consectetur ",
//   "Lorem ipsum dolor sit amet, consectetur ",
// ];

// console.log("arr :>> ", arr);

// const str = "Lorem ipsum dolor sit amet, consectetur"

// console.log('str :>> ', str);

// str.length
// str.toLowerCase()

// const num = 5

// num.toString()
