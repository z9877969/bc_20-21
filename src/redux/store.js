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
import logger from "redux-logger";
import counterReducer from "./counter/counterSlice";
// import todo from "./todo/todoSlice";
import todo from "./todo/todoReducer";
import lang from "./lang/langSlice";

const langPersistConfig = {
  key: "lang",
  storage,
  whitelist: ["value"],
};

// const sayHelloMiddleware = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("Hello");
//       // console.log(store.dispatch({ type: "test/action" }));
//       next(action);
//     };
//   };
// };

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     const { dispatch, getState } = store;
//     const fn = action;
//     fn(dispatch, getState);
//     return;
//   }
//   next(action);
// };

// const operation = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: "request" }); // loaderReducer

//     try {
//       const data = await fetch(id);
//       dispatch({ type: "success", payload: data }); // dataReducer
//     } catch (error) {
//       dispatch({ type: "error", payload: error.message }); // errorReducer
//     }
//   };
// };

// const handleRemove = () => dispatch(operation(65));

// sayHelloMiddleware({getState. dispatch})(next)(action)

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
    }),
  // .concat(
  //   logger
  //   // , thunk
  // ),
  // [sayHelloMiddleware], // reducer
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
