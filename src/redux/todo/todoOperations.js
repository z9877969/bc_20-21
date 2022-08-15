import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";
import {
  getTodoSuccess,
  getTodoRequest,
  getTodoError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoError,
} from "./todoActions";

export const getTodo = () => (dispatch) => {
  dispatch(getTodoRequest());

  getTodoApi() // -> promise to webApi
    .then((todo) => dispatch(getTodoSuccess(todo)))
    .catch((err) => dispatch(getTodoError(err.message)));
};

export const addTodo = (todo) => (dispatch) => {
  dispatch(addTodoRequest());

  addTodoApi(todo)
    .then((newTodo) => dispatch(addTodoSuccess(newTodo)))
    .catch((err) => dispatch(addTodoError(err.message)));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(removeTodoRequest());

  removeTodoApi(id)
    .then((id) => dispatch(removeTodoSuccess(id)))
    .catch((err) => dispatch(removeTodoError(err.message)));
};
