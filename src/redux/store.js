// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
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
import counterReducer from "./counter/counterReducer";
import todo from "./todo/todoReducer";

const todoPersistConfig = {
  key: "todo",
  version: 1,
  storage,
  // blacklist: ["filter"]
  whitelist: ["items"],
};

const counterPersistConfig = {
  key: "counter",
  version: 1,
  storage,
  whitelist: ["value"],
};

const todoPersistedReducer = persistReducer(todoPersistConfig, todo);
const counterPersistedReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);

export const store = configureStore({
  reducer: {
    counter: counterPersistedReducer,
    todo: todoPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
