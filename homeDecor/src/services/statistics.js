import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statisticsApi = createApi({
  reducerPath: "statisticsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/statistics" }),
  endpoints: (builder) => ({
    getAllStatistics: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllStatisticsQuery } = statisticsApi;
