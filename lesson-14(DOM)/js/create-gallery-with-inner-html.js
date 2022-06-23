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
// innerHTML

// const testEl = document.querySelector(".gallery");

// testEl.innerHTML = '<img src="https://picsum.photos/id/237/200/300" alt="Labrador">'

const galleryEL = document.querySelector(".js-gallery");

const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  return `<li class="gallery-item">
            <a href="#">
              <img src=${url} alt=${alt} width=${width} height=${height}>
            </a>
          </li>`;
};

console.log(makeGalleryCard(pictures[0]));

// galleryEL.innerHTML = makeGalleryCard(pictures[0]);
// galleryEL.innerHTML = makeGalleryCard(pictures[1]);

// Перебор колекції карток через map
// const galleryMarkup = pictures.reduce((acc, el) => {
//   return (acc += makeGalleryCard(el));
// }, "");

const galleryMarkup = pictures.map(el => {
  return makeGalleryCard(el)
}).join("");

console.log(galleryMarkup);

// Вставка колекції карток на сторінку - innerHTML, insertAdjacentHTML
// galleryEL.innerHTML = galleryMarkup;
galleryEL.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEL.innerHTML = "";

