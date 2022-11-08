import { baseQueryWithReauth, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  tagTypes: ["application"],
  baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
  endpoints: (builder) => ({
    createApplication: builder.mutation<any, any>({
      query: ({ id, classId, ...body }) => {
        return {
          url: `application/create/${id}/${classId}`,
          method: "POST",
          body,
        };
      },
    }),

    searchApplication: builder.mutation<any, { tracking_id: string }>({
      query: (data) => {
        return {
          url: `application/search`,
          method: "post",
          body: data,
        };
      },
    }),
  }),
});

export const { useSearchApplicationMutation, useCreateApplicationMutation } = applicationApi;
