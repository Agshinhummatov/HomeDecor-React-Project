import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/categories" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoriesApi;
