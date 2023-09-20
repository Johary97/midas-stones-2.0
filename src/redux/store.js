import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@stores/product";

export const store = configureStore({
  reducer: { productReducer },
});
