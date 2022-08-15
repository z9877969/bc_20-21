import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("todo/changeFilter", (event) => {
  return {
    payload: event.target.value,
  };
});

export const getTodoRequest = createAction("todo/getTodoRequest");
export const getTodoSuccess = createAction("todo/getTodoSuccess");
export const getTodoError = createAction("todo/getTodoError");

export const addTodoRequest = createAction("todo/addTodoRequest");
export const addTodoSuccess = createAction("todo/addTodoSuccess");
export const addTodoError = createAction("todo/addTodoError");

export const removeTodoRequest = createAction("todo/removeTodoRequest");
export const removeTodoSuccess = createAction("todo/removeTodoSuccess");
export const removeTodoError = createAction("todo/removeTodoError");
