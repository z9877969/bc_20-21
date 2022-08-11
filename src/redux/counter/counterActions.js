import { createAction } from "@reduxjs/toolkit";

export const actionTypes = {
  COUNTER_INCREMENT: "COUNTER_INCREMENT",
  COUNTER_DECREMENT: "COUNTER_DECREMENT",
  COUNTER_RESET: "COUNTER_RESET",
};

export const counterIncrement = createAction(actionTypes.COUNTER_INCREMENT);
// export const counterIncrement = (value) => ({
//   type: actionTypes.COUNTER_INCREMENT,
//   payload: null,
// });

export const counterDecrement = createAction(actionTypes.COUNTER_DECREMENT);
// export const counterDecrement = (value) => ({
//   type: actionTypes.COUNTER_DECREMENT,
//   payload: value,
// });

export const counterReset = createAction(actionTypes.COUNTER_RESET);
// export const counterReset = () => ({
//   type: actionTypes.COUNTER_RESET,
// });
