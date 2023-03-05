"use client";
import {
  fetchCategories,
  selectCategories,
  selectLoading,
} from "@/reducer/categorySlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import ProductList from "./productList";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Products = () => {
  const { categories } = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    delay(3000).then(() => dispatch(fetchCategories()));
  }, [dispatch]);

  return (
    <div>
      <div>
        {categories.length <= 0 && <Loading />}
        {categories.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <ProductList id={item.id}></ProductList>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
