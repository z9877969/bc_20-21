import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, getCurUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: null,
      localId: null,
    },
    idToken: null,
    refreshToken: null,
    isLoding: false,
    error: null,
  },
  reducers: {
    authToggle(state) {
      state.isAuth = !state.isAuth;
    },
    logOut(state) {
      state.user = {
        email: null,
        localId: null,
      };
      state.refreshToken = null;
      state.idToken = null;
      state.isLoding = false;
      state.error = null;
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { idToken, refreshToken, ...rest } = payload;
      state.isLoding = false;
      state.user = rest;
      state.idToken = idToken;
      state.refreshToken = refreshToken;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { idToken, refreshToken, ...rest } = payload;
      state.isLoding = false;
      state.user = rest;
      state.idToken = idToken;
      state.refreshToken = refreshToken;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCurUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = { ...state.user, ...payload };
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    // [refreshToken.pending]: (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // },
    // [refreshToken.fulfilled]: (state, { payload }) => {
    //   const { idToken, localId, refreshToken } = payload;
    //   state.isLoading = false;
    //   state.idToken = idToken;
    //   state.refreshToken = refreshToken;
    //   state.user = { ...state.user, localId };
    // },
    // [refreshToken.rejected]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // },
  },
});

// const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
//   try {
//     await logoutApi();
//     return; // "auth/logout/fullfield"
//   } catch (error) {
//     return thunkApi.rejectedWithValue(error.message);
//   }
// });

export const { authToggle, logOut } = authSlice.actions;
export default authSlice.reducer;
