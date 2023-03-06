"use client";
import { fetchCategoriesSearch } from "@/reducer/categorySearchSlice";
import { fetchProducts } from "@/reducer/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Category = ({ searchParams }) => {
  const categoryId = searchParams.category;
  const dispatch = useDispatch();
  const categoryName = useSelector((state) => state.category.category);
  useEffect(() => {
    dispatch(fetchCategoriesSearch(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div>
      {categoryName && categoryName.length > 0 && (
        <>
          {categoryName.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default Category;
