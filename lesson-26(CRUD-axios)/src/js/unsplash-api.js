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
    axios.defaults.params = {
      query: this.query, // cat
      page: this.page,
      per_page: 12,
      client_id: this.#API_KEY,
    };

    // ?query=cat&page=1&per_page=12

    return axios
      .get(`/search/photos`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  fetchRandomPhotos() {
    axios.defaults.params = {
      count: 12,
      client_id: this.#API_KEY,
    };

    return axios
      .get(`/photos/random`)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  increasePage() {
    this.page += 1;
  }

  setQuery(query) {
    this.query = query;
  }
}
