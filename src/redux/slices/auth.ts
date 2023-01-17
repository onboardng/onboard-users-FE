import { createSlice } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";

const initialState = {
  user: {
    first_name: "",
    last_name: "",
    email: "",
    profile_picture: "",
    avatar: "",
  },
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
      state.user = payload?.data?.loginUser;
      state.authorization.access_token = payload?.data?.accesstoken;
      localStorage.setItem('user', JSON.stringify(payload?.data?.loginUser))
      localStorage.setItem('access_token', JSON.stringify(payload?.data?.accesstoken))
    },
  },
});

export const { setLoginUser } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;
