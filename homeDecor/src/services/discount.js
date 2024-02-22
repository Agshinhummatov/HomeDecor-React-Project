import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const discountApi = createApi({
  reducerPath: "discountApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/discount" }),
  endpoints: (builder) => ({
    getDiscountData: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetDiscountDataQuery } = discountApi;
