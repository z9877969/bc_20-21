import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addTodo,
  removeTodo,
  updateStatusTodo,
  changeFilter,
} from "./todoActions";

const itemsReducer = createReducer([], {
  [addTodo]: (state, action) => [...state, action.payload],
  [removeTodo]: (state, { payload }) => state.filter((el) => el.id !== payload),
  [updateStatusTodo]: (state, { payload }) =>
    state.map((el) =>
      el.id !== payload ? el : { ...el, isDoneStatus: !el.isDoneStatus }
    ),
});

const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
