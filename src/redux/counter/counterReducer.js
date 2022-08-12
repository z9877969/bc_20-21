import { actionTypes } from "./counterActions";
import { combineReducers, createReducer } from "@reduxjs/toolkit";

const counterValueReducer = createReducer(0, {
  COUNTER_INCREMENT: (state, action) => state + action.payload,
  [actionTypes.COUNTER_DECREMENT]: (state, action) => state - action.payload,
  [actionTypes.COUNTER_RESET]: () => 0,
});

const counterReducer = combineReducers({ value: counterValueReducer });

export default counterReducer;
