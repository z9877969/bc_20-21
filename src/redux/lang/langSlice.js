import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: { lang: "en" },
  reducers: {
    changeLang(_, { payload }) {
      return { lang: payload };
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;
