import axios from "axios";

// const API_KEY = "AIzaSyAIjQu-IbMiLlKcuKCxQI5hzCCR1Zif8a8";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env);
console.log("INDEX");

const url = {
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
  DB: "https://bc-20-21-default-rtdb.firebaseio.com",
  REFRESH_TOKEN: "https://securetoken.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

// /users/ada/name.json?auth=<ID_TOKEN>
export const getTodoApi = ({ localId, idToken }) => {
  setBaseUrl(url.DB);
  return axios
    .get(`/users/${localId}/todo.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(({ data }) =>
      data ? Object.entries(data).map(([id, todo]) => ({ id, ...todo })) : []
    );
};

export const addTodoApi = ({ todo, localId, idToken }) => {
  setBaseUrl(url.DB);
  return axios
    .post(`/users/${localId}/todo.json`, todo, {
      params: {
        auth: idToken,
      },
    })
    .then(({ data }) => {
      const id = data.name;
      return { ...todo, id };
    });
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  setBaseUrl(url.DB);
  return axios
    .delete(`/users/${localId}/todo/${id}.json`, {
      params: {
        auth: idToken,
      },
    })
    .then(() => id);
};

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

// /token?key=[API_KEY]
export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(url.REFRESH_TOKEN);
  return axios
    .post(
      "/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => ({
      refreshToken: data.refresh_token,
      idToken: data.id_token,
      localId: data.user_id,
    }));
};

// {
//   "expires_in": "3600",
//   "token_type": "Bearer",
//   "refresh_token": "[REFRESH_TOKEN]",
//   "id_token": "[ID_TOKEN]",
//   "user_id": "tRcfmLH7o2XrNELi...",
//   "project_id": "1234567890"
// }
