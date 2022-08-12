import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 54,
  },
  reducers: {
    qwe(state, action) {
      return { value: 154 };
    },
    increment(state, { payload }) {
      return { value: state.value + payload };
    },
    decrement(state, { payload }) {
      return { value: state.value - payload };
    },
    reset() {
      return { value: 0 };
    },
  },
});

export const { qwe, increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer; // 
