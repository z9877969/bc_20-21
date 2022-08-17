import axios from "axios";

const API_KEY = "AIzaSyAIjQu-IbMiLlKcuKCxQI5hzCCR1Zif8a8";

const url = {
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
  DB: "https://bc-20-21-default-rtdb.firebaseio.com",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

export const getTodoApi = () => {
  setBaseUrl(url.DB);
  return axios
    .get("/todo.json")
    .then(({ data }) =>
      Object.entries(data).map(([id, todo]) => ({ id, ...todo }))
    );
};

export const addTodoApi = (todo) => {
  setBaseUrl(url.DB);
  return axios
    .post("/todo.json", todo) // post -> response
    .then(({ data }) => {
      const id = data.name;
      return { ...todo, id };
    });
};

export const removeTodoApi = (id) => {
  setBaseUrl(url.DB);
  return axios.delete(`/todo/${id}.json`).then(() => id);
};

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
export const registerUserApi = (userData) => {
  setBaseUrl(url.AUTH);
  return axios
    .post(
      "/accounts:signUp",
      { ...userData, returnSecureToken: true },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { expiresIn, kind, ...postedUserData } = data;
      return postedUserData;
    });
};

export const loginUserApi = (userData) => {
  setBaseUrl(url.AUTH);
  return axios
    .post(
      "/accounts:signInWithPassword",
      {
        ...userData,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { idToken, email, refreshToken, localId } = data;
      return { idToken, email, refreshToken, localId };
    });
};

// // /accounts:lookup?key=[API_KEY]
export const getCurUserApi = (idToken) => {
  setBaseUrl(url.AUTH);
  return axios
    .post(
      "/accounts:lookup",
      { idToken },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => {
      const { localId, email } = data.users[0];
      return { localId, email };
    });
};

// {
//   "idToken": "[ID_TOKEN]",
//   "email": "[user@example.com]",
//   "refreshToken": "[REFRESH_TOKEN]",
//   "localId": "tRcfmLH7..."
// }
