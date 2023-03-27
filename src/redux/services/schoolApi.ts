import { baseQueryWithReauth, createRequest, createRequestWithParams, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const schoolApi = createApi({
  reducerPath: "schoolApi",
  tagTypes: ["universities", "reviews"],
  baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
  endpoints: (builder) => ({
    getAllUniverisities: builder.query<any, { page: number; limit: number, is_draft: boolean }>({
      query: ({ page, limit, is_draft }) => createRequestWithParams(`university/all/`, { page, limit, is_draft }),
      providesTags: (result, _error, _arg) =>
        result?.data
          ? [...result?.data.universities.data.rows.map(({ id }: { id: string }) => ({ type: "universities", id })), "universities"]
          : ["universities"],
    }),

    getAUniversity: builder.query<any, string>({
      query: (id) => createRequest(`university/view/${id}`),
      providesTags: (_result, _error, id) => [{ type: "universities", id }],
    }),
    getAllUniversityReviews: builder.query<any, {id: string; page: number; limit: number}>({
      query: ({ id, page, limit }) => createRequestWithParams(`review/all/${id}`,{ page, limit }),
      providesTags: ["reviews"]
    }),
    createReview: builder.mutation<any, { id: string, body: { text:string, rating:number }}>({
      query: (data) => {
        return {
          url: `review/new/${data?.id}`,
          method: "post",
          body: data?.body,
        };
      },
      invalidatesTags: ["reviews"]
    }),
    universitySearch: builder.query<any, string>({
      query: (search) => createRequestWithParams(`university/search`, {search}),
    })
  }),
});

export const { useGetAUniversityQuery, useGetAllUniverisitiesQuery, useCreateReviewMutation, useGetAllUniversityReviewsQuery, useUniversitySearchQuery } = schoolApi;
