export const getIsAuth = (state) => Boolean(state.auth.idToken);
export const getMustCurUser = (state) =>
  state.auth.idToken && !state.auth.user.email;
