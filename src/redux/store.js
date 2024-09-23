import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product-data/ProductSlice";
import siteDataSlice from "./site-data/siteDataSlice";

const store = configureStore({
  reducer: {
    productData: ProductSlice,
    siteData: siteDataSlice,
  },
});

export default store;