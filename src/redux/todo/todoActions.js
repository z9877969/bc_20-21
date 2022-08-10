export const actionTypes = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  UPDATE_STATUS_TODO: "UPDATE_STATUS_TODO",
};

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: actionTypes.REMOVE_TODO,
  payload: id,
});

export const updateStatusTodo = (id) => ({
  type: actionTypes.UPDATE_STATUS_TODO,
  payload: id,
});
