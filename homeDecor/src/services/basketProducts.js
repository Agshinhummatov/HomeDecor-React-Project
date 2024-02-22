import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const basketProductsApi = createApi({
  reducerPath: "basketProductsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/basketProduct",
  }),
  endpoints: (builder) => ({
    getAllBasketProducts: builder.query({
      query: () => "",
    }),
    getBasketProduct: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
    }),
    deleteBasketProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
    addItemToBasket: builder.mutation({
      query: (data) => ({
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBasketProductsQuery,
  useDeleteBasketProductMutation,
  useAddItemToBasketMutation,
  useGetBasketProductQuery,
} = basketProductsApi;
