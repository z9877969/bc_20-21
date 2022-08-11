import { actionTypes } from "./counterActions";
import { combineReducers, createReducer } from "@reduxjs/toolkit";

const counterValueReducer = createReducer(0, {
  COUNTER_INCREMENT: (state, action) => state + action.payload,
  [actionTypes.COUNTER_DECREMENT]: (state, action) => state - action.payload,
  [actionTypes.COUNTER_RESET]: () => 0,
});

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case actionTypes.COUNTER_INCREMENT:
//       return state + action.payload;
//     case actionTypes.COUNTER_DECREMENT:
//       return state - action.payload;
//     case actionTypes.COUNTER_RESET:
//       return 0;
//     default:
//       return state;
//   }
// };

const counterReducer = combineReducers({ value: counterValueReducer });

export default counterReducer;
