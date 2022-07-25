'use strict';

import { UnsplashApi } from './unsplash-api';
import createCardsList from '../templates/gallery-card.hbs';

const unsplashApi = new UnsplashApi();

// const showDataInConsole = async () => {
//   const promiseResult = await unsplashApi.fetchPhotos();
//   console.log('promiseResult :>> ', promiseResult);
// };

// showDataInConsole();

// unsplashApi.fetchPhotos().then(promiseResult => console.log(promiseResult));

const searchFormEl = document.querySelector('.js-search-form');
const photosListEl = document.querySelector('.js-gallery');
const targetEl = document.querySelector('.target-element');

const intersectionOptions = {
  root: null,
  rootMargin: '0px 0px 100px 0px',
  threshold: 1.0,
};

const mutationObserver = new MutationObserver(mutationRecord => {
  // mutationRecord[0]
  mutationRecord.forEach(mutation => {
    const itemsList = [...mutation.addedNodes].filter(
      node => node.nodeName !== '#text'
    );

    setTimeout(() => {
      itemsList.forEach(item => item.classList.add('appear'));
    }, 0);
  });
});

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(async entry => {
    if (!entry.isIntersecting) return;

    console.log(entry);

    unsplashApi.page += 1;
    try {
      const data = await unsplashApi.fetchPhotos();

      photosListEl.insertAdjacentHTML(
        'beforeend',
        createCardsList(data.results)
      );

      if (unsplashApi.page === data.total_pages) {
        observer.unobserve(entry.target);
        return;
      }

      observer.unobserve(entry.target);
      observer.observe(photosListEl.lastElementChild);
    } catch (error) {
      console.log(error);
    }
  });
}, intersectionOptions);

const handleSearchFormSubmit = async event => {
  event.preventDefault();

  const { value } = event.target.elements['user-search-query'];

  if (value === '') {
    photosListEl.innerHTML = '';
    return;
  }

  unsplashApi.query = value;
  unsplashApi.page = 1;

  try {
    const data = await unsplashApi.fetchPhotos();
    photosListEl.innerHTML = createCardsList(data.results);
    // img.src = null -> async request

    // intersectionObserver.observe(targetEl);
    console.log(photosListEl.lastElementChild);
    intersectionObserver.observe(photosListEl.lastElementChild);
  } catch (error) {
    console.log(error);
  }
};

const renderRandomPhoto = async () => {
  try {
    const photos = await unsplashApi.fetchRandomPhotos();
    photosListEl.innerHTML = createCardsList(photos);
  } catch (error) {
    console.log(error);
  }
};

// renderRandomPhoto();
// mutationObserver.observe(photosListEl, { childList: true });
// searchFormEl.addEventListener('submit', handleSearchFormSubmit);

const startGallery = () => {
  renderRandomPhoto();
  mutationObserver.observe(photosListEl, { childList: true });
  searchFormEl.addEventListener('submit', handleSearchFormSubmit);
};

export default startGallery;
