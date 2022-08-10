import { actionTypes } from "./counterActions";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:
      return state + action.payload;
    case actionTypes.COUNTER_DECREMENT:
      return state - action.payload;
    case actionTypes.COUNTER_RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
