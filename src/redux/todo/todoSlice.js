import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    // isLoading: false,
  },
  reducers: {
    addTodo(state, { payload }) {
      return { ...state, items: [...state.items, payload] };
      //   state.items.push(payload);
    },
    removeTodo(state, { payload }) {
      return { ...state, items: state.items.filter((el) => el.id !== payload) };
    },
    updateStatusTodo(state, { payload }) {
      state.items = state.items.map((el) =>
        el.id !== payload ? el : { ...el, isDoneStatus: !el.isDoneStatus }
      );
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addTodo, removeTodo, updateStatusTodo, changeFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
