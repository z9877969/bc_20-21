import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
import counterReducer from "./counter/counterSlice";
import todo from "./todo/todoSlice";
// import todo from "./todo/todoReducer";
import lang from "./lang/langSlice";

const langPersistConfig = {
  key: "lang",
  storage,
  whitelist: ["value"],
};

const m = (store) => (next) => (action) => {
  // const {dispatch, getState} = store;
  next(action);
};

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     const { dispatch, getState } = store;
//     action(dispatch, getState);
//     return;
//   }
//   next(action);
// };

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo,
    lang: persistReducer(langPersistConfig, lang),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(m),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
