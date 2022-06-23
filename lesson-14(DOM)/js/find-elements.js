"use strict";
//* Об'єкт window и document
// console.dir(document);

//* Дідівські методи пошуку елементів (getElementBy...));

// const mainTitleEl = document.getElementsByClassName("main-title");

// mainTitleEl[0].textContent = "Main Title"

// console.log([...mainTitleEl]);

//* Сучасні методи пошуку елементів (querySelector, querySelectorAll)

// const mainTitleEl = document.querySelector("#title")
// const listItemEl = document.querySelectorAll(".list__item")

// console.log(listItemEl);

//* Навігації по DOM дереву(children)

// const listEl = document.querySelector(".list");

// const listItemEl = document.querySelectorAll(".list__item");

// console.log(listEl.children[0] === listItemEl[0]);
// console.log(listItemEl);
