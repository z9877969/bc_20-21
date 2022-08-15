import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  changeFilter,
  getTodoError,
  getTodoRequest,
  getTodoSuccess,
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
} from "./todoActions";

const itemsReducer = createReducer([], {
  [getTodoSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [removeTodoSuccess]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
  // [updateStatusTodo]: (state, { payload }) =>
  //   state.map((el) =>
  //     el.id !== payload ? el : { ...el, isDoneStatus: !el.isDoneStatus }
  //   ),
});

const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [getTodoRequest]: () => true,
  [getTodoSuccess]: () => false,
  [getTodoError]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [removeTodoRequest]: () => true,
  [removeTodoSuccess]: () => false,
  [removeTodoError]: () => false,
});

const setError = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [getTodoError]: setError,
  [getTodoRequest]: () => null,
  [addTodoError]: setError,
  [addTodoRequest]: () => null,
  [removeTodoError]: setError,
  [removeTodoRequest]: () => null,
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default todoReducer;
