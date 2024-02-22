import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const aboutUsApi = createApi({
  reducerPath: "aboutUsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/aboutUs" }),
  endpoints: (builder) => ({
    getAboutUs: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAboutUsQuery } = aboutUsApi;
