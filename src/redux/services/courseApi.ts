import { baseQueryWithReauth, createRequest, createRequestWithParams, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
    reducerPath: "courseApi",
    tagTypes: ["courses"],
    baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
    endpoints: (builder) => ({
        getAllCourses: builder.query<any, { page: number, limit: number }>({
            query: ({ page, limit }) => createRequestWithParams('course/all/', { page, limit }),
            providesTags: (result, _error, _arg) => result?.data ? [...result?.data?.courses?.data?.rows?.map(({ id }: { id: string })=> ({type: "courses", id})), "courses"] : ["courses"],
        }),

        getUniversityCourses: builder.query<any, { page: number, limit: number, id: string }>({
            query: ({ page, limit, id }) => createRequestWithParams(`course/by-sch/${id}`, { page, limit}),
            providesTags: (result, _error, _arg) => result?.data ? [...result?.data?.courses?.data?.rows?.map(({ id }: { id: string })=> ({type: "courses", id})), "courses"] : ["courses"],
        }),

        getACourse: builder.query<any, string>({
            query: (id) => createRequest(`course/one/${id}`),
            providesTags: (result, _error, id) => result?.data ? [{type: "courses", id}] : ["courses"],
        }),

        searchCourse: builder.mutation<any, {page: number, limit: number, body: {course_name: string, program_name?: string}}>({
            query: ({page, limit, body}) => {
                return {
                    url: `course/search`,
                    method: "POST",
                    body,
                    params: {page, limit}
                }
            }
        })
    })
})

export const { useGetACourseQuery, useGetAllCoursesQuery, useGetUniversityCoursesQuery, useSearchCourseMutation } = courseApi