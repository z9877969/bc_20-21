import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";

// export const getTodo = () => (dispatch) => {
//   dispatch(getTodoRequest());

//   getTodoApi() // -> promise to webApi
//     .then((todo) => dispatch(getTodoSuccess(todo)))
//     .catch((err) => dispatch(getTodoError(err.message)));
// };

export const getTodo = createAsyncThunk("getTodo", async (param, thunkApi) => {
  console.log(thunkApi);
  // -> getTodo/pending
  try {
    const todo = await getTodoApi();
    return todo; // -> getTodo/fullfield
  } catch (error) {
    // return error.message; // qwe/fulfield
    return thunkApi.rejectWithValue(error.message); // -> getTodo/rejected
  }
});

// getTodo("65465465")

// export const addTodo = (todo) => (dispatch) => {
//   dispatch(addTodoRequest());

//   addTodoApi(todo)
//     .then((newTodo) => dispatch(addTodoSuccess(newTodo)))
//     .catch((err) => dispatch(addTodoError(err.message)));
// };

export const addTodo = createAsyncThunk(
  "addTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const newTodo = await addTodoApi(todo);
      return newTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// addTodo({})

// export const removeTodo = (id) => (dispatch) => {
//   dispatch(removeTodoRequest());

//   removeTodoApi(id)
//     .then((id) => dispatch(removeTodoSuccess(id)))
//     .catch((err) => dispatch(removeTodoError(err.message)));
// };

export const removeTodo = createAsyncThunk(
  "removeTodo",
  async (id, { rejectWithValue }) => {
    try {
      await removeTodoApi(id);

      return id; // removeTodo/fullfield
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
