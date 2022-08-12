import { createAction } from "@reduxjs/toolkit";

export const actionTypes = {
  COUNTER_INCREMENT: "COUNTER_INCREMENT",
  COUNTER_DECREMENT: "COUNTER_DECREMENT",
  COUNTER_RESET: "COUNTER_RESET",
};

export const counterIncrement = createAction(actionTypes.COUNTER_INCREMENT);

export const counterDecrement = createAction(actionTypes.COUNTER_DECREMENT);

export const counterReset = createAction(actionTypes.COUNTER_RESET);
