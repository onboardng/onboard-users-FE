import { baseQueryWithReauth, createRequest, createRequestWithParams, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: "courseApi",
    tagTypes: ["courses"],
    baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
    endpoints: (builder) => ({
        getAllCourses: builder.query<any, { page: number, limit: number }>({
            query: ({ page, limit }) => createRequestWithParams('course/big-search/', { page, limit }),
            providesTags: (result, _error, _arg) => result?.data ? [...result?.data?.courses?.data?.rows?.map(({ id }: { id: string })=> ({type: "courses", id})), "courses"] : ["courses"],
        }),

        getUniversityCourses: builder.query<any, { page: number, limit: number, id: string }>({
            query: ({ page, limit, id }) => createRequestWithParams(`course/by-sch/${id}`, { page, limit}),
            providesTags: ["courses"],
        }),

        getACourse: builder.query<any, string>({
            query: (id) => createRequest(`course/one/${id}`),
            providesTags: (result, _error, id) => result?.data ? [{type: "courses", id}] : ["courses"],
        }),

        searchCourse: builder.query<any, {page: number, limit: number, course_name?: string, program_name?: string, school_name?: string, country_name?: string}>({
            query: (params) => createRequestWithParams("course/big-search", params)
        }),
        searchCourseInUniversity: builder.query<any, { search?: string, id?: string }>({
            query: (params) => createRequestWithParams(`course/search/${params?.id}`, {search: params?.search})
        })
    })
})

export const { useGetACourseQuery, useGetAllCoursesQuery, useGetUniversityCoursesQuery, useSearchCourseQuery, useLazySearchCourseInUniversityQuery } = courseApi