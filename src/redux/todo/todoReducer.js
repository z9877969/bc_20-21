import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  actionTypes,
  addTodo,
  removeTodo,
  updateStatusTodo,
  changeFilter,
} from "./todoActions";

const setTodoToLs = (items) =>
  localStorage.setItem("todo", JSON.stringify(items));
const getTodoFromLS = () => JSON.parse(localStorage.getItem("todo"));

const itemsReducer = createReducer(
  // getTodoFromLS() ?? []
  [],
  {
    [addTodo]: (state, action) => {
      const items = [...state, action.payload];
      // setTodoToLs(items);
      return items;
    },
    [removeTodo]: (state, { payload }) => {
      const items = state.filter((el) => el.id !== payload);
      // setTodoToLs(items);
      return items;
    },
    [updateStatusTodo]: (state, { payload }) =>
      state.map((el) => {
        const items =
          el.id !== payload ? el : { ...el, isDoneStatus: !el.isDoneStatus };
        // setTodoToLs(items);
        return items;
      }),
  }
);

// const todoReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD_TODO:
//       return [...state, payload];
//     case actionTypes.REMOVE_TODO:
//       return state.filter((el) => el.id !== payload);
//     case actionTypes.UPDATE_STATUS_TODO:
//       return state.map((el) =>
//         el.id !== payload ? el : { ...el, isDoneStatus: !el.isDoneStatus }
//       );
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
});

const todoReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todoReducer;
