"use strict";
const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryListEl = document.querySelector(".js-gallery");

// Функція для створення карточки makeGalleryCard(cardInfo)
const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  // Створення li
  const itemEl = document.createElement("li");
  itemEl.classList.add("gallery-item");

  // Створення a
  const linkEl = document.createElement("a");
  linkEl.href = "#";

  itemEl.append(linkEl);

  // Створення img
  const imgEl = document.createElement("img");
  imgEl.width = width;
  imgEl.height = height;
  imgEl.src = url;
  imgEl.alt = alt;

  linkEl.append(imgEl);

  return itemEl;
};

// makeGalleryCard(pictures[0]);

// Перебор колекції карток через map

const galleryListItems = pictures.map((el) => {
  return makeGalleryCard(el);
});

console.log(galleryListItems);

// Вставка коллекции карточек на страницу

galleryListEl.append(...galleryListItems);