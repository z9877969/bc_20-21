export const actionTypes = {
  COUNTER_INCREMENT: "COUNTER_INCREMENT",
  COUNTER_DECREMENT: "COUNTER_DECREMENT",
  COUNTER_RESET: "COUNTER_RESET",
};

export const counterIncrement = (value) => ({
  type: actionTypes.COUNTER_INCREMENT,
  payload: value,
});

export const counterDecrement = (value) => ({
  type: actionTypes.COUNTER_DECREMENT,
  payload: value,
});

export const counterReset = () => ({
  type: actionTypes.COUNTER_RESET,
});
