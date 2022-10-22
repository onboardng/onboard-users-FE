import { baseQueryWithReauth, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const applicationApi = createApi({
    reducerPath: "applicationApi",
    tagTypes: ["application"],
    baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
    endpoints: (builder) => ({
        createApplication: builder.mutation<any, { id: string, body: { first_name:string, last_name: string, middle_name:string, phone_number: string, email:string,  gender:string, nationality:string }}>({
            query: ({id, body}) => {
                return {
                    url: `application/create/${id}`,
                    method: "POST",
                    body
                }
            }
        }),

        searchApplication: builder.mutation<any, {tracking_id: string}>({
            query: (data) => {
              return {
                url: `application/searchn`,
                method: "post",
                body: data,
              };
            },
          }),
    })
})

export const { useSearchApplicationMutation, useCreateApplicationMutation } = applicationApi;