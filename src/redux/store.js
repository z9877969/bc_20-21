import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todo from "./todo/todoReducer";
import { actionTypes } from "./counter/counterActions";

const changeMessageAction = (value) => ({
  type: "change_message",
  payload: value,
});

changeMessageAction("qwe");

const isOpenReducer = (state = false, action) => state;
const messageReducer = (state = "", action) => {
  switch (action.type) {
    case "change_message":
      return action.payload;
    case actionTypes.COUNTER_RESET:
      return "action payload is " + action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  todo,
  isOpen: isOpenReducer, // isOpenReducer(false, changeMessageAction)
  message: messageReducer, // messageReducer("", changeMessageAction)
});

// () => {}

export const store = createStore(rootReducer, composeWithDevTools());
