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

const handleSearchFormSubmit = async event => {
  event.preventDefault();

  const { value } = event.target.elements['user-search-query'];

  if (value === '') {
    photosListEl.innerHTML = '';
    loadMoreBtnEl.classList.add('is-hidden');
    return;
  }

  unsplashApi.query = value;
  unsplashApi.page = 1;

  try {
    const data = await unsplashApi.fetchPhotos();
    photosListEl.innerHTML = createCardsList(data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (error) {
    // document.body.innerHTML = error.message;
    console.log(error);
  }
};

const handleLoadMoreBtnClick = async event => {
  //   unsplashApi.increasePage(); // page + 1
  unsplashApi.page += 1;

  try {
    const data = await unsplashApi.fetchPhotos();
    photosListEl.insertAdjacentHTML('beforeend', createCardsList(data.results));
    if (unsplashApi.page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
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

renderRandomPhoto();

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', handleLoadMoreBtnClick);
