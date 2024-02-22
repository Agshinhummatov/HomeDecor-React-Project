import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const colorsApi = createApi({
  reducerPath: "colorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/colors" }),
  endpoints: (builder) => ({
    getAllColors: builder.query({
      query: () => "",
    }),
  }),
});

export const { useGetAllColorsQuery } = colorsApi;
