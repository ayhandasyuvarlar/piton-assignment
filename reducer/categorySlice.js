import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await fetch(
      "https://assign-api.piton.com.tr/api/rest/categories"
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.category;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const selectCategories = (state) => state.categories;
export const selectLoading = (state) => state.categories.loading;
export const selectError = (state) => state.categories.error;

export default categoriesSlice.reducer;
