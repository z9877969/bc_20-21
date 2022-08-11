import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import counterReducer from "./counter/counterReducer";
import todo from "./todo/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo,
});

// () => {}

export const store = createStore(rootReducer, composeWithDevTools());
