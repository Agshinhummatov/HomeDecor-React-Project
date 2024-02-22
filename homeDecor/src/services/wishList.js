import { createApi } from "@reduxjs/toolkit/query/react";

export const wishListApi = createApi({
  reducerPath: "wishListApi",
  baseQuery: (args, api, extraOptions) => {
    return args;
  },
  endpoints: (builder) => ({
    addItemToWishList: builder.mutation({
      query: (data) => {
        const wishlistItems = localStorage.getItem("wishlist") || "[]";
        const updatedWishlist = [...JSON.parse(wishlistItems), data];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return data;
      },
    }),
  }),
});

export const {
  useAddItemToWishListMutation,
  useDeleteWishListItemMutation,
  useGetAllWishListItemsQuery,
} = wishListApi;
