'use strict';

export class JsonPlaceholderApi {
  constructor() {
    this.page = 8;
    this.totalPage = 100 / 10
  }

  fetchPosts() {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.page}`
    )
      .then(response => {
        if (!response.ok) {
          throw 'Error';
        }

        return response.json();
      })
      .catch(err => console.log(err));
  }

  increasePage() {
    this.page += 1;
  }
}
