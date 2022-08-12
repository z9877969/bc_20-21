import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_STATUS_TODO: "UPDATE_STATUS_TODO",
};

export const addTodo = createAction("todo/add", (data) => {
  return {
    payload: { ...data, id: uuidv4(), isDoneStatus: false },
  };
});

export const removeTodo = createAction("todo/remove");

export const updateStatusTodo = createAction("todo/updateStatus");

export const changeFilter = createAction("todo/changeFilter", (event) => {
  return {
    payload: event.target.value,
  };
});
