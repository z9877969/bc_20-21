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
import auth from "./auth/authSlice";

const langPersistConfig = {
  key: "lang",
  storage,
  whitelist: ["value"],
};

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["idToken"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, auth),
    counter: counterReducer,
    todo,
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
