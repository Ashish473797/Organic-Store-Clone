import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  productData: [],
};

const productSlice = createSlice({
  name: "product-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false, 
        state.productData = action.payload
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error);
      });
  },
});

export const fetchProductData = createAsyncThunk("fetchProduct", async () => {
  try {
    const res = await axios.get("/src/data/productData.json");
    await new Promise((res) => {
      setTimeout(() => {
        res();
      }, 1500)
    })
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export default productSlice.reducer;
