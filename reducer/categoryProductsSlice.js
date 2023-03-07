import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategoryProducts = createAsyncThunk(
  "categoryProducts/getCategoryProducts",
  async (id) => {
    const response = await fetch(
      `https://assign-api.piton.com.tr/api/rest/products/${id}`
    );

    const { product } = await response.json();
    const loadedProducts = product.map((item) => {
      // burada gelen ürünlere category id ekliyorum
      item.categoryId = id;
      return item;
    });
    return loadedProducts;
  }
);

const initialState = {
  categoryProducts: [],
  loading: false,
  error: null,
};

const categoryProductsSlice = createSlice({
  name: "categoryProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      state.loading = false;

      state.products = action.payload;
    });
    builder.addCase(fetchCategoryProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categoryProductsSlice.reducer;
