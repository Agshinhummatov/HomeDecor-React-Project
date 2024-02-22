import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "",
    }),
    getAllProductsHome: builder.query({
      query: (options) => {
        const params = new URLSearchParams({ showInHome: true });
        return `?${params}`;
      },
    }),
    getPopularProducts: builder.query({
      query: (options) => {
        const params = new URLSearchParams({ isPopular: true });
        return `?${params}`;
      },
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetPopularProductsQuery,
  useGetProductByIdQuery,
  useGetAllProductsHomeQuery,
} = productsApi;
