import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const collectionsApi = createApi({
  reducerPath: "collectionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/collections" }),
  endpoints: (builder) => ({
    getAllCollections: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllCollectionsQuery } = collectionsApi;
