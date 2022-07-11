'use strict';
// https://unsplash.com/
import { UnsplashApi } from './unsplash-api';
import createCardsList from '../templates/gallery-card.hbs';

const unsplashApi = new UnsplashApi();

// console.log(unsplashApi);

const searchFormEl = document.querySelector('.js-search-form');
const photosListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

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

mutationObserver.observe(photosListEl, { childList: true });

const handleSearchFormSubmit = event => {
  event.preventDefault();

  const { value } = event.target.elements['user-search-query'];

  if (value === '') {
    photosListEl.innerHTML = '';
    loadMoreBtnEl.classList.add('is-hidden');
    return;
  }

  //   unsplashApi.setQuery(value);
  unsplashApi.query = value;
  unsplashApi.page = 1;

  unsplashApi.fetchPhotos().then(data => {
    photosListEl.innerHTML = createCardsList(data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
  });
};

const handleLoadMoreBtnClick = event => {
  //   unsplashApi.increasePage(); // page + 1
  unsplashApi.page += 1;

  unsplashApi.fetchPhotos().then(data => {
    photosListEl.insertAdjacentHTML('beforeend', createCardsList(data.results));

    if (unsplashApi.page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  });
};

unsplashApi.fetchRandomPhotos().then(photos => {
  photosListEl.innerHTML = createCardsList(photos);
});

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
