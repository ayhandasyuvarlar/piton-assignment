import authSlice from "@/reducer/authSlice";
import categoryProductsSlice from "@/reducer/categoryProductsSlice";
import categorySearchSlice from "@/reducer/categorySearchSlice";
import categorySlice from "@/reducer/categorySlice";
import productCoverImageSlice from "@/reducer/productCoverImageSlice";
import productDetailSlice from "@/reducer/productDetailSlice";
import productsSlice from "@/reducer/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export function categoriesStore() {
  return configureStore({
    reducer: {
      categories: categorySlice,
      products: productsSlice,
      category: categorySearchSlice,
      productDetail: productDetailSlice,
      categoryProducts: categoryProductsSlice,
      user: authSlice,
      coverImage: productCoverImageSlice,
    },
  });
}

export const store = categoriesStore();
