import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../counter/counterSlice";
import { addTodo, getTodo, removeTodo } from "./todoOperations";
import { logOut } from "../auth/authSlice";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [getTodo.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [getTodo.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    },
    [getTodo.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [addTodo.pending]: (state) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [addTodo.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      };
    },
    [addTodo.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [removeTodo.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [removeTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter((item) => item.id !== payload);
    },
    [removeTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [reset]: (state) => {
      state.items = [];
      state.isLoading = false;
      state.error = null;
      state.filter = "all";
    },
    [logOut]: (state) => {
      state.items = [];
      state.filter = "all";
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { updateStatusTodo, changeFilter } = todoSlice.actions;
export default todoSlice.reducer;
