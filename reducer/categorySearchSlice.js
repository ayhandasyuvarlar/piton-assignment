import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategoriesSearch = createAsyncThunk(
  "categories/getCategories",
  async (id) => {

    const response = await fetch(
      "https://assign-api.piton.com.tr/api/rest/categories"
    );
    const categories = await response.json();
    const filteredCategory = categories.category?.filter(
      (item) => item.id === parseInt(id) 
    );
    return filteredCategory;
  }
);

const initialState = {
  category: [],
  loading: false,
  error: null,
};

const categorySearchSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoriesSearch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoriesSearch.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.length > 0) {
        state.category = action.payload;
      } else {
        state.category = false;
      }
    });
    builder.addCase(fetchCategoriesSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categorySearchSlice.reducer;
