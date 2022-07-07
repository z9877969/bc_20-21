'use strict';

export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'zMIYRNLxU9oWJAVWivTMDZFX4ARkkk973N--TpfxvMA';

  constructor() {
    this.page = 1;
    this.query = null;
  }

  fetchPhotos() {
    const search = new URLSearchParams({
      query: this.query, // cat
      page: this.page,
      per_page: 12,
      client_id: this.#API_KEY,
    });

    return fetch(`${this.#BASE_URL}/search/photos?${search}`)
      .then(response => {
        if (!response.ok) {
          throw 'Error';
        }

        return response.json();
      })
      .catch(err => console.log(err));
  }

  fetchRandomPhotos() {
    const search = new URLSearchParams({
      count: 12,
      client_id: this.#API_KEY,
    });

    return fetch(`${this.#BASE_URL}/photos/random?${search}`)
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

  setQuery(query) {
    this.query = query;
  }
}
