import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeIntroApi = createApi({
  reducerPath: "homeIntroApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/homeIntro" }),
  endpoints: (builder) => ({
    getHomeIntro: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetHomeIntroQuery } = homeIntroApi;
