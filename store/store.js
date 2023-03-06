import categorySearchSlice from "@/reducer/categorySearchSlice";
import categorySlice from "@/reducer/categorySlice";
import productsSlice from "@/reducer/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export function categoriesStore() {
  return configureStore({
    reducer: {
      categories: categorySlice,
      products: productsSlice,
      category: categorySearchSlice,
    },
  });
}

export const store = categoriesStore();
