import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  siteData: [],
};

export const fetchSiteData = createAsyncThunk("fetchSiteData", async () => {
  try {
    const res = await axios.get("/src/data/siteData.json");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

const siteDataSlice = createSlice({
  name: "site-data-slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSiteData.fulfilled, (state, action) => {
        state.loading = false,
        state.siteData = action.payload;
      })
      .addCase(fetchSiteData.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error);
      });
  },
});

export default siteDataSlice.reducer;
