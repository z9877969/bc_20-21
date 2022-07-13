'use strict';
import axios from 'axios';

export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'zMIYRNLxU9oWJAVWivTMDZFX4ARkkk973N--TpfxvMA';
  constructor() {
    this.page = 1;
    this.query = null;
    axios.defaults.baseURL = this.#BASE_URL;
  }

  fetchPhotos() {
    // axios.defaults.params = {
    //   query: this.query, // cat
    //   page: this.page,
    //   per_page: 12,
    //   client_id: this.#API_KEY,
    // };

    return axios
      .get(`/search/photos`, {
        params: {
          query: this.query, // cat
          page: this.page,
          per_page: 12,
          client_id: this.#API_KEY,
        },
      })
      .then(response => response.data);
  }

  fetchRandomPhotos() {
    // axios.defaults.params = {
    //   count: 12,
    //   client_id: this.#API_KEY,
    // };

    return axios
      .get(`/photos/random`, {
        params: {
          count: 12,
          client_id: this.#API_KEY,
        },
      })
      .then(response => response.data);
  }

  increasePage() {
    this.page += 1;
  }

  setQuery(query) {
    this.query = query;
  }
}
