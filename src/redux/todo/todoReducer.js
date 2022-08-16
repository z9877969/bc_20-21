import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { getTodo, addTodo, removeTodo } from "./todoOperations";
import { changeFilter } from "./todoActions";

const itemsReducer = createReducer([], {
  [getTodo.fulfilled]: (_, { payload }) => payload,
  [addTodo.fulfilled]: (state, { payload }) => [...state, payload],
  [removeTodo.fulfilled]: (state, { payload }) =>
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
  [getTodo.pending]: () => true,
  [getTodo.fulfilled]: () => false,
  [getTodo.rejected]: () => false,
  [addTodo.pending]: () => true,
  [addTodo.fulfilled]: () => false,
  [addTodo.rejected]: () => false,
  [removeTodo.pending]: () => true,
  [removeTodo.fulfilled]: () => false,
  [removeTodo.rejected]: () => false,
});

const setError = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [getTodo.rejected]: setError,
  [getTodo.pending]: () => null,
  [addTodo.rejected]: setError,
  [addTodo.pending]: () => null,
  [removeTodo.rejected]: setError,
  [removeTodo.pending]: () => null,
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default todoReducer;
