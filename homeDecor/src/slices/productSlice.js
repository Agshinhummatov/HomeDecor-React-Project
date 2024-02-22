import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProductsHome = createAsyncThunk(
  "products/getAll",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data.filter((d) => d.showInHome);
  }
);

export const getPopularProducts = createAsyncThunk(
  "products/getPopular",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    return data.filter((d) => d.popular);
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    return data;
  }
);
const initialState = {
  items: [],
  popularItems: [],
  item: null,
};
const productSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.popularItems = action.payload;
      })
      .addCase(getAllProductsHome.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.item = action.payload;
      });
  },
});

export default productSlice.reducer;
