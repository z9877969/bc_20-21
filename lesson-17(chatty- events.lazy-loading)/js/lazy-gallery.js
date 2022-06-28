"use strict";

const galleryEl = document.querySelector(".js-gallery");
const bannerImgEl = document.querySelector(".banner__img");
const galleryImgEls = document.querySelectorAll(".gallery__img");

const handleImageGalleryClick = (e) => {
  e.preventDefault();

  const imgEl = e.target;

  if (imgEl.nodeName !== "IMG") {
    return;
  }

  const bannerUrl = e.target.dataset.bannerUrl;

  bannerImgEl.src = bannerUrl;
};

galleryEl.addEventListener("click", handleImageGalleryClick);

// window.addEventListener("load", () => {
//   console.log("Load");
// });

galleryImgEls.forEach((img) => {
  img.addEventListener(
    "load",
    (event) => {
      event.target.classList.add("appear");
    },
    { once: true }
  );
});

const addSrcAttrToImg = () => {
  const galleryImages = document.querySelectorAll('.gallery__img');

  galleryImages.forEach(img => {
    img.src = img.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Аттрибут loading поддерживаются');
  addSrcAttrToImg();
} else {
  console.log('Аттрибут loading не поддерживаются');
  document.body.append(createLazySizesScript());
}

// console.dir(HTMLImageElement);

// console.log(HTMLAudioElement);
