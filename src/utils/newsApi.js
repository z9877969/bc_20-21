import axios from "axios";

const API_KEY = "42ee593af8484a5a82756cb35b09ccd6";
axios.defaults.baseURL = "https://newsapi.org/v2";

export const getTopNews = (page = 1) => {
  return axios
    .get("/top-headlines", {
      params: {
        page,
        pageSize: 10,
        country: "us",
        apiKey: API_KEY,
      },
    })
    .then((response) => response.data);
};

export const getSearchNews = (page = 1, query) => {
  return axios
    .get("/everything", {
      params: {
        q: query,
        page,
        pageSize: 10,
        apiKey: API_KEY,
      },
    })
    .then((response) => response.data);
};

// https://newsapi.org/v2/top-headlines?apiKey=42ee593af8484a5a82756cb35b09ccd6&country=ua

export const getTopCountryNews = (country) => {
  return axios
    .get("/top-headlines", {
      params: {
        country,
        pageSize: 10,
        apiKey: API_KEY,
      },
    })
    .then((response) => response.data.articles); // news
};
