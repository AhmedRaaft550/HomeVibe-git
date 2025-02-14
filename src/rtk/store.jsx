import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import AddProduct from "./AddProduct";

export let store = configureStore({
    reducer : {
      products : productSlice,
      cart : cartSlice,
      new : AddProduct
    }
})

