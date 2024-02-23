import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "",
    }),
    getAllProductsHome: builder.query({
      query: (options) => "",
    }),
    getPopularProducts: builder.query({
      query: () => "", // Parametre kullanılmadığı için boş bir query fonksiyonu
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
