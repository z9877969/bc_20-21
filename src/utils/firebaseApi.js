import axios from "axios";

axios.defaults.baseURL = "https://bc-20-21-default-rtdb.firebaseio.com";

export const getTodoApi = () => {
  return axios
    .get("/todo.json")
    .then(({ data }) =>
      Object.entries(data).map(([id, todo]) => ({ id, ...todo }))
    ); // [[key, value], [key, value], [key, value]] -> [{id: key, ...value}]
};

export const addTodoApi = (todo) => {
  return axios
    .post("/todo.json", todo) // post -> response
    .then(({ data }) => {
      const id = data.name;
      return { ...todo, id };
    });
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then(() => id);
};
