import { createSlice } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";

const initialState = {
  user: {},
  authorization: { access_token: "" },
};

export const persistConfig = {
  storage: storageSession,
  key: "root",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginUser: (state, { payload }) => {
      state.user = payload?.data;
      state.authorization = payload?.data.tokens;
    },
  },
});

export const { setLoginUser } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;
