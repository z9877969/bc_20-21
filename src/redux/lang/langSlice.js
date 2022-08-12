import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: { value: "en" },
  reducers: {
    changeLang(_, { payload }) {
      return { value: payload };
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
