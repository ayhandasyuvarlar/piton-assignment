import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsDetails = createAsyncThunk(
  "products/getProductDetail",
  async (categoryId, productId) => {
    const response = await fetch(
      `https://assign-api.piton.com.tr/api/rest/products/${categoryId}`
    );

    const { product } = await response.json();
    const loadedProducts = product.map((item) => {
      // burada gelen ürünlere category id ekliyorum
      item.categoryId = categoryId;
      return item;
    });
    // burada ise gelen product id ile gelen data ki id eşleştirip ürünü buluyorum
    const loadedProduct = loadedProducts.filter((item) => item.id ===15);
    if (loadedProduct) {
      return loadedProduct;
    }
    return loadedProduct;
  }
);

const initialState = {
  productsDetail: [],
  loading: false,
  error: null,
};

const productDetail = createSlice({
  name: "productsDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsDetails.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsDetails.fulfilled, (state, action) => {
      state.loading = false;

      state.productsDetail = action.payload;
    });
    builder.addCase(fetchProductsDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productDetail.reducer;
