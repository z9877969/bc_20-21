import { createSelector } from "@reduxjs/toolkit";

export const getTodo = (state) => state.todo.items;
export const getFilter = (state) => state.todo.filter;
export const getIsTodo = (state) => Boolean(state.todo.items.length);
export const getError = (state) => state.todo.error;
export const getIsLoading = (state) => state.todo.isLoading;

export const getFilteredTodo = createSelector(
  [getTodo, getFilter],
  (items, filter) => {
    const todo =
      filter === "all"
        ? items
        : items.filter((item) => item.priority === filter);

    return todo;
  }
);
