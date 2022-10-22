import { baseQueryWithReauth, createRequest, createRequestWithParams, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const schoolApi = createApi({
  reducerPath: "schoolApi",
  tagTypes: ["universities"],
  baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
  endpoints: (builder) => ({
    getAllUniverisities: builder.query<any, { page: number; limit: number }>({
      query: ({ page, limit }) => createRequestWithParams(`university/all/`, { page, limit }),
      providesTags: (result, _error, _arg) =>
        result?.data
          ? [...result?.data.universities.data.rows.map(({ id }: { id: string }) => ({ type: "universities", id })), "universities"]
          : ["universities"],
    }),

    getAUniversity: builder.query<any, string>({
      query: (id) => createRequest(`university/view/${id}`),
      providesTags: (_result, _error, id) => [{ type: "universities", id }],
    }),
  }),
});

export const { useGetAUniversityQuery, useGetAllUniverisitiesQuery } = schoolApi;
