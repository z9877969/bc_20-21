"use strict";
/*
 * Основи подій. Створення та видалення прослуховувачів. Об'єкт події.
 */

/*
 ?- Найменування колбеків для прослуховувачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300

const btnEl = document.querySelector("[data-update]");
const imgEl = document.querySelector(".js-img");
const removeBtnEl = document.querySelector(".js-remove-listener");

const handleImgClick = () => {
  console.log("Update");
  imgEl.src = "https://picsum.photos/200/300";
  imgEl.alt = "some image";
};

const handleRemoveEvent = () => {
  console.log("Remove");
  btnEl.removeEventListener("click", handleImgClick);
  removeBtnEl.removeEventListener("click", handleRemoveEvent);
};

btnEl.addEventListener("click", handleImgClick);
removeBtnEl.addEventListener("click", handleRemoveEvent);

// script END
