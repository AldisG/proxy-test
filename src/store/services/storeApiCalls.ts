import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testAPI = createApi({
  reducerPath: 'testAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: "/"
    // baseUrl: "https://quiz-app-usnl.onrender.com/account-api/me"
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getsomeData: builder.query({
      query: (searchFor: string) => `my API link and ${searchFor} that i pass in` as string
    }),
    getAnyData: builder.query({
      query: () => ''
    }),

    updatePost: builder.mutation({
      query: (body: any) => ({ url: "/account-api/sign-up", method: 'POST', body }),
    }),

  })
})



export const { reducer } = testAPI
export const { useGetsomeDataQuery, useGetAnyDataQuery } = testAPI
export const { useUpdatePostMutation } = testAPI
export default testAPI