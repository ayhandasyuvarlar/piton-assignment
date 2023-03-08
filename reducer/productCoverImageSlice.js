import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImageSlice = createAsyncThunk("image", async (fileName) => {
  const res = await axios.post(
    "https://assign-api.piton.com.tr/api/rest/cover_image",
    {
      fileName,
    }
  );
  return res.data;
});

const initialState = {
  url: "",
  error: null,
  loading: false,
};

const coverImageSlice = createSlice({
  name: "image",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImageSlice.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchImageSlice.fulfilled, (state, action) => {
      state.loading = false;
      state.url = action.payload.action_product_image;
    });
    builder.addCase(fetchImageSlice.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default coverImageSlice.reducer;
