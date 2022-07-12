'use strict';

import { UnsplashApi } from './unsplash-api';
import createCardsList from '../templates/gallery-card.hbs';

const createListData = () =>
  Array(20)
    .fill(null)
    .map(el => ({
      urls: {
        small:
          'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg',
      },
      alt_description: 'cat description',
    }));
const fetchByListData = () => Promise.resolve(createListData());

const unsplashApi = new UnsplashApi();

const searchFormEl = document.querySelector('.js-search-form');
const photosListEl = document.querySelector('.js-gallery');
const targetEl = document.querySelector('.target-element');

const intersectionOptions = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
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
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    console.log(entry);
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
    // const data = await unsplashApi.fetchPhotos();
    // photosListEl.innerHTML = createCardsList(data.results);

    const data = await fetchByListData();
    photosListEl.innerHTML = createCardsList(data);

    setTimeout(() => {
      intersectionObserver.observe(targetEl);
    }, 0);
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
searchFormEl.addEventListener('submit', handleSearchFormSubmit);
// loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
