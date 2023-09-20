import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get_all } from "@services/product";

const initialState = {
  value: {
    products: [],
  },
};

export const product = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchAll: () => {
      get_all()
        .then((results) => {
          console.log("Résultats ...");
          console.log(results);
        })
        .catch((error) => console.log(error));
    },
  },
});

export const { fetchAll } = product.actions;
export default product.reducer;
