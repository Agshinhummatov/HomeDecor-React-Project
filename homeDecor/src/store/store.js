import { aboutUsApi } from "../services/aboutUs";
import { basketProductsApi } from "../services/basketProducts";
import { categoriesApi } from "../services/category";
import { collectionsApi } from "../services/collections";
import { configureStore } from "@reduxjs/toolkit";
import { discountApi } from "../services/discount";
import { homeIntroApi } from "../services/homeIntro";
import { productsApi } from "../services/product";
import { statisticsApi } from "../services/statistics";
import { usersApi } from "../services/user";
import { colorsApi } from "../services/colors";

// Configure the Redux store
const store = configureStore({
  reducer: {
    [aboutUsApi.reducerPath]: aboutUsApi.reducer,
    [basketProductsApi.reducerPath]: basketProductsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [collectionsApi.reducerPath]: collectionsApi.reducer,
    [discountApi.reducerPath]: discountApi.reducer,
    [homeIntroApi.reducerPath]: homeIntroApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [colorsApi.reducerPath]: colorsApi.reducer,
    // Add other reducers if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      aboutUsApi.middleware,
      basketProductsApi.middleware,
      categoriesApi.middleware,
      collectionsApi.middleware,
      discountApi.middleware,
      homeIntroApi.middleware,
      productsApi.middleware,
      statisticsApi.middleware,
      usersApi.middleware,
      colorsApi.middleware
    ),
});

export default store;
