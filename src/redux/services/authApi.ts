import { baseQueryWithReauth, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (data) => {
        return {
          url: `user/signup`,
          method: "post",
          body: data,
        };
      },
    }),
    userLogin: builder.mutation({
      query: (data) => {
        return {
          url: `user/login`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useSignupUserMutation, useUserLoginMutation } = authApi;
