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
import counterReducer from "./counter/counterSlice";
import todo from "./todo/todoSlice";
import lang from "./lang/langSlice";

const todoPersistConfig = {
  key: "todo",
  version: 1,
  storage,
  whitelist: ["items"],
};

const langPersistConfig = {
  key: "lang",
  storage,
  whitelist: ["value"],
};

const todoPersistedReducer = persistReducer(todoPersistConfig, todo);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoPersistedReducer,
    lang: persistReducer(langPersistConfig, lang),
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
