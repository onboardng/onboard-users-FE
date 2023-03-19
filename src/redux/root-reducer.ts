import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { applicationApi } from "./services/applicationApi";
import { authApi, schoolApi, courseApi } from "./services/index";

import authReducer, { persistConfig } from "./slices/auth";

export const reducers = combineReducers({
  authStore: persistReducer(persistConfig, authReducer),
  [authApi.reducerPath]: authApi.reducer,
  [schoolApi.reducerPath]: schoolApi.reducer,
  [courseApi.reducerPath]: courseApi.reducer,
  [applicationApi.reducerPath]: applicationApi.reducer,
});

export const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT") {
    localStorage.clear();
    sessionStorage.clear();
    window.location.replace("/home-page");
    return reducers(undefined, action);
  }
  return reducers(state, action);
};
