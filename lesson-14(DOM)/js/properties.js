"use strict";
//* Атрибути як властивості об'єкта
// https://picsum.photos/id/1025/200/300 - "Mops"
// js-img(атрибути як властивості, заміна картинки)
// js-main-title(зміна контенту)
// js-swap-btn(зміна картинки по кліку)

const imgEl = document.querySelector(".js-img");

// imgEl.alt = "Mops";
// imgEl.src = "https://picsum.photos/id/1025/200/300";

console.log(imgEl.src);
console.log(imgEl.alt);
console.log(imgEl.width);

const mainTitleEl = document.querySelector(".js-main-title");

mainTitleEl.textContent = "Main Title";

console.log(mainTitleEl.textContent);

const btnEl = document.querySelector(".js-swap-btn");

btnEl.addEventListener("click", () => {
  imgEl.alt = "Mops";
  imgEl.src = "https://picsum.photos/id/1025/200/300";
});

/*
 * Доступ до атрибутів
 *
 * elem.hasAttribute(name)
 * elem.getAttribute(name)
 * elem.setAttribute(name, value)
 * elem.removeAttribute(name)
 * elem.attributes
 */


// imgEl.setAttribute("alt", "Dog");
// imgEl.removeAttribute("alt");
// console.log(imgEl.hasAttribute("alt"));

// console.log(imgEl.getAttribute("alt"));
console.log(imgEl.attributes);
