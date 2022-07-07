'use strict';
// https://jsonplaceholder.typicode.com/
import { JsonPlaceholderApi } from './jsonplaceholder-api';
import createPostsCards from '../templates/posts.hbs';

const jsonPlaceholderApi = new JsonPlaceholderApi();

console.log(jsonPlaceholderApi);

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const handleLoadMorePosts = event => {
  jsonPlaceholderApi.increasePage();

  const { page, totalPage } = jsonPlaceholderApi;

  console.log(jsonPlaceholderApi);
  if (page === totalPage) {
    event.target.style.display = 'none';
  }

  jsonPlaceholderApi
    .fetchPosts()
    .then(posts =>
      postsListEl.insertAdjacentHTML('beforeend', createPostsCards(posts))
    );
};

jsonPlaceholderApi
  .fetchPosts()
  .then(posts => (postsListEl.innerHTML = createPostsCards(posts)));

loadMoreBtnEl.addEventListener('click', handleLoadMorePosts);
