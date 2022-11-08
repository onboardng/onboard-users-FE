import { baseQueryWithReauth, CustomError } from "./shared";
import { BaseQueryFn, createApi, FetchArgs } from "@reduxjs/toolkit/query/react";

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  tagTypes: ["application"],
  baseQuery: baseQueryWithReauth as BaseQueryFn<string | FetchArgs, unknown, CustomError, Record<string, any>>,
  endpoints: (builder) => ({
    createApplication: builder.mutation<any, any>({
      query: ({ id, classId, ...body }) => {
        const form_data = new FormData();
        form_data.append("first_name", body?.first_name);
        form_data.append("last_name", body?.last_name);
        form_data.append("email", body?.email);
        form_data.append("phone_number", `${body?.phoneCode}${body?.phone_number}`);
        form_data.append("result", body.result);
        return {
          url: `application/create/${id}/${classId}`,
          method: "POST",
          body: form_data,
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
    viewApplication: builder.mutation<any, { access_code: string, app_id: string }>({
      query: (data) => {
        return {
          url: `application/view/${data?.app_id}`,
          method: "post",
          body: {access_code: data?.access_code},
        };
      },
    }),
  }),
});

export const { useSearchApplicationMutation, useCreateApplicationMutation, useViewApplicationMutation } = applicationApi;
