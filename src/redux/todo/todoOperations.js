import { createAsyncThunk } from "@reduxjs/toolkit";
import { addTodoApi, getTodoApi, removeTodoApi } from "../../utils/firebaseApi";

export const getTodo = createAsyncThunk("getTodo", async (_, thunkApi) => {
  const {
    auth: {
      idToken,
      user: { localId },
    },
  } = thunkApi.getState();

  try {
    const todo = await getTodoApi({ localId, idToken });
    return todo;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addTodo = createAsyncThunk(
  "addTodo",
  async (todo, { rejectWithValue, getState }) => {
    const {
      auth: {
        idToken,
        user: { localId },
      },
    } = getState();
    try {
      const newTodo = await addTodoApi({ todo, localId, idToken });
      return newTodo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "removeTodo",
  async (id, { rejectWithValue, getState }) => {
    const {
      idToken,
      user: { localId },
    } = getState().auth;
    try {
      await removeTodoApi({ id, localId, idToken });

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
