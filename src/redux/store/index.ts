import { schoolApi } from "./../services/schoolApi";
import { reduxBatch } from "@manaflair/redux-batch";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { courseApi } from "./../services/courseApi";
import { rootReducer } from "../root-reducer";
import { authApi } from "../services/index";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { applicationApi } from "../services/applicationApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
    authApi.middleware,
    schoolApi.middleware,
    courseApi.middleware,
    applicationApi.middleware,
  ],
  // devTools: import.meta.env.NODE_ENV !== "production",
  enhancers: [reduxBatch],
});

export const persistor = persistStore(store);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();
